import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { PostDTO } from '../models/PostDTO.model';

@Component({
  selector: 'app-forum-posting',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forum-posting.component.html',
  styleUrl: './forum-posting.component.css'
})
export class ForumPostingComponent {
  post:PostDTO;
  constructor(public service:UserService)
  {
    this.post={
      postdescription :'',
      posttitle : ''
    }

  }
onPost()
{
  this.service.addPost(this.post).subscribe(
  {
    next: (response)=>
      {
        console.log(response);
      },
      error: (response)=>
        {
          console.log("error aayo")
        }
  }
  )
}
}
