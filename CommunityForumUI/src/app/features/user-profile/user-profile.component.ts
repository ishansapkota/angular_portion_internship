import { Component } from '@angular/core';
import { UserInformationDTO } from '../models/UserInfoDTO.model';
import { UserService } from '../services/user-service.service';
import { response } from 'express';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
user:UserInformationDTO
constructor(public service:UserService)
{
  this.user={
    firstname:'',
    lastname:'',
    address:'',
    dob:'',
    email:''
  }
}

ngOnInit():void{
  this.service.getUserProfile().subscribe(
    {
      next:(response)=>
        {
          console.log(response)
          this.user=response
          console.log("User profile visible")
        },
        error:(response)=>
    {
      console.log("gg")
    }
    }
  )
}
}
