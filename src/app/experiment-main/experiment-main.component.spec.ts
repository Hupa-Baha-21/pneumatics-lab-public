import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentMainComponent } from './experiment-main.component';

describe('ExperimentMainComponent', () => {
  let component: ExperimentMainComponent;
  let fixture: ComponentFixture<ExperimentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
