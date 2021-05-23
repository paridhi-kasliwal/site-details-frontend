import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MigrationsComponent } from './migrations/migrations.component';

const routes: Routes = [
  {path: '', component: MigrationsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MigrationsRoutingModule { }
