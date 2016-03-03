import {Component, OnDestroy, OnInit, provide, ViewChild} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {MainComponent} from './main/main.component';
import {StandingsComponent} from './standings/standings.component';
import {StatsComponent} from './stats/stats.component';
import {SchedulesComponent} from './schedules/schedules.component';
import {LeagueComponent} from './league/league.component';
import {PlayerComponent} from './player/player.component';
import { LeagueVm, DataService } from './data/data.services';

@Component({
    selector: 'hockey-rink',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, DataService]
})

@RouteConfig([
    { path: '/', name: 'Main', component: MainComponent, useAsDefault: true },
    { path: '/league/:id', name: 'League', component: LeagueComponent },
    { path: '/player/:id', name: 'Player', component: PlayerComponent}
])

export class AppComponent implements OnInit {

    public leagues: LeagueVm[];

    constructor(private _dataService: DataService) { }

    getLeagues() {
        this._dataService.getLeagues().subscribe(leagues => {
            this.leagues = leagues;
        });
    }

    ngOnInit() {
        this.getLeagues();
    }

}
