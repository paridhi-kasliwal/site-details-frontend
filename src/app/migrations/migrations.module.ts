import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MigrationsComponent } from './migrations/migrations.component';
import { MigrationsRoutingModule } from './migrations-routing.module';

@NgModule({
  declarations: [MigrationsComponent],
  imports: [
    CommonModule,
    MigrationsRoutingModule
  ]
})
export class MigrationsModule { }
