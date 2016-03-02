System.register(['angular2/core', 'angular2/router', '../data/data.services', '../test/test.component', '../stats/stats.component', '../standings/standings.component', '../schedules/schedules.component'], function(exports_1, context_1) {
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
    var core_1, router_1, data_services_1, test_component_1, stats_component_1, standings_component_1, schedules_component_1;
    var LeagueComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_services_1_1) {
                data_services_1 = data_services_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (stats_component_1_1) {
                stats_component_1 = stats_component_1_1;
            },
            function (standings_component_1_1) {
                standings_component_1 = standings_component_1_1;
            },
            function (schedules_component_1_1) {
                schedules_component_1 = schedules_component_1_1;
            }],
        execute: function() {
            LeagueComponent = (function () {
                function LeagueComponent(_dataService, _router, _routeParams) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                LeagueComponent.prototype.getLeague = function (leagueId) {
                    var _this = this;
                    this._dataService.getLeagueById(leagueId)
                        .subscribe(function (l) {
                        _this.leagueObj = l;
                    });
                };
                LeagueComponent.prototype.ngOnInit = function () {
                    this.leagueId = +this._routeParams.get('id');
                    this.getLeague(this.leagueId);
                };
                LeagueComponent = __decorate([
                    core_1.Component({
                        selector: 'league',
                        directives: [test_component_1.TestComponent, stats_component_1.StatsComponent, standings_component_1.StandingsComponent, schedules_component_1.SchedulesComponent],
                        templateUrl: 'app/league/league.component.html',
                        providers: [data_services_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_services_1.DataService, router_1.Router, router_1.RouteParams])
                ], LeagueComponent);
                return LeagueComponent;
            }());
            exports_1("LeagueComponent", LeagueComponent);
        }
    }
});
//# sourceMappingURL=league.component.js.map