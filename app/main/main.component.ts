import { Component, provide, OnInit, ViewChild } from 'angular2/core';
import { LeagueVm, StatsVm, DataService } from '../data/data.services';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {FilterTextComponent, FilterService} from '../blocks/filter-text/filter-text';
declare var componentHandler: any;

@Component({
    selector: 'main',
    templateUrl: 'app/main/main.component.html',
    directives: [ROUTER_DIRECTIVES, FilterTextComponent],
    providers: [ROUTER_PROVIDERS, DataService, FilterService]
})

export class MainComponent implements OnInit {

    public leagues: Observable<LeagueVm[]>;
    public stats: StatsVm[];
    filteredStats = this.stats;
    @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

    constructor(private _filterService: FilterService,
        private _dataService: DataService, private _router: Router) { }

    filterChanged(searchText: string) {
        console.log(searchText);
        this.filteredStats = this._filterService.filter(searchText, ['name'], this.stats);
    }

    getLeagues() {
        this.leagues = this._dataService.getLeagues();
    }

    gotoLeague(league: LeagueVm) {
        let link = ['League', { id: league.id }];
        console.log('clicked!');
        this._router.navigate(link);
        event.preventDefault();
    }

    getAllTimeStats() {
        this.stats = [];
        this._dataService.getAllTimeStats()
            .subscribe(l => {
            this.stats = this.filteredStats = l;
            this.filterComponent.clear();
        });
    }

    ngOnInit() {
        componentHandler.upgradeDom();
        this.getLeagues();
        this.getAllTimeStats();
    }

}
