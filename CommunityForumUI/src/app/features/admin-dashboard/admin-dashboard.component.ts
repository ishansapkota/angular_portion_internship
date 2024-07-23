import { Component } from '@angular/core';
import {} from '@angular/material'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { UserService } from '../services/user-service.service';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatSidenavModule,MatListModule,RouterModule,MatButtonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
constructor(private service:UserService)
{
}

logout()
{
  this.service.logoutUser()
  window.location.assign('')
}

}
