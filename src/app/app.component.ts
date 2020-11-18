import { Component } from '@angular/core';

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

  formValues = {
    checkBoxValue: false,

    text: '',

    number: '',
  };

  buttonOptions = {
    text: 'validate',
    onClick(params) {
      const result = params.validationGroup.validate();
      if (result.isValid) {
        // the values are valid
        // submit and reset them
        // params.validationGroup.reset();
        console.log(result);
      }
    },
  };

  customCallback(e) {
    console.log(`callback is ${this.formValues.checkBoxValue}`);
    if (this.formValues.checkBoxValue) {
      return !!e.value;
    }
    return true;
  }

  checkComparison() {
    return true;
  }
}
