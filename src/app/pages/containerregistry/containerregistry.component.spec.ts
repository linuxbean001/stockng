import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerregistryComponent } from './containerregistry.component';

describe('ContainerregistryComponent', () => {
  let component: ContainerregistryComponent;
  let fixture: ComponentFixture<ContainerregistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerregistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
