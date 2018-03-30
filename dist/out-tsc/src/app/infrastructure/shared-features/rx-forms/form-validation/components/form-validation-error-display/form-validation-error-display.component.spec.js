"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var models_1 = require("../../models");
var form_validation_error_display_component_1 = require("./form-validation-error-display.component");
describe('FormValidationErrorDisplayComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [form_validation_error_display_component_1.FormValidationErrorDisplayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        var mockValidatedControl = new models_1.ValidatedControl('', null);
        fixture = testing_1.TestBed.createComponent(form_validation_error_display_component_1.FormValidationErrorDisplayComponent);
        component = fixture.componentInstance;
        component.validatedControl = mockValidatedControl;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-validation-error-display.component.spec.js.map