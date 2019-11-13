import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App imports
import { HypopressGameComponent } from './hypopress-game/hypopress-game.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: '', component: HypopressGameComponent },
  { path: 'ahahah', component: ProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
