import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';


const routes: Routes = [
  {path: '', component: SupportTicketsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SupportTicketsRoutingModule { }
