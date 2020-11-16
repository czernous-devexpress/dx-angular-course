import { Component, enableProdMode, ViewChild } from '@angular/core';


import { Service, Employee } from './app.service';
import { DxDataGridComponent } from "devextreme-angular";
import validationEngine from 'devextreme/ui/validation_engine';


@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor() {
        this.customCallback = this.customCallback.bind(this);
    }
    checkBoxValue: boolean =  false;
   text: string;
   number: number;
   validate(params) {
        let result = params.validationGroup.validate();
        if (result.isValid) {
            // the values are valid
            // submit and reset them
            // params.validationGroup.reset();
            console.log(result)
        }
    }
    customCallback(e) {
        if (this.checkBoxValue) {
            alert(e.value);
            return !!e.value;
        }
        alert('checkbox unchecked');
        return true;
    }
}
