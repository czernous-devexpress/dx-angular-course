import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DxButtonModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxDataGridModule,
  DxCheckBoxModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxValidationGroupModule,
  DxFormModule,
} from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DxButtonModule,
    DxTextBoxModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxFormModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxValidationGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
