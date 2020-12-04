/* eslint-disable max-classes-per-file */
import { Injectable } from '@angular/core';

export class Employee {
  ID: number;

  FullName: string;

  CountryID: number;

  OrderID: number;

  Price: number;
}

export class Country {
  ID: number;

  Name: string;

  EmployeeID: number;
}

export class Order {
  ID: number;

  Name: string;

  CountryID: number;

  EmployeeID: number;

  Price: number;

  Count: number;
}

const employees: Employee[] = [
  {
    'ID': 1,
    'FullName': 'John Heart',
    'CountryID': 1,
    'OrderID': 1,
    'Price': 5.6,
  },
  {
    'ID': 2,
    'FullName': 'Olivia Peyton',
    'CountryID': 6,
    'OrderID': 12,
    'Price': 5,
  },
  {
    'ID': 3,
    'FullName': 'Robert Reagan',
    'CountryID': 2,
    'OrderID': 3,
    'Price': 1.25,
  },
  {
    'ID': 4,
    'FullName': 'Greta Sims',
    'CountryID': 4,
    'OrderID': 7,
    'Price': 0.5,
  },
];
const countries: Country[] = [
  {
    'ID': 1,
    'Name': 'Argentina',
    'EmployeeID': 1,
  },
  {
    'ID': 2,
    'Name': 'Australia',
    'EmployeeID': 3,
  },
  {
    'ID': 3,
    'Name': 'Bolivia',
    'EmployeeID': 1,
  },
  {
    'ID': 4,
    'Name': 'Bahrain',
    'EmployeeID': 4,
  },
  {
    'ID': 5,
    'Name': 'Canada',
    'EmployeeID': 3,
  },
  {
    'ID': 6,
    'Name': 'Ireland',
    'EmployeeID': 2,
  },
  {
    'ID': 7,
    'Name': 'United States',
    'EmployeeID': 3,
  },
  {
    'ID': 8,
    'Name': 'United Kingdom',
    'EmployeeID': 2,
  },
];
const orders: Order[] = [
  {
    'ID': 1,
    'Name': 'Wine',
    'CountryID': 1,
    'EmployeeID': 1,
    'Price': 5.6,
    'Count': 1,
  },
  {
    'ID': 2,
    'Name': 'Beef',
    'CountryID': 1,
    'EmployeeID': 1,
    'Price': 2.95,
    'Count': 1,
  },
  {
    'ID': 3,
    'CountryID': 2,
    'EmployeeID': 3,
    'Name': 'Dried Fruit',
    'Price': 1.25,
    'Count': 1,
  },
  {
    'ID': 4,
    'CountryID': 2,
    'EmployeeID': 3,
    'Name': 'Swimming Shorts',
    'Price': 35,
    'Count': 1,
  },
  {
    'ID': 5,
    'CountryID': 3,
    'EmployeeID': 1,
    'Name': 'Coffee',
    'Price': 8.5,
    'Count': 1,
  },
  {
    'ID': 6,
    'CountryID': 3,
    'EmployeeID': 1,
    'Name': 'Chocolate',
    'Price': 2.5,
    'Count': 1,
  },
  {
    'ID': 7,
    'CountryID': 4,
    'EmployeeID': 4,
    'Name': 'Chili Flakes',
    'Price': 0.5,
    'Count': 1,
  },
  {
    'ID': 8,
    'CountryID': 4,
    'EmployeeID': 4,
    'Name': 'Kitchenware',
    'Price': 10,
    'Count': 1,
  },
  {
    'ID': 9,
    'CountryID': 4,
    'EmployeeID': 4,
    'Name': 'Aluminum',
    'Price': 1980,
    'Count': 1,
  },
  {
    'ID': 10,
    'CountryID': 5,
    'EmployeeID': 3,
    'Name': 'Jacket',
    'Price': 185,
    'Count': 1,
  },
  {
    'ID': 11,
    'CountryID': 5,
    'EmployeeID': 3,
    'Name': 'Boots',
    'Price': 85,
    'Count': 1,
  },
  {
    'ID': 12,
    'CountryID': 6,
    'EmployeeID': 2,
    'Name': 'Vitamins',
    'Price': 5,
    'Count': 1,
  },
  {
    'ID': 13,
    'CountryID': 6,
    'EmployeeID': 2,
    'Name': 'Medical Equipment',
    'Price': 2650,
    'Count': 1,
  },
  {
    'ID': 14,
    'CountryID': 7,
    'EmployeeID': 3,
    'Name': 'Beef Jerky',
    'Price': 1.15,
    'Count': 1,
  },
  {
    'ID': 15,
    'CountryID': 7,
    'EmployeeID': 3,
    'Name': 'Coca Cola',
    'Price': 0.75,
    'Count': 1,
  },
  {
    'ID': 16,
    'CountryID': 8,
    'EmployeeID': 2,
    'Name': 'Aircraft Engine',
    'Price': 24,
    'Count': 1,
  },
  {
    'ID': 17,
    'CountryID': 8,
    'EmployeeID': 2,
    'Name': 'Mango Chutney',
    'Price': 0.85,
    'Count': 1,
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
