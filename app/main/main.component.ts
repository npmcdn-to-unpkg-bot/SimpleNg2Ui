import { Component, provide, OnInit } from 'angular2/core';
import { LeagueVm, StatsVm, DataService } from '../data/data.services';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {FilterTextComponent} from '../blocks/filter-text/filter-text.component';

@Component({
    selector: 'main',
    templateUrl: 'app/main/main.component.html',
    directives: [ROUTER_DIRECTIVES, FilterTextComponent],
    providers: [ROUTER_PROVIDERS, DataService]
})

export class MainComponent implements OnInit {

    public leagues: Observable<LeagueVm[]>;
    public stats: Observable<StatsVm[]>;

    constructor(private _dataService: DataService, private _router: Router) { }

    filterChanged(searchText: string) {
        console.log(searchText);
        //this.filteredVehicles = this._filterService.filter(searchText, ['id', 'name', 'type'], this.vehicles);
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
        this.stats = this._dataService.getAllTimeStats();
    }

    ngOnInit() {
        this.getLeagues();
        this.getAllTimeStats();
    }

}
