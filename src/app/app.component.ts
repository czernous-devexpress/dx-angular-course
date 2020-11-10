import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
// add or remove text, checkbox, etc
  userText: string = '';
  public userList: Array<string | number> = [];

  addText() {
    this.userList.push(this.userText);
    console.log(this.userList);
  }

  removeText(index: number) {
    if(index > -1) {
      this.userList.splice(index, 1);
      
    }
    console.log(this.userList);
   }
   visible : boolean = false;
   toggleDisplay() {
    this.visible = !this.visible;
  }
// toggle color

toggleRed : boolean = true;
toggleGreen : boolean = false;
toggleColor() {
  this.toggleRed = !this.toggleRed;
}
toggleSecondColor() {
  !this.toggleGreen === true ?  this.toggleGreen = true : this.toggleGreen = false;
}
public getStyle() {
  let green = {backgroundColor: '#26de8b'};
  let red = {backgroundColor: '#b50719'};
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
