import { Component } from '@angular/core';
import { TeamsDTO } from '../models/AddTeamsDTO.model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-add-teams',
  standalone: true,
  imports: [],
  templateUrl: './add-teams.component.html',
  styleUrl: './add-teams.component.css'
})
export class AddTeamsComponent {

  team:TeamsDTO
  constructor(private service:UserService)
  {

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
