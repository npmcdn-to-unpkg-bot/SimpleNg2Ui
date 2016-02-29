import {Component, OnDestroy, OnInit, provide, ViewChild} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import  'rxjs/Rx';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { LeagueVm, LeagueService } from './leagues/league.services';

@Component({
    selector: 'hockey-rink',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, LeagueService]
})

export class AppComponent implements OnDestroy, OnInit { 
 
    public leagues: LeagueVm[];
 
     public menuItems = [
    { caption: 'Dashboard', link: ['Dashboard'] },
    { caption: 'Characters', link: ['Characters'] },
    { caption: 'Vehicles', link: ['Vehicles'] }
  ];
 
    constructor(private _leagueService: LeagueService) { }
 
    getLeagues() {
     this._leagueService.getLeagues().subscribe(leagues => {
        this.leagues = leagues;
      });
    }
 
    ngOnInit() {
        this.getLeagues();
    }
    
    ngOnDestroy() {
    }
 
}
