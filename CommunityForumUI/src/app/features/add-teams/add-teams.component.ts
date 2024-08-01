import { Component } from '@angular/core';
import { TeamsDTO } from '../models/TeamsDTO.model';
import { UserService } from '../services/user-service.service';
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTeamsDTO } from '../models/AddTeamsDTO.model';

@Component({
  selector: 'app-add-teams',
  standalone: true,
  imports: [AdminDashboardComponent,CommonModule,FormsModule],
  templateUrl: './add-teams.component.html',
  styleUrl: './add-teams.component.css'
})
export class AddTeamsComponent {

  team:AddTeamsDTO
  constructor(private service:UserService)
  {
    this.team={
      teamname:'',
      points:NaN
    }

  }

  onAdd()
  {
    this.service.addTeams(this.team).subscribe(
      {
        next:(response)=>
        {
          console.log("Added new team")
        }
      }
    )
  }

}
