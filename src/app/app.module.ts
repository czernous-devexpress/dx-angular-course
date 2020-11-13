import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxButtonModule, DxPopupModule, DxTextBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { PopupContentComponent } from './popup-content/popup-content.component';

@NgModule({
  declarations: [AppComponent, PopupContentComponent],
  imports: [BrowserModule, FormsModule, DxButtonModule, DxTextBoxModule, DxPopupModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
