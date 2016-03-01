import {Component, OnInit} from 'angular2/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { StatsVm, DataService } from '../data/data.services';

@Component({
    selector: 'stats',
    templateUrl: 'app/stats/stats.component.html',
    providers: [DataService]
})

export class StatsComponent implements OnInit {

    public stats: Observable<StatsVm[]>;
    public textSample: string;

    constructor(private _dataService: DataService) { }

    getStats() {
        this.stats = this._dataService.getStatsByLeagueId(258);
    }

    ngOnInit() {
        this.textSample = "Stats";
        this.getStats();
    }


}
