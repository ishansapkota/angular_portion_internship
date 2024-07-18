import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { LoginDTO } from '../models/LoginRegisterDTO.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model:LoginDTO;

  constructor(private service:UserService)
  {
    this.model ={
      username: '',
      email:'',
      password:''
    }

  }

  onLogin()
  {
    this.service.loginUser(this.model).subscribe(
      {
        next:(response)=>
          {
            this.service.setToken(response);
            console.log("Logged in successfully.");
            console.log(response)
            window.location.assign('/forum/posts');
          }
      }
    )
  }

  onLogout()
  {
    this.service.logoutUser();
    console.log("User successfully logged out.")
  }

}
