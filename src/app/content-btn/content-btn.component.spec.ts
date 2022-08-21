import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBtnComponent } from './content-btn.component';

describe('ContentBtnComponent', () => {
  let component: ContentBtnComponent;
  let fixture: ComponentFixture<ContentBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
