import {Component, OnDestroy, OnInit, provide, ViewChild} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {StandingsComponent} from './standings/standings.component'
import {StatsComponent} from './stats/stats.component'
import {SchedulesComponent} from './schedules/schedules.component'
import { LeagueVm, DataService } from './data/data.services';

@Component({
    selector: 'hockey-rink',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, DataService]
})

@RouteConfig([
    { path: 'schedules', name: 'Schedules', component: SchedulesComponent, useAsDefault: true },
    { path: 'stats', name: 'Stats', component: StatsComponent },
    { path: 'standings', name: 'Standings', component: StandingsComponent },
])

export class AppComponent implements OnDestroy, OnInit {

    public leagues: LeagueVm[];

    public menuItems = [
        { caption: 'Schedules', link: ['Schedules'] },
        { caption: 'Stats', link: ['Stats'] },
        { caption: 'Standings', link: ['Standings'] }
    ];

    constructor(private _dataService: DataService) { }

    getLeagues() {
        this._dataService.getLeagues().subscribe(leagues => {
            this.leagues = leagues;
        });
    }

    ngOnInit() {
        this.getLeagues();
    }

    ngOnDestroy() {
    }

}
