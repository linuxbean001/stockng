import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamespacesuserComponent } from './namespacesuser.component';

describe('NamespacesuserComponent', () => {
  let component: NamespacesuserComponent;
  let fixture: ComponentFixture<NamespacesuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamespacesuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespacesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
