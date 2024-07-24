import { Component } from '@angular/core';
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { UserInformationDTO } from '../models/UserInfoDTO.model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user-lists-admin',
  standalone: true,
  imports: [AdminDashboardComponent],
  templateUrl: './user-lists-admin.component.html',
  styleUrl: './user-lists-admin.component.css'
})
export class UserListsAdminComponent {
  users: UserInformationDTO[] =[]

  constructor(private service:UserService)
  {

  }

  ngOnInit():void{
    
  }


}
