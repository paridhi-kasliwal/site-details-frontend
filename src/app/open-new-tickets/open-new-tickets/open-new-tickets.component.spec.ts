import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNewTicketsComponent } from './open-new-tickets.component';

describe('OpenNewTicketsComponent', () => {
  let component: OpenNewTicketsComponent;
  let fixture: ComponentFixture<OpenNewTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenNewTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenNewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
