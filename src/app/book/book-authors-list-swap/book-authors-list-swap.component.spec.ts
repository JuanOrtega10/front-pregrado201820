import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorsListSwapComponent } from './book-authors-list-swap.component';

describe('BookAuthorsListSwapComponent', () => {
  let component: BookAuthorsListSwapComponent;
  let fixture: ComponentFixture<BookAuthorsListSwapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAuthorsListSwapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorsListSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
