import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usn:string = '';
  pwd:string = '';
  msg:string = '';
  user:any[];
  i:number = 0;
  constructor() { 
    this.user=[{username:"wel",password:"come"},{username:"hi",password:"123"}]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  check()
  {
    for(this.i=0;this.i<4;this.i++)
    {
      if(this.user[this.i].username == this.usn && this.user[this.i].password==this.pwd)
      {
        this.msg = "Valid User";
        break;
      }
      else
      {
        this.msg = "Invalid User";
      }
    }
  }
}
