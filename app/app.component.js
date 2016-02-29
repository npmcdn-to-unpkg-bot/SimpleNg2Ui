System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './leagues/league.services'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, league_services_1;
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
            function (league_services_1_1) {
                league_services_1 = league_services_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_leagueService) {
                    this._leagueService = _leagueService;
                    this.menuItems = [
                        { caption: 'Dashboard', link: ['Dashboard'] },
                        { caption: 'Characters', link: ['Characters'] },
                        { caption: 'Vehicles', link: ['Vehicles'] }
                    ];
                }
                AppComponent.prototype.getLeagues = function () {
                    var _this = this;
                    this._leagueService.getLeagues().subscribe(function (leagues) {
                        _this.leagues = leagues;
                    });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getLeagues();
                };
                AppComponent.prototype.ngOnDestroy = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'hockey-rink',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, league_services_1.LeagueService]
                    }), 
                    __metadata('design:paramtypes', [league_services_1.LeagueService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map