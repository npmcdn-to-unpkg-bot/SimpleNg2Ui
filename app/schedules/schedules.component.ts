import { Component, provide, OnInit } from 'angular2/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { ScheduleVm, DataService } from '../data/data.services';

@Component({
    selector: 'schedules',
    templateUrl: 'app/schedules/schedules.component.html',
    providers: [DataService]
})

export class SchedulesComponent implements OnInit {

    public schedule: Observable<ScheduleVm[]>;
    public textSample: string;

    constructor(private _dataService: DataService) { }

    getSchedule() {
        this.schedule = this._dataService.getThisWeeksScheduleByLeagueId(258);
    }

    ngOnInit() {
        this.textSample = "Schedules";
        this.getSchedule();
    }


}
