import { Component } from '@angular/core';
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user-service.service';
import { NewsDTO } from '../models/NewsDTO.model';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [AdminDashboardComponent,FormsModule,CommonModule],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.css'
})
export class AddNewsComponent {

  news:NewsDTO
  constructor(private service:UserService)
  {
    this.news={
      id:NaN,
      newstitle:'',
      newsdescription:''
    }

  }

  onPost()
  {
    this.service.addNews(this.news).subscribe(
      {
        next:(response)=>
          {
            console.log("Added news successfully!")
            window.location.assign('/admin')
          }
      }
    )
  }

}
