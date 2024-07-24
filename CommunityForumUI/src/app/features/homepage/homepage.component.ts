import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { PostFormatDTO } from '../models/PostFormatDTO.model';
import { UserService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  posts:PostFormatDTO[] = []
  constructor(public service:UserService)
  {

  }

  ngOnInit():void{
    this.service.getPosts().subscribe(
      {
        next:(response)=>
          {
              this.posts = response
              console.log("here")
          }
      }
    )
  }

}