import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../../features/login/login.component';
import { UserService } from '../../../features/services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,LoginComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public service:UserService)
  {

  }

  onLogout()
  {
    this.service.logoutUser();
    console.log("User successfully logged out.")
  }

}
