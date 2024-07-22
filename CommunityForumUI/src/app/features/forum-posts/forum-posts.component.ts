import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { PostFormatDTO } from '../models/PostFormatDTO.model';

@Component({
  selector: 'app-forum-posts',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './forum-posts.component.html',
  styleUrl: './forum-posts.component.css'
})
export class ForumPostsComponent {
  posts:PostFormatDTO[] = []
  constructor(public service:UserService)
  {

  }

  ngOnInit():void{
    this.service.getPosts().subscribe(
      {
        next:(data)=>{
          this.posts = data;
          console.log(this.posts)
        }
      }
    )
  };
}
