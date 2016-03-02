import { Component, provide, OnInit, Input } from 'angular2/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { LeagueVm, DataService } from '../data/data.services';
import { TestComponent } from '../test/test.component';
import { StatsComponent } from '../stats/stats.component';
import { StandingsComponent } from '../standings/standings.component';
import { SchedulesComponent } from '../schedules/schedules.component';

@Component({
  selector: 'league',
  directives: [TestComponent, StatsComponent, StandingsComponent, SchedulesComponent],
  templateUrl: 'app/league/league.component.html',
  providers: [DataService]
})

export class LeagueComponent implements OnInit {

  public leagueId: number;
  public leagueObj: LeagueVm;

  constructor(private _dataService: DataService,
    private _router: Router,
    private _routeParams: RouteParams) { }

  getLeague(leagueId: number) {
    this._dataService.getLeagueById(leagueId)
      .subscribe(l => {
      this.leagueObj = l;
    });
  }

  ngOnInit() {
    this.leagueId = +this._routeParams.get('id');
    this.getLeague(this.leagueId);
  }

}
