import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { SupportTicketsRoutingModule } from './support-tickets-routing.module';

@NgModule({
  declarations: [SupportTicketsComponent],
  imports: [
    CommonModule,
    SupportTicketsRoutingModule
  ]
})
export class SupportTicketsModule { }
