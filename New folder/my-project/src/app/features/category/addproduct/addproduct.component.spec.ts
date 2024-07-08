import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductComponent } from './addproduct.component';
import { ListproductComponent } from '../listproduct/listproduct.component';

describe('AddproductComponent', () => {
  let component: AddproductComponent;
  let fixture: ComponentFixture<AddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddproductComponent,ListproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
