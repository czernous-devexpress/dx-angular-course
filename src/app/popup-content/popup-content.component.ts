import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-content',
  template: `
  <dx-text-box [value]="inputTextValue" (input)="inputTextValue = $event.target.value" style="margin: 1em; height: 200px"></dx-text-box>
  `
})
export class PopupContentComponent {

  @Input() popupValue: string;

  get inputTextValue() {
    return this.popupValue;
  }

  @Output() popupValueChange: EventEmitter<string> = new EventEmitter();

  set inputTextValue(value: string) {
    this.popupValue = value;
    this.popupValueChange.emit(this.popupValue);
    console.log(this.popupValue);
  }

}
