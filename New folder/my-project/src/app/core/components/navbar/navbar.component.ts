import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListproductComponent } from '../../../features/category/listproduct/listproduct.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,ListproductComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
