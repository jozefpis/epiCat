import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
      path: '',
      component: VoteComponent
  },
  {
      path: 'topcats',
      component: TopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
