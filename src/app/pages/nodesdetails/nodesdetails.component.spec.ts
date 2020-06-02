import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesdetailsComponent } from './nodesdetails.component';

describe('NodesdetailsComponent', () => {
  let component: NodesdetailsComponent;
  let fixture: ComponentFixture<NodesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
