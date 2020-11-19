import { Component } from '@angular/core';

import { EmployeesService, Employee } from './employees.service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EmployeesService],
})
export class AppComponent {
  employees: Employee[];

  constructor(service: EmployeesService) {
    this.employees = service.getEmployees();
  }

  setLastNameValue(newData, value, currentRowData) {
    newData.LastName = value;
    if (value.length === 0 && currentRowData.FirstName.length === 0) {
      newData.FirstName = 'John';
      newData.LastName = 'Doe';
    }
  }

  setFirstNameValue(newData, value, currentRowData) {
    newData.FirstName = value;
    if (value.length === 0 && currentRowData.LastName.length === 0) {
      newData.FirstName = 'John';
      newData.LastName = 'Doe';
    }
  }
}
