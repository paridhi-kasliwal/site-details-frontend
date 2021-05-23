import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'sites', loadChildren: () => import('./sites/sites.module').then(m => m.SitesModule)},
  {path: 'migrations', loadChildren: () => import('./migrations/migrations.module').then(m => m.MigrationsModule)},
  {path: 'backups', loadChildren: () => import('./backups/backups.module').then(m => m.BackupsModule)},
  {path: 'collaborators', loadChildren: () => import('./collaborators/collaborators.module').then(m => m.CollaboratorsModule)},
  {path: 'support-tickets', loadChildren: () => import('./support-tickets/support-tickets.module').then(m => m.SupportTicketsModule)},
  {path: 'open-new-ticket', loadChildren: () => import('./open-new-tickets/open-new-tickets.module').then(m => m.OpenNewTicketsModule)},
  {path: '', loadChildren: () => import('./sites/sites.module').then(m => m.SitesModule)} // for default redirection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
