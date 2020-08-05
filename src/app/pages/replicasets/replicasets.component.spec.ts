import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicasetsComponent } from './replicasets.component';

describe('ReplicasetsComponent', () => {
  let component: ReplicasetsComponent;
  let fixture: ComponentFixture<ReplicasetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicasetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
