import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CollaboratorsRoutingModule } from './collaborators-routing.module';



@NgModule({
  declarations: [CollaboratorsComponent],
  imports: [
    CommonModule,
    CollaboratorsRoutingModule
  ]
})
export class CollaboratorsModule { }
