import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';

function addingHiToName(value:string)
{
  return "Hi "+value;
}


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  //parent to child data passing
  @Input({alias:"username",transform:addingHiToName}) name =""
  @Input({transform:booleanAttribute}) isSingle!:boolean  //the ! sign denotes to the compiler that the variable is not null and some 
                              // values will be assigned to it
  @Input({transform:numberAttribute}) salary!:number // the transform function parses the inputted value which
                                                    // might be in another form into the required form
  
  
  
  // name = "Ishan Raj Sapkota"
  // age:number = 23 //explicitly defining the datatype
  // salary = 1000 
  // btnDisabled = false

  // onChange(e:Event)
  // {
  //   let value = (e.target as HTMLInputElement).value
  //   this.name = value 
  //   console.log(value)
  // }

  // users = [
  //   {name:"Ishan",age:23,salary:10000,isMarried:false},
  //   {name:"Kishan",age:23,salary:100000,isMarried:false},
  //   {name:"Nishan",age:23,salary:20000,isMarried:true},
  //   {name:"SUdip",age:25,salary:10000,isMarried:false}
  // ]
  
  //Child to parent data passing

  @Output() myEvent = new EventEmitter<User>()
sendData()
{
  this.myEvent.emit({name:this.name,newsalary:20000})
}
 
}
