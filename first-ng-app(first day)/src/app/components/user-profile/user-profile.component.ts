import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Ishan Raj Sapkota"
  age:number = 23 //explicitly defining the datatype
  salary = 1000 
  btnDisabled = false

  onChange(e:Event)
  {
    let value = (e.target as HTMLInputElement).value
    this.name = value
    console.log(value)
  }

  users = [
    {name:"Ishan",age:23,salary:10000,isMarried:false},
    {name:"Kishan",age:23,salary:100000,isMarried:false},
    {name:"Nishan",age:23,salary:20000,isMarried:true},
    {name:"SUdip",age:25,salary:10000,isMarried:false}
  ]
}
