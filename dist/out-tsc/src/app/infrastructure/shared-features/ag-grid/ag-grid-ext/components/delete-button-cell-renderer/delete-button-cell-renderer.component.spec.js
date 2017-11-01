"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var delete_button_cell_renderer_component_1 = require("./delete-button-cell-renderer.component");
describe('DeleteButtonCellRendererComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [delete_button_cell_renderer_component_1.DeleteButtonCellRendererComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(delete_button_cell_renderer_component_1.DeleteButtonCellRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=delete-button-cell-renderer.component.spec.js.map