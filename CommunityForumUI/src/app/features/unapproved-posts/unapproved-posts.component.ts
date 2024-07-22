import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { PostFormatDTO } from '../models/PostFormatDTO.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-unapproved-posts',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './unapproved-posts.component.html',
  styleUrl: './unapproved-posts.component.css'
})
export class UnapprovedPostsComponent {

  unapproved:PostFormatDTO[] =[];
  constructor(public service:UserService)
  {
     
  }

  ngOnInit():void{
    this.service.unapprovedPosts().subscribe(
      {
        next:(data)=>{
          this.unapproved = data;
          console.log(this.unapproved)
        }
      }
    )
  };

  onApprove(id:number)
  {
      this.service.approvePost(id).subscribe({
        next:(response)=>
          {
            console.log("The post has been approved!")
            this.ngOnInit();
          },
          error:(response)=>
            {
              console.log("gg")
            }
      })
  }

}
