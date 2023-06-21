import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListComponent } from './review-list.component';

describe('GroupListComponent', () => {
  let component: ReviewListComponent;
  let fixture: ComponentFixture<ReviewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReviewListComponent]
    });
    fixture = TestBed.createComponent(ReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
