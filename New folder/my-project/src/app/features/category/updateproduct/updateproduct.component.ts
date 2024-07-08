import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { AddProductRequest } from '../models/product.model';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {

model:AddProductRequest;
constructor(private service:ProductService,private router:Router,private route:ActivatedRoute)
{
  this.model =
  {
    id:NaN,
    name:'',
    price:NaN
  }

}

// ngOnInit(): void {
//   console.log('what up?')
//   this.route.paramMap.subscribe(params => {
//     const productId = +params.get('id');
//     if (productId) {
//       this.service.listaProduct(productId).subscribe({
//         next: (data) => {
//           this.model = data;
//         },
//         error: (err) => {
//           console.error('Error fetching product data', err);
//         }
//       });
//     }
//   });
// }

onUpdate():void
{
  
  this.service.updateProduct(this.model).subscribe(
    {
      next:(response)=>
        {
          console.log("Data updated successfully!")
          this.router.navigate(['product/list']); 
        }
    }
  )
}
}
