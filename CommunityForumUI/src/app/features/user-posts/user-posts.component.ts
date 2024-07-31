import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostFormatDTO } from '../models/PostFormatDTO.model';
import { UserService } from '../services/user-service.service';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent,MatIconModule],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {

  posts:PostFormatDTO[]=[]

  constructor(private service:UserService)
  {

  }

  ngOnInit():void{
    this.service.getUserPosts().subscribe(
      {
        next:(response)=>
          {
            this.posts = response
            console.log("Done")
          }
      }
    )
  }

  onDelete(id:number)
  {
    this.service.deletePostByUser(id).subscribe(
      {
        next:(response)=>
          {
            console.log("The post has been successfully deleted by the user")
            this.ngOnInit();
          }
      }
    )
  }

}
