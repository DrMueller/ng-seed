"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var utils_1 = require("app/infrastructure/utils");
var enums_1 = require("../../enums");
var HttpBaseService = /** @class */ (function () {
    function HttpBaseService(http, objectFactoryService, baseUrl) {
        this.http = http;
        this.objectFactoryService = objectFactoryService;
        this.baseUrl = baseUrl;
    }
    HttpBaseService.prototype.getAsync = function (relativeUrl, ctor) {
        if (ctor === void 0) { ctor = null; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions();
        return this.processResponse(this.http.get(completeUrl, requestOptions), ctor);
    };
    HttpBaseService.prototype.getArrayAsync = function (relativeUrl, ctor) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var completeUrl, requestOptions, array, arrayResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        completeUrl = this.createCompleteUrl(relativeUrl);
                        requestOptions = this.createRequestOptions();
                        return [4 /*yield*/, this.processResponse(this.http.get(completeUrl, requestOptions))];
                    case 1:
                        array = _a.sent();
                        arrayResult = array.map(function (item) {
                            var newObj = _this.objectFactoryService.create(item, ctor);
                            return newObj;
                        });
                        return [2 /*return*/, arrayResult];
                }
            });
        });
    };
    HttpBaseService.prototype.postAsync = function (relativeUrl, body, ctor, contentType) {
        if (ctor === void 0) { ctor = null; }
        if (contentType === void 0) { contentType = enums_1.ContentType.ApplicationJson; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions(contentType);
        return this.processResponse(this.http.post(completeUrl, body, requestOptions), ctor);
    };
    HttpBaseService.prototype.deleteAsync = function (relativeUrl) {
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions();
        var result = this.processResponse(this.http.delete(completeUrl, requestOptions));
        return result;
    };
    HttpBaseService.prototype.putAsync = function (relativeUrl, body, ctor, contentType) {
        if (ctor === void 0) { ctor = null; }
        if (contentType === void 0) { contentType = enums_1.ContentType.ApplicationJson; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions(contentType);
        return this.processResponse(this.http.put(completeUrl, body, requestOptions), ctor);
    };
    HttpBaseService.prototype.patchAsync = function (relativeUrl, body, ctor, contentType) {
        if (ctor === void 0) { ctor = null; }
        if (contentType === void 0) { contentType = enums_1.ContentType.ApplicationJson; }
        var completeUrl = this.createCompleteUrl(relativeUrl);
        var requestOptions = this.createRequestOptions(contentType);
        return this.processResponse(this.http.patch(completeUrl, body, requestOptions), ctor);
    };
    HttpBaseService.prototype.processResponse = function (response, ctor) {
        var _this = this;
        if (ctor === void 0) { ctor = null; }
        var mappedResult = response.map(this.extractData);
        if (ctor) {
            mappedResult = mappedResult.map(function (f) {
                var newObj = _this.objectFactoryService.create(f, ctor);
                return newObj;
            });
        }
        var result = mappedResult.toPromise();
        return result;
    };
    HttpBaseService.prototype.mapContentType = function (contentType) {
        switch (contentType) {
            case enums_1.ContentType.ApplicationJson:
                return 'application/json';
            default:
                throw new RangeError(contentType.toString() + ' is not recognized');
        }
    };
    HttpBaseService.prototype.createRequestOptions = function (contentType) {
        var headers = new http_1.Headers();
        if (contentType) {
            headers.append('Content-Type', this.mapContentType(contentType));
        }
        var requestOptions = new http_1.RequestOptions({
            headers: headers,
            withCredentials: true,
        });
        return requestOptions;
    };
    HttpBaseService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        if (!utils_1.ObjectUtils.isNullOrUndefined(body)) {
            return body;
        }
        return {};
    };
    HttpBaseService.prototype.createCompleteUrl = function (relativeUrl) {
        var result = this.baseUrl + '/' + relativeUrl;
        return result;
    };
    return HttpBaseService;
}());
exports.HttpBaseService = HttpBaseService;
//# sourceMappingURL=http-base.service.js.map