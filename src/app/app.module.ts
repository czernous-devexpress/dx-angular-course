import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxChartModule, DxPopupModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, DxDataGridModule, DxChartModule, DxPopupModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
