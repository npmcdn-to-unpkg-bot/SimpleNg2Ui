import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'standings',
    templateUrl: 'app/standings/standings.component.html'
})

export class StandingsComponent implements OnInit{
    
    public textSample: string;
    
    contructor(){
        
    }
    
    ngOnInit() {
        this.textSample = "Standings";
    }
    
    
}