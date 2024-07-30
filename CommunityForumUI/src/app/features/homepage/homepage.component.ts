import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { PostFormatDTO } from '../models/PostFormatDTO.model';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsDTO } from '../models/NewsDTO.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  posts:PostFormatDTO[] = []
  news:NewsDTO[] = []
  constructor(public service:UserService)
  {

  }

  ngOnInit():void{
    this.service.getPosts().subscribe(
      {
        next:(response)=>
          {
              this.posts = response
              
          }
      }
    )

    this.service.getAllNews().subscribe(
      {
        next:(newsreponse)=>
          {
            this.news = newsreponse
            console.log("news")
          }
      }
    )
  }

  toPost(id:number)
  {
    window.location.assign(`/post/${id}`)
  }

}
