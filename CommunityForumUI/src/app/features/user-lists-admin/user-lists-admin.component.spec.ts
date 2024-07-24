import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListsAdminComponent } from './user-lists-admin.component';

describe('UserListsAdminComponent', () => {
  let component: UserListsAdminComponent;
  let fixture: ComponentFixture<UserListsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
