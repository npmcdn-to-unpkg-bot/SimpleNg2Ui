System.register(['angular2/core', '../data/data.services'], function(exports_1, context_1) {
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
    var core_1, data_services_1;
    var StandingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_services_1_1) {
                data_services_1 = data_services_1_1;
            }],
        execute: function() {
            StandingsComponent = (function () {
                function StandingsComponent(_dataService) {
                    this._dataService = _dataService;
                }
                StandingsComponent.prototype.getStandings = function () {
                    this.standings = this._dataService.getStandingsByLeagueId(this.leagueId);
                };
                StandingsComponent.prototype.ngOnInit = function () {
                    this.textSample = "Standings";
                    this.getStandings();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StandingsComponent.prototype, "leagueId", void 0);
                StandingsComponent = __decorate([
                    core_1.Component({
                        selector: 'standings',
                        templateUrl: 'app/standings/standings.component.html',
                        providers: [data_services_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_services_1.DataService])
                ], StandingsComponent);
                return StandingsComponent;
            }());
            exports_1("StandingsComponent", StandingsComponent);
        }
    }
});
//# sourceMappingURL=standings.component.js.map