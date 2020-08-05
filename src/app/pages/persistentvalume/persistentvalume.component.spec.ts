import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentvalumeComponent } from './persistentvalume.component';

describe('PersistentvalumeComponent', () => {
  let component: PersistentvalumeComponent;
  let fixture: ComponentFixture<PersistentvalumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentvalumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentvalumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
