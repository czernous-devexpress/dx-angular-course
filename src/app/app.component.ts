/* eslint-disable import/prefer-default-export */
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `
      .green {
        background: #26de8b;
        min-height: 300px;
        min-width: 300px;
      }
      .red {
        background: #f05454;
        min-height: 300px;
        min-width: 300px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-app';

  isGreen = true;

  isLarge = true;

  getStyle() {
    const large = {
      backgroundColor: '#ee6f57',
      height: '500px',
      width: '500px',
    };
    const small = {
      backgroundColor: '#070d59',
      height: '300px',
      width: '300px',
    };
    return !this.isLarge ? large : small;
  }
}
