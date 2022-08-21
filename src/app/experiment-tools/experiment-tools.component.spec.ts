import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentToolsComponent } from './experiment-tools.component';

describe('ExperimentToolsComponent', () => {
  let component: ExperimentToolsComponent;
  let fixture: ComponentFixture<ExperimentToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
