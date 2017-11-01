"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var main_1 = require("ag-grid-angular/main");
var primeng_1 = require("primeng/primeng");
var rx_forms_1 = require("app/infrastructure/shared-features/rx-forms");
var collapsible_card_1 = require("app/infrastructure/widgets/collapsible-card");
var select_1 = require("app/infrastructure/widgets/select");
var comp = require("./domain/components");
var serv = require("./domain/services");
var playground_routing_module_1 = require("./playground-routing.module");
var PlaygroundModule = /** @class */ (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                playground_routing_module_1.PlaygroundRoutingModule,
                collapsible_card_1.CollapsibleCardModule,
                select_1.SelectModule,
                primeng_1.EditorModule,
                primeng_1.SharedModule,
                rx_forms_1.RxFormsModule,
                main_1.AgGridModule.withComponents([
                    comp.PlaygroundGridBuilderComponent
                ])
            ],
            declarations: [
                comp.PlaygroundComponent,
                comp.PlaygroundOverviewComponent,
                comp.PlaygroundCollapsibleCardComponent,
                comp.PlaygroundSelectComponent,
                comp.PlaygroundPrimengEditorComponent,
                comp.PlaygroundRxFormComponent,
                comp.PlaygroundEnumSelectComponent,
                comp.PlaygroundErrorComponent,
                comp.PlaygroundRxFormControlWithValidationComponent,
                comp.PlaygroundServerGetComponent,
                comp.PlaygroundServerPostComponent,
                comp.PgOrgMainComponent,
                comp.PgOrgAddressComponent,
                comp.PgOrgHqComponent,
                comp.PgOrgAddressComponent,
                comp.PlaygroundReflectComponent,
                comp.PlaygroundGridBuilderComponent
            ],
            providers: [
                serv.PlaygroundIndividualService
            ]
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;
//# sourceMappingURL=playground.module.js.map