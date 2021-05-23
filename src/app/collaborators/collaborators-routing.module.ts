import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollaboratorsComponent } from './collaborators/collaborators.component';

const routes: Routes = [
  {path: '', component: CollaboratorsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CollaboratorsRoutingModule { }
