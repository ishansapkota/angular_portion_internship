import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeamsDTO } from '../models/TeamsDTO.model';
import { UserService } from '../services/user-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router, response } from 'express';

@Component({
  selector: 'app-update-teams',
  standalone: true,
  imports: [AdminDashboardComponent,FormsModule,CommonModule],
  templateUrl: './update-teams.component.html',
  styleUrl: './update-teams.component.css'
})
export class UpdateTeamsComponent {

  // team:TeamsDTO
  // constructor(private service:UserService,private route:ActivatedRoute,private router:Router)
  // {
  //   this.team={
  //     id:NaN,
  //     teamname:'',
  //     points:NaN
  //   }
  // }

  // onNgInit()
  // {
  //   let id = this.route.snapshot.paramMap.get('id')
  //   if(id)
  //     {  
  //     this.service.getTeam(parseInt(id)).subscribe(
  //         {
  //           next:(response)=>
  //             {
  //               this.team = response
  //             }
  //         }
  //       )
  //     }
  // }

  // onUpdate(id:number)
  // {
  //   this.service.updateTeam(id,this.team).subscribe(
  //     {
  //       next:(response)=>
  //         {
  //           console.log("Updated the team")
  //           window.location.assign('/admin/list-teams')
  //         }
  //     }
  //   )

  // }
}


