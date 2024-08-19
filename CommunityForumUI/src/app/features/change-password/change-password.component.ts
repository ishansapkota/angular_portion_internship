import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { ChangePasswordDTO } from '../models/ChangePasswordDTO.model';
import { UserService } from '../services/user-service.service';
import { response } from 'express';
import { UserInformationDTO } from '../models/UserInfoDTO.model';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [NavbarComponent,FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
pass:ChangePasswordDTO
user:UserInformationDTO
constructor(private service:UserService)
{
  this.pass={
    password: ''
  }

}

ngOnInit():void{
  this.service.getUserProfile().subscribe({
    next: (data) => {
      this.user= data;
    }
  });
}

onChange():void
{
  this.service.changePassword(this.pass).subscribe(
    {
      next:(response)=>
        {
          console.log("Password has been reset successfully.")
        }
    }
  )
}
}
