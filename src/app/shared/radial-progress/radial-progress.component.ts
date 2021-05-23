import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radial-progress',
  templateUrl: './radial-progress.component.html',
  styleUrls: ['./radial-progress.component.css']
})
export class RadialProgressComponent implements OnInit {
  @Input() usedDomains;
  @Input() availableDomains;
  usedPercent: number;
  availablePercent: number;

  constructor() { }

  ngOnInit() {
    this.usedPercent = Math.floor((this.usedDomains/this.availableDomains)*100);
    this.availablePercent = 100 - this.usedPercent;
  }
}
