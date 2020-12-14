import { Component, DoCheck } from '@angular/core';

import { Service, Employee, State } from './orders.service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent implements DoCheck {
  dataSource: Employee[];

  states: State[];

  targetEmployeeData: any;

  isPopupVisible = false;

  constructor(private service: Service) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.cancel = true;
    this.isPopupVisible = !this.isPopupVisible;
    this.targetEmployeeData = JSON.parse(JSON.stringify(e.data));
  }

  ngDoCheck(): void {
    const nextId =
      Math.max.apply(
        Math,
        this.dataSource.map((item) => item.ID),
      ) + 1;
    const getRandomNumber = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const updateDataSource = (parentData, childData) => {
      return childData ? Object.assign(parentData, childData) : parentData;
    };
    const compareSources = () => {
      if (this.targetEmployeeData.ID === null) {
        this.targetEmployeeData.ID = nextId;
        this.targetEmployeeData.StateID = getRandomNumber(1, 51);
        this.dataSource.push(this.targetEmployeeData);
      } else {
        this.dataSource.forEach((employee) => {
          this.targetEmployeeData.ID === employee.ID
            ? updateDataSource(employee, this.targetEmployeeData)
            : null;
        });
      }
    };
    this.targetEmployeeData ? compareSources() : null;
  }
}
