import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangequotaComponent } from './changequota.component';

describe('ChangequotaComponent', () => {
  let component: ChangequotaComponent;
  let fixture: ComponentFixture<ChangequotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangequotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangequotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
