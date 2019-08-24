import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

//  quotes:Quote[] =[
//       {id:1,name:'Doing the best at this moment puts you in the best place for the next moment.',author:'written by Oprah Winfrey'},
//       {id:2,name:'You must be the change you wish to see in the world.',author:'written by Gandhi'},
//       {id:3,name:'Be happy for this moment.this moment is your life',author:'written by omar khyyam'},
//     ];
quotes:Quote[] =[
    new Quote (1,'Doing the best at this moment puts you in the best place for the next moment.','written by Oprah Winfrey','juru',new Date(2019,6,9)),
    new Quote(2,'You must be the change you wish to see in the world.','written by Gandhi','juru',new Date(2019,6,9)),
    new Quote(3,'Be happy for this moment.this moment is your life','written by omar khyyam','juru',new Date(2019,6,9)),
];
deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}

toggleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
  constructor() { }

  ngOnInit() {
  }

}
