import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpdateTeamsComponent } from './list-update-teams.component';

describe('ListUpdateTeamsComponent', () => {
  let component: ListUpdateTeamsComponent;
  let fixture: ComponentFixture<ListUpdateTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUpdateTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListUpdateTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
