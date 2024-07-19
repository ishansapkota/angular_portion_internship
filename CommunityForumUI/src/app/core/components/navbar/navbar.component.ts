import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../../features/login/login.component';
import { UserService } from '../../../features/services/user-service.service';
import { CommonModule } from '@angular/common';
import { LoginDTO } from '../../../features/models/LoginRegisterDTO.model';
import { TokenDataDTO } from '../../../features/models/TokenDataDTO.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,LoginComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user:TokenDataDTO|null = null;
  constructor(public service:UserService)
  {
      this.user = this.service.getUserInfo();
  }

  onLogout()
  {
    this.service.logoutUser();
    console.log("User successfully logged out.")
  }

}
