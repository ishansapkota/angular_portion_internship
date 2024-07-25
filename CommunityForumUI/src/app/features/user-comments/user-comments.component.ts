import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { CommentWithUserandPostDTO } from '../models/CommentWithUserandPostDTO.model';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-comments',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
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

}
