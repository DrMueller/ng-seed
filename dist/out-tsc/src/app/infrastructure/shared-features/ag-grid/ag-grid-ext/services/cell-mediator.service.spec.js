"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cell_mediator_service_1 = require("./cell-mediator.service");
describe('CellMediatorService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cell_mediator_service_1.CellMediatorService]
        });
    });
    it('should create', testing_1.inject([cell_mediator_service_1.CellMediatorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cell-mediator.service.spec.js.map