import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostingComponent } from './forum-posting.component';

describe('ForumPostingComponent', () => {
  let component: ForumPostingComponent;
  let fixture: ComponentFixture<ForumPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumPostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
