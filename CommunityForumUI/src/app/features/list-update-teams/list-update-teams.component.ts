import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UserService } from '../services/user-service.service';
import { TeamsDTO } from '../models/TeamsDTO.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-update-teams',
  standalone: true,
  imports: [AdminDashboardComponent,CommonModule,FormsModule,MatIconModule,RouterModule],
  templateUrl: './list-update-teams.component.html',
  styleUrl: './list-update-teams.component.css'
})
export class ListUpdateTeamsComponent {

  teams:TeamsDTO[]=[]
  constructor(private service:UserService)
  {

  }

  ngOnInit()
  {
      this.service.getAllTeams().subscribe(
        {
          next:(response)=>
            {
              this.teams = response
              console.log("Teams Listed")
            }
        }
      )

  }
  toUpdate(id:number)
  {
      window.location.assign(`/admin/update-teams/${id}`)
  }


}
