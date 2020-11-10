import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  userText: string = '';

  public clickBtn() {
    const printAndClear = () => {
      console.log(this.userText);
      this.userText = '';
    }
    return printAndClear();
  }
}
