import { Component, provide, OnInit, Input } from 'angular2/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { ScheduleVm, DataService } from '../data/data.services';

@Component({
    selector: 'league',
    templateUrl: 'app/league/league.component.html',
    providers: [DataService]
})

export class LeagueComponent implements OnInit {

    //public schedule: Observable<ScheduleVm[]>;
    @Input() id: string;
    public textSample: string;

    constructor(private _dataService: DataService) { }

    //getSchedule() {
    //    this.schedule = this._dataService.getThisWeeksScheduleByLeagueId(258);
    //}

    ngOnInit() {
        this.textSample = "Schedules";
        //this.getSchedule();
    }


}
