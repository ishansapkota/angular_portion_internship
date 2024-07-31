import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { CommentWithUserandPostDTO } from '../models/CommentWithUserandPostDTO.model';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-comments',
  standalone: true,
  imports: [NavbarComponent,CommonModule,MatIconModule],
  templateUrl: './user-comments.component.html',
  styleUrl: './user-comments.component.css'
})
export class UserCommentsComponent {

  comments:CommentWithUserandPostDTO[] = []
  constructor(public service:UserService)
  {

  }

  ngOnInit():void{
    this.service.getUserComments().subscribe(
      {
        next:(response)=>
          {
            this.comments = response;
            console.log("we're here")
          },
          error:(response)=>
            {
              console.log("error")
            }
      }
    )
  }

  onDelete(id:number)
  {
    this.service.deleteCommentByUser(id).subscribe(
      {
        next:(response)=>
          {
            console.log("Your comment has been deleted.")
            this.ngOnInit();
          }
      }
    )

  }

}
