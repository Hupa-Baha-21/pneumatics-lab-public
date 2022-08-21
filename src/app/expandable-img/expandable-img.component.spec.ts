import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableImgComponent } from './expandable-img.component';

describe('ExpandableImgComponent', () => {
  let component: ExpandableImgComponent;
  let fixture: ComponentFixture<ExpandableImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
