import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,AddproductComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
