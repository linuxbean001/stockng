import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageclassesComponent } from './storageclasses.component';

describe('StorageclassesComponent', () => {
  let component: StorageclassesComponent;
  let fixture: ComponentFixture<StorageclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
