import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

let leaguesUrl = "http://api.watercityrollerhockey.com/api/v1/league";

export interface LeagueVm {
  seasonId: number;
  name: string;
  entityId: number;
  id: number;
}

@Injectable()
export class LeagueService {
    
    constructor(private _http: Http) {}
 
    getLeagues() {
        return this._http.get(leaguesUrl)
        .map((response: Response) => <LeagueVm[]>response.json());
    } 
    
}