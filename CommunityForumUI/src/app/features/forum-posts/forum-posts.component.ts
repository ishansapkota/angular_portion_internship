import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum-posts',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './forum-posts.component.html',
  styleUrl: './forum-posts.component.css'
})
export class ForumPostsComponent {

    constructor(public service:UserService)
    {

    }
}
