System.register(['angular2/core', '../data/data.services', 'angular2/router', '../blocks/filter-text/filter-text'], function(exports_1, context_1) {
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
    var core_1, data_services_1, router_1, filter_text_1;
    var MainComponent;
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
            },
            function (filter_text_1_1) {
                filter_text_1 = filter_text_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(_filterService, _dataService, _router) {
                    this._filterService = _filterService;
                    this._dataService = _dataService;
                    this._router = _router;
                    this.filteredStats = this.stats;
                }
                MainComponent.prototype.filterChanged = function (searchText) {
                    console.log(searchText);
                    this.filteredStats = this._filterService.filter(searchText, ['name'], this.stats);
                };
                MainComponent.prototype.getLeagues = function () {
                    this.leagues = this._dataService.getLeagues();
                };
                MainComponent.prototype.gotoLeague = function (league) {
                    var link = ['League', { id: league.id }];
                    console.log('clicked!');
                    this._router.navigate(link);
                    event.preventDefault();
                };
                MainComponent.prototype.getAllTimeStats = function () {
                    var _this = this;
                    this.stats = [];
                    this._dataService.getAllTimeStats()
                        .subscribe(function (l) {
                        _this.stats = _this.filteredStats = l;
                        _this.filterComponent.clear();
                    });
                };
                MainComponent.prototype.ngOnInit = function () {
                    componentHandler.upgradeDom();
                    this.getLeagues();
                    this.getAllTimeStats();
                };
                __decorate([
                    core_1.ViewChild(filter_text_1.FilterTextComponent), 
                    __metadata('design:type', filter_text_1.FilterTextComponent)
                ], MainComponent.prototype, "filterComponent", void 0);
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: 'app/main/main.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, filter_text_1.FilterTextComponent],
                        providers: [router_1.ROUTER_PROVIDERS, data_services_1.DataService, filter_text_1.FilterService]
                    }), 
                    __metadata('design:paramtypes', [filter_text_1.FilterService, data_services_1.DataService, router_1.Router])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map