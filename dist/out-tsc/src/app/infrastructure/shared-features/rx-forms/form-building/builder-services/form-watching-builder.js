"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/debounceTime");
var FormWatchingBuilder = /** @class */ (function () {
    function FormWatchingBuilder(formGroup, formValidationService, formBuildingService) {
        this.formGroup = formGroup;
        this.formValidationService = formValidationService;
        this.formBuildingService = formBuildingService;
        this.debounceMilliseconds = 0;
    }
    FormWatchingBuilder.prototype.withDebcounceTime = function (debounceMilliseconds) {
        this.debounceMilliseconds = debounceMilliseconds;
        return this;
    };
    FormWatchingBuilder.prototype.buildFormWatcher = function () {
        var _this = this;
        this.formGroup.valueChanges.debounceTime(this.debounceMilliseconds).subscribe(function () {
            _this.formValidationService.validate();
        });
        return this.formBuildingService;
    };
    return FormWatchingBuilder;
}());
exports.FormWatchingBuilder = FormWatchingBuilder;
//# sourceMappingURL=form-watching-builder.js.map