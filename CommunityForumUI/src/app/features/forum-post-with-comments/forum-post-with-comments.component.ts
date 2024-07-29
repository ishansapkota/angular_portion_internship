import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { PostFormatDTO } from '../models/PostFormatDTO.model';
import { UserService } from '../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommentWithUserDTO } from '../models/CommentWithUserDTO.model';
import { CommonModule } from '@angular/common';
import { CommentDTO } from '../models/CommentDTO.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forum-post-with-comments',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FormsModule],
  templateUrl: './forum-post-with-comments.component.html',
  styleUrl: './forum-post-with-comments.component.css'
})
export class ForumPostWithCommentsComponent {

  post : PostFormatDTO
  comments: CommentWithUserDTO[]=[]
  commentmessage:CommentDTO 
  constructor(public service:UserService,private route:ActivatedRoute)
  {
    this.commentmessage =
    {
      commentMessage:''
    }
  }

  ngOnInit()
  {
    let id = this.route.snapshot.paramMap.get('id')
    if(id)
      {
        this.service.getPost(parseInt(id)).subscribe(
          {
            next:(response)=>
              {
                this.post= response
                console.log("here")
              }
          }
        )

        this.service.getCommentsbyPost(parseInt(id)).subscribe(
          {
            next:(comment)=>
            {
              this.comments = comment
            }
          }
        )

      }
  }

  onComment()
  {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.addComment(this.commentmessage,parseInt(id)).subscribe(
      {
        next:(response)=>
          {
            console.log("added comment")
            window.location.assign(`post/${id}`)
          }
      }
    )
  }

}
