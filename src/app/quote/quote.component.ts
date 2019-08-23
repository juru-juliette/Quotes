import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes:Quote[] =[
      {id:1,name:'Doing the best at this moment puts you in the best place for the next moment.',author:'Oprah Winfrey'},
      {id:2,name:'You must be the change you wish to see in the world.',author:'Gandhi'},
      {id:3,name:'Be happy for this moment.this moment is your life',author:'OMAR KHYYAM'},
    ];
  constructor() { }

  ngOnInit() {
  }

}
