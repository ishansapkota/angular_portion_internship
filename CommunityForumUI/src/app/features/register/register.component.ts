import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { LoginDTO } from '../models/LoginRegisterDTO.model';
import { Router } from 'express';
import { Route } from '@angular/router';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model:LoginDTO;
  constructor(private service:UserService)
  {
      this.model ={
        username:'',
        email:'',
        password:''
      }
  }
onRegister()
{
    this.service.registerUsers(this.model).subscribe(
      {
        next:(response)=>
          {
            console.log("User has been registered successfully.");
            window.location.assign('/user/login');
          }
      }
    )
}
}
