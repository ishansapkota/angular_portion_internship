import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostWithCommentsComponent } from './forum-post-with-comments.component';

describe('ForumPostWithCommentsComponent', () => {
  let component: ForumPostWithCommentsComponent;
  let fixture: ComponentFixture<ForumPostWithCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumPostWithCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumPostWithCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
