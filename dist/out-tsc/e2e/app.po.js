"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var NgSeedPage = /** @class */ (function () {
    function NgSeedPage() {
    }
    NgSeedPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    NgSeedPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return NgSeedPage;
}());
exports.NgSeedPage = NgSeedPage;
//# sourceMappingURL=app.po.js.map