import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder: string = "";
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  term: string = "";

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

  find(): void {
    this.onEnter.emit(this.term);
  }

  onKeyPress() {
    this.debouncer.next(this.term);
  }

}
