import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { SitesService } from '../sites.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  @ViewChild('modal', {static: false}) modal: ModalComponent
  allData: any = [];
  domainList: any = [];
  recordsPerPage = 10;
  search: string = '';
  searchedList: any = [];

  constructor(private _sitesService: SitesService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this._sitesService.getDomains().subscribe(res => {
      let data:any = [];
      data = res; 
      this.allData = data.map(d => ({
        ...d,
        storagePercent: (d.usedStorage/d.storage)*100 + '%',
        visitorPercent: (d.montlyVisitor/d.monthlyVisitorCapacity)*100 + '%'
      }));
      this.domainList = this.allData.slice(0, this.recordsPerPage);
      this.searchedList = this.domainList;
    });
  }

  changeRecordsPerPage(count) {
    this.recordsPerPage = count;
    this.domainList = this.allData.slice(0, this.recordsPerPage);
  }

  searchDomain(name) {
    this.domainList = this.searchedList.filter(domain => domain.domain.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }

  openModal() {
    this.modal.open();
    this.document.body.classList.add('overflow-hide');
  }
}
