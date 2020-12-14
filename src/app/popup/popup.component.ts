import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <dx-form
      [colCount]="2"
      [(formData)]="employee"
      (onFieldDataChanged)="form_fieldDataChanged($event)"
    >
      <dxi-item dataField="Prefix"></dxi-item>
      <dxi-item dataField="FirstName"></dxi-item>
      <dxi-item dataField="LastName"></dxi-item>
      <dxi-item dataField="BirthDate" editorType="dxDateBox"></dxi-item>
      <dxi-item dataField="Address"></dxi-item>
      <dxi-item dataField="Position"></dxi-item>
      <dxi-item dataField="HireDate" editorType="dxDateBox"></dxi-item>
      <dxi-item dataField="Notes" editorType="dxTextArea" [editorOptions]="notesPlaceholder">
      </dxi-item>
    </dx-form>
    <dx-button text="Save" type="success" (click)="saveChanges()"> </dx-button>
    <dx-button
      text="Clear(Add new)"
      (click)="clearFormData(employeeData)"
      type="default"
      style="margin-left: 1rem"
    >
    </dx-button>
  `,
})
export class PopupComponent implements OnInit {
  notesPlaceholder = { placeholder: 'Add notes...', height: '10em' };

  constructor() {}

  @Input() employee: any;

  get employeeData() {
    return this.employee;
  }

  @Input() popupVisibility: boolean;


  @Output() employeeChange: EventEmitter<any> = new EventEmitter();

  @Output() popupVisibilityChange: EventEmitter<boolean> = new EventEmitter();

  form_fieldDataChanged(e) {
    this.employee = e.component.option('formData');
    console.log(this.employee);
  }

  clearFormData(data) {
   if (data) {
      const obj = data ;
      for (const field in obj) {
        obj[field] = null;
      }
    }
  }

  saveChanges() {
    this.employeeChange.emit(this.employee);
    this.popupVisibilityChange.emit(false);
  }

  ngOnInit(): void {}
}
