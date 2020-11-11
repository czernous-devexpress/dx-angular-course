import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <input type="text" [value]="text" (input)="text = $event.target.value" />
    <button (click)="onMyComponentGetValueClick()">Get value</button>
  `,
})
export class MyCompComponent {
  myComponentValue = 'test';

  @Input()
  get text() {
    return this.myComponentValue;
  }

  @Output()
  onGetValueClick: EventEmitter<any> = new EventEmitter();

  set text(value) {
    this.myComponentValue = value;
    this.onGetValueClick.emit(this.myComponentValue);
  }

  onMyComponentGetValueClick(): void {
    alert(this.myComponentValue);
  }
}
