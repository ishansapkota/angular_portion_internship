import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddProductRequest } from '../models/add-product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers:[ProductService],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  model: AddProductRequest;

  constructor(private service:ProductService)
  {
    this.model = {
      name: 'Ishan',
      price : ''
    }
  }
  onFormSubmit()
  {
    this.service.addCategory(this.model).subscribe({
      next:(response)=>{
        console.log("Data was successfully sent!")
      }
    });
  }

}
