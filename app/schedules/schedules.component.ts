import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'schedules',
    templateUrl: 'app/schedules/schedules.component.html'
})

export class SchedulesComponent implements OnInit{
    
    public textSample: string;
    
    contructor(){
        
    }
    
    ngOnInit() {
        this.textSample = "Schedules";
    }
    
    
}