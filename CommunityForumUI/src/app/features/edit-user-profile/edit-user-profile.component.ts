import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInformationDTO } from '../models/UserInfoDTO.model';
import { UserService } from '../services/user-service.service';
import { Router } from 'express';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user-profile',
  standalone: true,
  imports: [FormsModule, NavbarComponent,RouterModule,CommonModule],
  templateUrl: './edit-user-profile.component.html',
  styleUrl: './edit-user-profile.component.css'
})
export class EditUserProfileComponent {

  user:UserInformationDTO

  constructor(public service:UserService,private route:ActivatedRoute)
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
        this.service.getUserProfile().subscribe({
          next: (data) => {
            this.user= data;
          }
        });
      }
  

  onUpdate():void
{
  
  this.service.updateUser(this.user).subscribe(
    {
      next:(response)=>
        {
          console.log("Data updated successfully!")
          window.location.assign('user-profile')
        }
    }
  )
}


}
