System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './main/main.component', './league/league.component', './player/player.component', './data/data.services'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, main_component_1, league_component_1, player_component_1, data_services_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (league_component_1_1) {
                league_component_1 = league_component_1_1;
            },
            function (player_component_1_1) {
                player_component_1 = player_component_1_1;
            },
            function (data_services_1_1) {
                data_services_1 = data_services_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dataService) {
                    this._dataService = _dataService;
                }
                AppComponent.prototype.getLeagues = function () {
                    var _this = this;
                    this._dataService.getLeagues().subscribe(function (leagues) {
                        _this.leagues = leagues;
                    });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getLeagues();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'hockey-rink',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, data_services_1.DataService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Main', component: main_component_1.MainComponent, useAsDefault: true },
                        { path: '/league/:id', name: 'League', component: league_component_1.LeagueComponent },
                        { path: '/player/:id', name: 'Player', component: player_component_1.PlayerComponent }
                    ]), 
                    __metadata('design:paramtypes', [data_services_1.DataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map