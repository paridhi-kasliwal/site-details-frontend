import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackupsComponent } from './backups/backups.component';
import { BackupsRoutingModule } from './backups-routing.module';

@NgModule({
  declarations: [BackupsComponent],
  imports: [
    CommonModule,
    BackupsRoutingModule
  ]
})
export class BackupsModule { }
