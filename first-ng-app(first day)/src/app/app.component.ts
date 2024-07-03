import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';

  users=[
  {name:"Kishan",age:23,salary:100000,isMarried:false},
  {name:"Nishan",age:23,salary:20000,isMarried:true},
  {name:"SUdip",age:25,salary:10000,isMarried:false}
  ]

  receivedData(e:User)
  {
    console.log(e)
  }
}
