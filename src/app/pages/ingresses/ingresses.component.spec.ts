import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressesComponent } from './ingresses.component';

describe('IngressesComponent', () => {
  let component: IngressesComponent;
  let fixture: ComponentFixture<IngressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
