import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { PostFormatDTO } from '../models/PostFormatDTO.model';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-forum-posts',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent,MatIconModule],
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
          
        }
      }
    )
  };
  toComment(id:number)
  {
    window.location.assign(`post/${id}`);
  }
}
