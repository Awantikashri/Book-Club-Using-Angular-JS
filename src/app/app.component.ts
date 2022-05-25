import { Component } from '@angular/core';
import { DisplayService } from './display.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*
  template :`
  FirstNumber <input type ="number" [(ngModel)] = 'a'>
  SecondNumber <input type ="number" [(ngModel)] = 'b'>
   <p *ngIf = 'a>b' >
    maximum is {{a}}</p>
    <p *ngIf = 'b>a' >
    maximum is {{b}}</p>`,
    */
  styleUrls: ['./app.component.css'],
  providers:[DisplayService],

})
export class AppComponent {
  title = 'firstapp';
  course = 'Web Technologies Lab';
  code = '21ECSP304'
  a:number = 12;
  b:number = 9;
}
