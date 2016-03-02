import { Component, provide, OnInit } from 'angular2/core';
import { LeagueVm, DataService } from '../data/data.services';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'main',
  templateUrl: 'app/main/main.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, DataService]
})

export class MainComponent implements OnInit {

  public textSample: string;
  public leagues: Observable<LeagueVm[]>;
  constructor(private _dataService: DataService, private _router: Router) { }

  getLeagues() {
    this.leagues = this._dataService.getLeagues();
  }

  gotoLeague(league: LeagueVm) {
    let link = ['League', { id: league.id }];
    console.log('clicked!');
    this._router.navigate(link);
    event.preventDefault();
  }


  ngOnInit() {
    this.getLeagues();
  }

}
