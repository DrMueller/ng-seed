"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var models_1 = require("../../models");
var form_control_component_1 = require("./form-control.component");
describe('FormControlComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [form_control_component_1.FormControlComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        var mockFormGroup = new forms_1.FormGroup({});
        var mockValidatedControl = new models_1.ValidatedControl('', null);
        fixture = testing_1.TestBed.createComponent(form_control_component_1.FormControlComponent);
        component = fixture.componentInstance;
        component.formGroup = mockFormGroup;
        component.validatedControl = mockValidatedControl;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-control.component.spec.js.map