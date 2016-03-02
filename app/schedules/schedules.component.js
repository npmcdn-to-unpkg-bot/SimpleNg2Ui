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
    var SchedulesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_services_1_1) {
                data_services_1 = data_services_1_1;
            }],
        execute: function() {
            SchedulesComponent = (function () {
                function SchedulesComponent(_dataService) {
                    this._dataService = _dataService;
                }
                SchedulesComponent.prototype.getSchedule = function () {
                    this.schedule = this._dataService.getThisWeeksScheduleByLeagueId(this.leagueId);
                };
                SchedulesComponent.prototype.ngOnInit = function () {
                    this.textSample = "Schedules";
                    this.getSchedule();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], SchedulesComponent.prototype, "leagueId", void 0);
                SchedulesComponent = __decorate([
                    core_1.Component({
                        selector: 'schedules',
                        templateUrl: 'app/schedules/schedules.component.html',
                        providers: [data_services_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_services_1.DataService])
                ], SchedulesComponent);
                return SchedulesComponent;
            }());
            exports_1("SchedulesComponent", SchedulesComponent);
        }
    }
});
//# sourceMappingURL=schedules.component.js.map