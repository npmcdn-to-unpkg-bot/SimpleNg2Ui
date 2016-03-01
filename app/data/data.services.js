System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var baseUrl, DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            baseUrl = "http://api.watercityrollerhockey.com/api/v1/";
            DataService = (function () {
                function DataService(_http) {
                    this._http = _http;
                }
                DataService.prototype.getLeagues = function () {
                    var leaguesUrl = baseUrl + "league";
                    return this._http.get(leaguesUrl)
                        .map(function (response) { return response.json(); });
                };
                DataService.prototype.getStandingsByLeagueId = function (id) {
                    var standingsUrl = baseUrl + ("league/" + id + "/standings");
                    console.log(standingsUrl);
                    return this._http.get(standingsUrl)
                        .map(function (response) { return response.json(); });
                };
                DataService.prototype.getStatsByLeagueId = function (id) {
                    var statsUrl = baseUrl + ("league/" + id + "/stats");
                    console.log(statsUrl);
                    return this._http.get(statsUrl)
                        .map(function (response) { return response.json(); });
                };
                DataService.prototype.getThisWeeksScheduleByLeagueId = function (id) {
                    var scheduleUrl = baseUrl + ("league/" + id + "/schedule/week");
                    console.log(scheduleUrl);
                    return this._http.get(scheduleUrl)
                        .map(function (response) { return response.json(); });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.services.js.map