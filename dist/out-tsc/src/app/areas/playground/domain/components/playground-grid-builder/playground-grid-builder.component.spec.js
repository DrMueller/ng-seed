"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var playground_grid_builder_component_1 = require("./playground-grid-builder.component");
describe('PlaygroundGridBuilderComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [playground_grid_builder_component_1.PlaygroundGridBuilderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(playground_grid_builder_component_1.PlaygroundGridBuilderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=playground-grid-builder.component.spec.js.map