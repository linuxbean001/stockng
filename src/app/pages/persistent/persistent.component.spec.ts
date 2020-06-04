import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentComponent } from './persistent.component';

describe('PersistentComponent', () => {
  let component: PersistentComponent;
  let fixture: ComponentFixture<PersistentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
