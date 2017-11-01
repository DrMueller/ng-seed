"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var grid_builder_service_1 = require("./grid-builder.service");
describe('GridBuilderService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [grid_builder_service_1.GridBuilderService]
        });
    });
    it('should be created', testing_1.inject([grid_builder_service_1.GridBuilderService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=grid-builder.service.spec.js.map