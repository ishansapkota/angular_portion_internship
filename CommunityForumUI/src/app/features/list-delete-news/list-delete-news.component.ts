import { Component } from '@angular/core';
import { NewsDTO } from '../models/NewsDTO.model';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-delete-news',
  standalone: true,
  imports: [CommonModule, AdminDashboardComponent,MatIconModule],
  templateUrl: './list-delete-news.component.html',
  styleUrl: './list-delete-news.component.css'
})
export class ListDeleteNewsComponent {

  news:NewsDTO[]=[]
  constructor(private service:UserService)
  {

  }

  ngOnInit()
  {
    this.service.getAllNews().subscribe(
      {
        next:(response)=>
        {
          this.news = response;
        }
      }
    )
  }

  onDelete(id:number)
  {
    this.service.deleteNews(id).subscribe(
      {
        next:(response)=>
          {
            console.log("The news has been deleted!")
            this.ngOnInit();
          }
      }
    )
  }

}
