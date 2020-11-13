/* eslint-disable import/prefer-default-export */
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DX-TEST-APP';

  dxTextBoxValue = '';

  isPopupVisible = false;
  
  displayText() {
    this.isPopupVisible = true;
  }
}
