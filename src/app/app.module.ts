import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, DxButtonModule, DxTextBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
