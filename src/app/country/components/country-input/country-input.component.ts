import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(400))
      .subscribe( value => {
        this.onDebounce.emit( value );
    });
  }

  search() {
    this.onEnter.emit( this.term );
  }

  pressedKey() {
    this.debouncer.next( this.term );
  }
  
}
