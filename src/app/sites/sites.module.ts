import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites/sites.component';
import { SitesRoutingModule } from './sites-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../shared/modal/modal.component';
import { RadialProgressComponent } from '../shared/radial-progress/radial-progress.component';

@NgModule({
  declarations: [
    SitesComponent,
    ModalComponent,
    RadialProgressComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SitesModule { }
