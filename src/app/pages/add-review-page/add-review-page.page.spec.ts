import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewPagePage } from './add-review-page.page';

describe('AddReviewPagePage', () => {
  let component: AddReviewPagePage;
  let fixture: ComponentFixture<AddReviewPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
