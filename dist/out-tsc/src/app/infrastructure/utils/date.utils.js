"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var object_utils_1 = require("./object.utils");
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.toDefaultDateDescription = function (date) {
        if (object_utils_1.ObjectUtils.isNullOrUndefined(date)) {
            return 'Undefined';
        }
        var result = moment(date).format(this.DefaultDateTimeFormat);
        return result;
    };
    DateUtils.DefaultDateTimeFormat = 'DD.MM.YYYY HH:mm';
    return DateUtils;
}());
exports.DateUtils = DateUtils;
//# sourceMappingURL=date.utils.js.map