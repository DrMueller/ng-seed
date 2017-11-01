"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var object_factory_service_1 = require("./object-factory.service");
describe('ObjectFactoryService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [object_factory_service_1.ObjectFactoryService]
        });
    });
    it('should be created', testing_1.inject([object_factory_service_1.ObjectFactoryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=object-factory.service.spec.js.map