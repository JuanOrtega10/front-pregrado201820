import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewsListComponent } from './book-reviews-list.component';

describe('BookReviewsComponent', () => {
  let component: BookReviewsListComponent;
  let fixture: ComponentFixture<BookReviewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReviewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
