import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

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

  // public clickBtn() {
  //   const printAndClear = () => {
  //     console.log(this.userText);
  //     this.userText = '';
  //   }
  //   return printAndClear();
  // }
}
