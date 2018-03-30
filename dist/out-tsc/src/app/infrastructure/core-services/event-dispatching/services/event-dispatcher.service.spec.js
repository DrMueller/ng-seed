"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var event_dispatcher_service_1 = require("./event-dispatcher.service");
describe('EventDispatcherService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [event_dispatcher_service_1.EventDispatcherService]
        });
    });
    it('should create', testing_1.inject([event_dispatcher_service_1.EventDispatcherService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=event-dispatcher.service.spec.js.map