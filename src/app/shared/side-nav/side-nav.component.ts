import { Component, OnInit } from '@angular/core';

declare interface NavigationInfo {
  url: string;
  icon: string;
  name: string;
}

export const Navigation: NavigationInfo[] = [
  { url: '/dashboard', name: 'Dashboard', icon: 'fa fa-pie-chart pr-5'},
  { url: '/sites', name: 'Site Details', icon: 'fa fa-window-maximize pr-5'},
  { url: '/migrations', name: 'Migrations', icon: 'fa fa-database pr-5'},
  { url: '/backups', name: 'Backups', icon: 'fa fa-file pr-5'},
  { url: '/collaborators', name: 'Collaborators', icon: 'fa fa-users pr-5'},
  { url: '/support-tickets', name: 'Support Tickets', icon: 'fa fa-folder-open pr-5'},
  { url: '/open-new-ticket', name: 'Open New Ticket', icon: 'fa fa-plus-square pr-5'}
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  menuItems: any = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = Navigation.filter(menuItem => menuItem);
  }
}
