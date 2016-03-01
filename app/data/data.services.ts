import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

let weekScheduleUrl = "http://api.watercityrollerhockey.com/api/v1/league/258/schedule/week";
let baseUrl = "http://api.watercityrollerhockey.com/api/v1/";

export interface LeagueVm {
    seasonId: number;
    name: string;
    entityId: number;
    id: number;
}

export interface StandingsVm {
    leagueId: number;
    divisionId: number;
    wins: number;
    loss: number;
    otl: number;
    points: number;
    name: string;
    entityId: number;
    id: number;
}

export interface StatsVm {
    leagueId: number;
    memberId: number;
    teamId: number;
    goals: number;
    assists: number;
    points: number;
    pim: number;
    name: string;
    entityId: number;
    id: number;
}

export interface ScheduleVm {
    leagueId: number;
    date: string;
    time: string;
    homeTeam: string;
    awayTeam: string;
    homeTeamId: number;
    awayTeamId: number;
    homeScore: number;
    awayScore: string;
    entityId: number;
    id: number;
}

export interface IDataService {
    getLeagues(): Observable<LeagueVm[]>;
    getStandingsByLeagueId(id: number): Observable<StandingsVm[]>;
    getStatsByLeagueId(id: number): Observable<StatsVm[]>;
}

@Injectable()
export class DataService implements IDataService {

    constructor(private _http: Http) { }

    getLeagues() {
        let leaguesUrl = baseUrl + `league`;
        return this._http.get(leaguesUrl)
            .map((response: Response) => <LeagueVm[]>response.json());
    }

    getStandingsByLeagueId(id: number) {
        let standingsUrl = baseUrl + `league/${id}/standings`;
        console.log(standingsUrl);
        return this._http.get(standingsUrl)
            .map((response: Response) => <StandingsVm[]>response.json());
    }

    getStatsByLeagueId(id: number) {
        let statsUrl = baseUrl + `league/${id}/stats`;
        console.log(statsUrl);
        return this._http.get(statsUrl)
            .map((response: Response) => <StatsVm[]>response.json());
    }

    getThisWeeksScheduleByLeagueId(id: number){
      let scheduleUrl = baseUrl + `league/${id}/schedule/week`;
      console.log(scheduleUrl);
      return this._http.get(scheduleUrl)
          .map((response: Response) => <ScheduleVm[]>response.json());
    }

}