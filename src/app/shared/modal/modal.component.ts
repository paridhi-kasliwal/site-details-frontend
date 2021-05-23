import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
import { SitesService } from 'src/app/sites/sites.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal', {static: false}) modal: ElementRef;
  @Output() refresh = new EventEmitter<any>();
  domainForm: FormGroup;

  constructor(private fb: FormBuilder, private _sitesService: SitesService,  @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.domainForm = this.fb.group({
      domain: ['', [Validators.required]],
      storage: ['', [Validators.required]],
      usedStorage: ['', [Validators.required]],
      domainTag: ['', [Validators.required]],
      montlyVisitor: ['', [Validators.required]],
      monthlyVisitorCapacity: ['', [Validators.required]],
      subdomain: this.fb.array([
        this.initSubDomain()
      ]),
    });
  }

  initSubDomain() {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      usedStorage: this.fb.control('', Validators.required),
      domainTag: this.fb.control('', Validators.required),
      montlyVisitor: this.fb.control('', Validators.required),
    });
  }

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
    this.document.body.classList.remove('overflow-hide');
  }

  addsubdomain() {
    this.subdomain.push(this.initSubDomain());
  }

  removesubdomain(idx) {
    this.subdomain.removeAt(idx);
  }

  saveDomainDetails() {
    let reqObj = {
      ...this.domainForm.value,
      status: "Active",
      usedDomains: Math.floor(Math.random() * (10 - 1) + 1),
      availableDomains: Math.floor(Math.random() * (10 - 1) + 1)
    }
    
    for(let el of reqObj['subdomain']) {
      el['status'] = "Active";
    }

    this._sitesService.addDomain(reqObj).subscribe(res => {
      console.log('Domain added successfully');
      this.domainForm.reset();
      this.refresh.emit(true);
      this.close();
    });
  }

  get subdomain() : FormArray {
    return this.domainForm.get('subdomain') as FormArray;
  }
}
