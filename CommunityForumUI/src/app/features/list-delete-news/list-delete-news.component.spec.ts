import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteNewsComponent } from './list-delete-news.component';

describe('ListDeleteNewsComponent', () => {
  let component: ListDeleteNewsComponent;
  let fixture: ComponentFixture<ListDeleteNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeleteNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDeleteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
