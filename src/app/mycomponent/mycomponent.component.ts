import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {

  c:number = 0;
  d:number = 0;
  array1:string[];
  array2:number[];
  obj1:any[];
  obj2:any[];
  f_name:string;
  l_name:string;

  constructor() { 
    this.array1 = ["hi","there"];
    this.array2 = [8,9];
    this.obj1=[{Id:1,name:"ab"},{Id:2,name:"fp"}];
    this.obj2 =[{name:"Alice",place:"Hubli",salary:8900},{name:"Bob",place:"LA",salary:9000}];
    this.f_name="";
    this.l_name="";
  }

}
