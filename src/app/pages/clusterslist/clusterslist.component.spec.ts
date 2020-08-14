import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterslistComponent } from './clusterslist.component';

describe('ClusterslistComponent', () => {
  let component: ClusterslistComponent;
  let fixture: ComponentFixture<ClusterslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
