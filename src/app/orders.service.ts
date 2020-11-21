/* eslint-disable max-classes-per-file */
import { Injectable } from '@angular/core';

export class Employee {
  ID: number;

  FullName: string;

  CountryID: number;

  Countries: any;

  OrderID: number;
}

export class Country {
  ID: number;

  Name: string;
}

export class Order {
  ID: number;

  CountryID: number;

  EmployeeID: number;
}

const employees: Employee[] = [
  {
    'ID': 1,
    'FullName': 'John Heart',
    'CountryID': 1,
    'OrderID': undefined,
    'Countries': {
      'CountryA': 1,
      'CountryB': 2,
      'CountryC': 5,
      'CountryD': 0,
      'CountryE': 0,
    },
  },
  {
    'ID': 2,
    'FullName': 'Olivia Peyton',
    'CountryID': 2,
    'OrderID': 2001,
    'Countries': {
      'CountryA': 0,
      'CountryB': 2,
      'CountryC': 3,
      'CountryD': 4,
      'CountryE': 0,
    },
  },
  {
    'ID': 3,
    'FullName': 'Robert Reagan',
    'CountryID': 1,
    'OrderID': 1002,
    'Countries': {
      'CountryA': 1,
      'CountryB': 2,
      'CountryC': 3,
      'CountryD': 0,
      'CountryE': 5,
    },
  },
  {
    'ID': 4,
    'FullName': 'Greta Sims',
    'CountryID': 3,
    'OrderID': 3004,
    'Countries': {
      'CountryA': 1,
      'CountryB': 0,
      'CountryC': 3,
      'CountryD': 0,
      'CountryE': 5,
    },
  },
];
const countries: Country[] = [
  {
    'ID': 1,
    'Name': 'Australia',
  },
  {
    'ID': 2,
    'Name': 'Bahrain',
  },
  {
    'ID': 3,
    'Name': 'Canada',
  },
  {
    'ID': 4,
    'Name': 'France',
  },
  {
    'ID': 5,
    'Name': 'United Kingdom',
  },
];
const orders: Order[] = [
  {
    'ID': 1000,
    'CountryID': 1,
    'EmployeeID': 1,
  },
  {
    'ID': 1001,
    'CountryID': 1,
    'EmployeeID': 1,
  },
  {
    'ID': 1002,
    'CountryID': 1,
    'EmployeeID': 3,
  },
  {
    'ID': 1003,
    'CountryID': 1,
    'EmployeeID': 4,
  },
  {
    'ID': 1004,
    'CountryID': 1,
    'EmployeeID': 5,
  },
  {
    'ID': 2000,
    'CountryID': 2,
    'EmployeeID': 1,
  },
  {
    'ID': 2001,
    'CountryID': 2,
    'EmployeeID': 2,
  },
  {
    'ID': 2002,
    'CountryID': 2,
    'EmployeeID': 2,
  },
  {
    'ID': 2003,
    'CountryID': 2,
    'EmployeeID': 3,
  },
  {
    'ID': 2004,
    'CountryID': 2,
    'EmployeeID': 3,
  },
  {
    'ID': 3000,
    'CountryID': 3,
    'EmployeeID': 2,
  },
  {
    'ID': 3001,
    'CountryID': 3,
    'EmployeeID': 2,
  },
  {
    'ID': 3002,
    'CountryID': 3,
    'EmployeeID': 3,
  },
  {
    'ID': 3003,
    'CountryID': 3,
    'EmployeeID': 3,
  },
  {
    'ID': 3004,
    'CountryID': 3,
    'EmployeeID': 4,
  },
  {
    'ID': 4000,
    'CountryID': 4,
    'EmployeeID': 2,
  },
  {
    'ID': 4001,
    'CountryID': 4,
    'EmployeeID': 4,
  },
  {
    'ID': 4002,
    'CountryID': 4,
    'EmployeeID': 4,
  },
  {
    'ID': 4003,
    'CountryID': 4,
    'EmployeeID': 2,
  },
  {
    'ID': 4004,
    'CountryID': 4,
    'EmployeeID': 2,
  },
  {
    'ID': 5000,
    'CountryID': 5,
    'EmployeeID': 1,
  },
  {
    'ID': 5001,
    'CountryID': 5,
    'EmployeeID': 1,
  },
  {
    'ID': 5002,
    'CountryID': 5,
    'EmployeeID': 3,
  },
  {
    'ID': 5003,
    'CountryID': 5,
    'EmployeeID': 4,
  },
  {
    'ID': 5004,
    'CountryID': 5,
    'EmployeeID': 4,
  },
];

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  getEmployees() {
    return employees;
  }

  getCountries() {
    return countries;
  }

  getOrders() {
    return orders;
  }
}
