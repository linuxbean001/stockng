import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentvalumedetailsComponent } from './persistentvalumedetails.component';

describe('PersistentvalumedetailsComponent', () => {
  let component: PersistentvalumedetailsComponent;
  let fixture: ComponentFixture<PersistentvalumedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentvalumedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentvalumedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
