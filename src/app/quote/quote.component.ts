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
quotes=[
    new Quote (1,'"Doing the best at this moment puts you in the best place for the next moment."','Oprah Winfrey','written by juru',new Date(2019,6,9)),
    new Quote(2,'"You must be the change you wish to see in the world.','Gandhi"','written by juru',new Date(2019,6,9)),
    new Quote(3,'"Never regret anything that made you smile."','omar khyyam','written by juru',new Date(2019,6,9)),
];

toggleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
// deleteQuote(isComplete, index){
//   if (isComplete) {
//     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

//     if (toDelete){
//       this.quotes.splice(index,1)
//     }
//   }
// }
//
deletequote(isComplete, index) {
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

    if (toDelete) {
      this.quotes.splice(index, 1)
    }
  }

}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
