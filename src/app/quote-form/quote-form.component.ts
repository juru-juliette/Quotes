import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes = new Quote(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuotes);
this.newQuotes = new Quote(0, "", "", "", new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}
