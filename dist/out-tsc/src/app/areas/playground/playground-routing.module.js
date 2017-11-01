"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var comp = require("./domain/components");
var routes = [
    {
        path: '',
        component: comp.PlaygroundComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: comp.PlaygroundOverviewComponent },
            { path: 'cc', component: comp.PlaygroundCollapsibleCardComponent },
            { path: 'select', component: comp.PlaygroundSelectComponent },
            { path: 'enum-select', component: comp.PlaygroundEnumSelectComponent },
            { path: 'primeng-editor', component: comp.PlaygroundPrimengEditorComponent },
            { path: 'rx-validation', component: comp.PlaygroundRxFormComponent },
            { path: 'rx-fc', component: comp.PlaygroundRxFormControlWithValidationComponent },
            { path: 'error', component: comp.PlaygroundErrorComponent },
            { path: 'server-get', component: comp.PlaygroundServerGetComponent },
            { path: 'server-post', component: comp.PlaygroundServerPostComponent },
            { path: 'comp-com-parent-child', component: comp.PgOrgMainComponent },
            { path: 'reflect', component: comp.PlaygroundReflectComponent },
            { path: 'grid-builder', component: comp.PlaygroundGridBuilderComponent }
        ]
    }
];
var PlaygroundRoutingModule = /** @class */ (function () {
    function PlaygroundRoutingModule() {
    }
    PlaygroundRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PlaygroundRoutingModule);
    return PlaygroundRoutingModule;
}());
exports.PlaygroundRoutingModule = PlaygroundRoutingModule;
//# sourceMappingURL=playground-routing.module.js.map