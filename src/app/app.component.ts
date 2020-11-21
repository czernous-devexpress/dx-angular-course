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
      filter: options.data
        ? [
            ['ID', '=', options.data.Countries.CountryA],
            'or',
            ['ID', '=', options.data.Countries.CountryB],
            'or',
            ['ID', '=', options.data.Countries.CountryC],
            'or',
            ['ID', '=', options.data.Countries.CountryD],
            'or',
            ['ID', '=', options.data.Countries.CountryE],
          ]
        : null,
    };
  }

  getFilteredOrders(options) {
    return {
      store: this.orders,
      filter: options.data
        ? [
            ['EmployeeID', '=', options.data.ID],
            'and',
            [
              ['CountryID', '=', options.data.Countries.CountryA],
              'or',
              ['CountryID', '=', options.data.Countries.CountryB],
              'or',
              ['CountryID', '=', options.data.Countries.CountryC],
              'or',
              ['CountryID', '=', options.data.Countries.CountryD],
              'or',
              ['CountryID', '=', options.data.Countries.CountryE],
            ],
          ]
        : null,
    };
  }

  setCountryValue(rowData: any, value: any): void {
    rowData.OrderID = null;
  }
}
