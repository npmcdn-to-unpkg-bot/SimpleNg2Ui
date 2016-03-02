import { Component, OnInit, EventEmitter, Input, Output } from 'angular2/core';

@Component({
  selector: 'tester',
  templateUrl: 'app/test/test.component.html'
})

export class TestComponent implements OnInit {

  @Input() title: string;
  @Output() changed: EventEmitter<string>;
  public textSample: string;
  constructor() {
    this.changed = new EventEmitter();
  }

  testMethod() {
    this.changed.emit("hahahaha!");
  }

  ngOnInit() {
    this.textSample = this.title;
  }

}
