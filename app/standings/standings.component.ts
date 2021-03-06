import { Component, provide, OnInit, Input } from 'angular2/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { StandingsVm, DataService } from '../data/data.services';

@Component({
    selector: 'standings',
    templateUrl: 'app/standings/standings.component.html',
    providers: [DataService]
})
export class StandingsComponent implements OnInit {

    @Input() leagueId: number;
    public standings: Observable<StandingsVm[]>;
    public textSample: string;

    constructor(private _dataService: DataService) { }

    getStandings() {
        this.standings = this._dataService.getStandingsByLeagueId(this.leagueId);
    }

    ngOnInit() {
        this.textSample = "Standings";
        this.getStandings();
    }


}
