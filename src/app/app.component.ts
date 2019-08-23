import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes:string[];
  constructor(){
    this.quotes = ['“Doing the best at this moment puts you in the best place for the next moment.”', '“You must be the change you wish to see in the world.”', '“Doing the best at this moment puts you in the best place for the next moment.”']
  } 
}
