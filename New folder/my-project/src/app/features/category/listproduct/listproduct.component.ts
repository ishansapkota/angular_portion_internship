import { Component, numberAttribute } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductRequest } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent {
  products:AddProductRequest[] = [];

  constructor(private service:ProductService)
  {

  }

  ngOnInit():void{
    this.service.listProduct().subscribe(
      {
        next:(data)=>{
          this.products=data;
          console.log(this.products)
        }
      }
    );
  }

  onDelete(id:number):void{

    this.service.deleteProduct(id).subscribe(
      {
        next:(response)=>
          {
            console.log("Data has been deleted!")
          }
      }
    )
  }
}
