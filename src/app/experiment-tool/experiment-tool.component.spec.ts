import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentToolComponent } from './experiment-tool.component';

describe('ExperimentToolComponent', () => {
  let component: ExperimentToolComponent;
  let fixture: ComponentFixture<ExperimentToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
