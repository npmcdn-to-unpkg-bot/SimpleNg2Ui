import { Component, OnInit, EventEmitter, Input, Output } from 'angular2/core';
import { LeagueVm, StatsVm, PlayerVm, DataService } from '../data/data.services';
import { Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
declare var componentHandler;

@Component({
    selector: 'player',
    templateUrl: 'app/player/player.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, DataService]
})

export class PlayerComponent implements OnInit {

    public player: Observable<PlayerVm>;
    public playerId: number;

    constructor(private _dataService: DataService, private _routeParams: RouteParams) {}

    getPlayer(id:number) {
        this.player = this._dataService.getPlayerById(this.playerId);
    }

    ngOnInit() {
        componentHandler.upgradeDom();
        this.playerId = +this._routeParams.get('id');
        this.getPlayer(this.playerId);
    }

}
