import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeamsComponent } from './update-teams.component';

describe('UpdateTeamsComponent', () => {
  let component: UpdateTeamsComponent;
  let fixture: ComponentFixture<UpdateTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
