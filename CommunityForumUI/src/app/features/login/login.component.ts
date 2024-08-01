import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { LoginDTO } from '../models/LoginRegisterDTO.model';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, NavbarComponent],
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
        // next:(response)=>
        //   {
        //     if (response.result=="User not found" || response.result == "Incorrect Password" ||response.result ==  "No value received!")
        //       {
        //         console.error("Login Faield",response)
        //         alert(response.result)
                
        //       }

        //     else{
        //     this.service.setToken(response.result);
        //     window.location.assign('/forum/posts');
        //     }
        //   }

        next:(response)=>
          {
            if (!this.checkJWT(response.result))
              {
                console.error("Login Faield",response)
                alert(response.result)
              }
            else{
              this.service.setToken(response.result);
              window.location.assign('/forum/posts');
            }
          }
      }
    )
  }


  checkJWT(token:string):boolean{
    const parts = token.split('.')
    if (parts.length == 3)
      {
        return true
      }

    else{
      return false
    }
  }

  onLogout()
  {
    this.service.logoutUser();
    console.log("User successfully logged out.")
  }

}
