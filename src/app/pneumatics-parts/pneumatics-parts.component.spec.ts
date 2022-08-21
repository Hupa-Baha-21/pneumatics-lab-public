import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PneumaticsPartsComponent } from './pneumatics-parts.component';

describe('PneumaticsPartsComponent', () => {
  let component: PneumaticsPartsComponent;
  let fixture: ComponentFixture<PneumaticsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PneumaticsPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PneumaticsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
