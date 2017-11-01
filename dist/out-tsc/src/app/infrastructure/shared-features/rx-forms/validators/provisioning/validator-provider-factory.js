"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var v = require("../services/validator-implementations");
var ValidatorProviderFactory = /** @class */ (function () {
    function ValidatorProviderFactory() {
    }
    ValidatorProviderFactory.APP_VALIDATOR_TOKEN = new core_1.OpaqueToken('app_validator');
    // https://github.com/rangle/angular-2-aot-sandbox#aot-dos-and-donts
    ValidatorProviderFactory.ValidatorProviders = [
        {
            provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
            multi: true,
            useClass: v.MinLengthValidator
        },
        {
            provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
            multi: true,
            useClass: v.StringMatchValidator
        },
        {
            provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
            multi: true,
            useClass: v.PatternValidator
        },
        {
            provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
            multi: true,
            useClass: v.RequiredValidator
        }
    ];
    return ValidatorProviderFactory;
}());
exports.ValidatorProviderFactory = ValidatorProviderFactory;
//# sourceMappingURL=validator-provider-factory.js.map