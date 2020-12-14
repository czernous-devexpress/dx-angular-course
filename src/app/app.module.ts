import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxPopupModule, DxButtonModule, DxFormModule, DxDateBoxModule} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [AppComponent, PopupComponent],
  imports: [BrowserModule, FormsModule, DxDataGridModule, DxPopupModule, DxButtonModule, DxFormModule, DxDateBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
