import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenNewTicketsComponent } from './open-new-tickets/open-new-tickets.component';

const routes: Routes = [
  {path: '', component: OpenNewTicketsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OpenNewTicketsRoutingModule { }
