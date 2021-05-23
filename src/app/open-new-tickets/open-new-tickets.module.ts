import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenNewTicketsComponent } from './open-new-tickets/open-new-tickets.component';
import { OpenNewTicketsRoutingModule } from './open-new-tickets-routing.module';

@NgModule({
  declarations: [OpenNewTicketsComponent],
  imports: [
    CommonModule,
    OpenNewTicketsRoutingModule
  ]
})
export class OpenNewTicketsModule { }
