System.register(['angular2/core', '../data/data.services', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_services_1, router_1;
    var PlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_services_1_1) {
                data_services_1 = data_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PlayerComponent = (function () {
                function PlayerComponent(_dataService, _routeParams) {
                    this._dataService = _dataService;
                    this._routeParams = _routeParams;
                }
                PlayerComponent.prototype.getPlayer = function (id) {
                    this.player = this._dataService.getPlayerById(this.playerId);
                };
                PlayerComponent.prototype.ngOnInit = function () {
                    componentHandler.upgradeDom();
                    this.playerId = +this._routeParams.get('id');
                    this.getPlayer(this.playerId);
                };
                PlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'player',
                        templateUrl: 'app/player/player.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, data_services_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_services_1.DataService, router_1.RouteParams])
                ], PlayerComponent);
                return PlayerComponent;
            }());
            exports_1("PlayerComponent", PlayerComponent);
        }
    }
});
//# sourceMappingURL=player.component.js.map