import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {StandingsComponent} from './standings/standings.component'
import {StatsComponent} from './stats/stats.component'
import {SchedulesComponent} from './schedules/schedules.component'
import {LeagueComponent} from './league/league.component'

bootstrap(AppComponent, [])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
