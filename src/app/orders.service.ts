/* eslint-disable max-classes-per-file */
import { Injectable } from '@angular/core';

export class Employee {
  ID: number;

  FullName: string;

  CountryID: number;

  OrderID: number;
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
  
}

const employees: Employee[] = [
  {
    'ID': 1,
    'FullName': 'John Heart',
    'CountryID': 1,
    'OrderID': 1,
  },
  {
    'ID': 2,
    'FullName': 'Olivia Peyton',
    'CountryID': 6,
    'OrderID': 12,
  },
  {
    'ID': 3,
    'FullName': 'Robert Reagan',
    'CountryID': 2,
    'OrderID': 3,
  },
  {
    'ID': 4,
    'FullName': 'Greta Sims',
    'CountryID': 4,
    'OrderID': 7,
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
    
  },
  {
    'ID': 2,
    'Name': 'Beef',
    'CountryID':  1,
    'EmployeeID': 1,
  },
  {
    'ID': 3,
    'CountryID': 2,
    'EmployeeID': 3,
    'Name': 'Dried Fruit',
  },
  {
    'ID': 4,
    'CountryID': 2,
    'EmployeeID': 3,
    'Name': 'Swimming Shorts',
  },
  {
    'ID': 5,
    'CountryID': 3,
    'EmployeeID': 1,
    'Name': 'Coffee',
  },
  {
    'ID': 6,
    'CountryID': 3,
    'EmployeeID': 1,
    'Name': 'Chocolate',
  },
  {
    'ID': 7,
    'CountryID': 4,
    'EmployeeID': 4,
    'Name': 'Chili Flakes',
  },
  {
    'ID': 8,
    'CountryID': 4,
    'EmployeeID': 4,
    'Name': 'Kitchenware',
  },
  {
    'ID': 9,
    'CountryID': 4,
    'EmployeeID': 4,
    'Name': 'Aluminum',
  },
  {
    'ID': 10,
    'CountryID': 5,
    'EmployeeID': 3,
    'Name': 'Jacket',
    
  },
  {
    'ID': 11,
    'CountryID': 5,
    'EmployeeID': 3,
    'Name': 'Boots',
  },
  {
    'ID': 12,
    'CountryID': 6,
    'EmployeeID': 2,
    'Name': 'Vitamins',
  },
  {
    'ID': 13,
    'CountryID': 6,
    'EmployeeID': 2,
    'Name': 'Medical Equipment',
  },
  {
    'ID': 14,
    'CountryID': 7,
    'EmployeeID': 3,
    'Name': 'Beef Jerky',
  },
  {
    'ID': 15,
    'CountryID': 7,
    'EmployeeID': 3,
    'Name': 'Coca Cola',
  },
  {
    'ID': 16,
    'CountryID': 8,
    'EmployeeID': 2,
    'Name': 'Aircraft Engine',
  },
  {
    'ID': 17,
    'CountryID': 8,
    'EmployeeID': 2,
    'Name': 'Mango Chutney',
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
