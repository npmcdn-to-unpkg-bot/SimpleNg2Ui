import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'stats',
    templateUrl: 'app/stats/stats.component.html'
})

export class StatsComponent implements OnInit{
    
    public textSample: string;
    
    contructor(){
        
    }
    
    ngOnInit() {
        this.textSample = "Stats";
    }
    
    
}