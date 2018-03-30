"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var environment_service_1 = require("./environment.service");
describe('EnvironmentService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [environment_service_1.EnvironmentService]
        });
    });
    it('should create', testing_1.inject([environment_service_1.EnvironmentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=environment.service.spec.js.map