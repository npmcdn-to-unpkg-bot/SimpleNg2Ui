import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {MainComponent} from './main/main.component'
import {StandingsComponent} from './standings/standings.component'
import {StatsComponent} from './stats/stats.component'
import {SchedulesComponent} from './schedules/schedules.component'
import {LeagueComponent} from './league/league.component'
import {TestComponent} from './test/test.component'
import {PlayerComponent} from './player/player.component'

bootstrap(AppComponent, [])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
