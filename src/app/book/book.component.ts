import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  course;
  objbook:any[];
  constructor(disp:DisplayService) { 
    this.objbook = [{Sr:1,name:"Anna Karenina",author:"Leo Tolstoy",cate:"fiction,Romance"},
    {Sr:2,name:"To Kill a Mockingbird",author:"Harper Lee",cate:"fiction,Romance"},
    {Sr:3,name:"The Great Gatsby",author:"F. Scott Fitzgerald",cate:"fiction,Romance"},
    {Sr:4,name:"One Hundred Years of Solitude",author:"Gabriel García Márquez ",cate:"fiction,Mythology"},
    {Sr:5,name:"A Passage to India",author:"E.M. Forster ",cate:"Non-fiction"},
    {Sr:6,name:"Invisible Man",author:"Ralph Ellison",cate:"fiction"},
    {Sr:7,name:"Don Quixote",author:"Miguel de Cervantes",cate:"fiction"},
    {Sr:8,name:"Mrs. Dalloway",author:"Virginia Woolf",cate:"fiction"}]
    this.course=disp.displaylocation();
  }

  ngOnInit(): void {
  }
}
