import { Component } from '@angular/core';

import { OrdersService, Employee, Country, Order } from './orders.service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: Employee[];

  countries: Country[];

  orders: Order[];

  constructor(private service: OrdersService) {
    this.dataSource = service.getEmployees();
    this.countries = service.getCountries();
    this.orders = service.getOrders();

    this.getFilteredOrders = this.getFilteredOrders.bind(this);
    this.getFilteredCountries = this.getFilteredCountries.bind(this);
  }

  getFilteredCountries(options) {
    return {
      store: this.countries,
      filter: options.data ? ['EmployeeID', '=', options.data.ID] : null,
    };
  }

  getFilteredOrders(options) {
    const employeeFilter = ['EmployeeID', '=', options.data?.ID];
    const countryFilter = [employeeFilter, "and", ['CountryID', '=', options.data?.CountryID]];
    const filter = options.data?.CountryID === null ? employeeFilter : countryFilter;
    return {
      store: this.orders,
      filter: options.data ? filter : null,
    };
  }

  setCountryValue(rowData: any, value: any): void {
    rowData.OrderID = null;
    (<any>this).defaultSetCellValue(rowData, value);
  }

  setEmployeeValue(rowData: any, value: any): void {
    rowData.CountryID = null;
    rowData.OrderID = null;
    (<any>this).defaultSetCellValue(rowData, value);
  }
}
