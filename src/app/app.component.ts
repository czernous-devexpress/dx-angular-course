import { Component } from '@angular/core';

/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  // add or remove text, checkbox, etc
  userText = '';

  public userList: Array<string | number> = [];

  addText() {
    this.userList.push(this.userText);
    console.log(this.userList);
  }

  removeText(index: number) {
    if (index > -1) {
      this.userList.splice(index, 1);
    }
    console.log(this.userList);
  }

  visible = false;
  toggleDisplay() {
    this.visible = !this.visible;
  }
 

  // toggle color

  toggleRed = true;

  toggleGreen = false;

  toggleColor() {
    this.toggleRed = !this.toggleRed;
  }

  toggleSecondColor() {
    !this.toggleGreen === true ? this.toggleGreen = true : this.toggleGreen = false;
  }

  public getStyle() {
    const green = {
      backgroundColor: '#26de8b',
      height: '500px',
      width: '500px'
    };
    const red = {
      backgroundColor: '#b50719',
      height: '300px',
      width: '300px'
    };
    return this.toggleGreen ? green : red;
  }
  // public clickBtn() {
  //   const printAndClear = () => {
  //     console.log(this.userText);
  //     this.userText = '';
  //   }
  //   return printAndClear();
  // }
}
