import { Injectable } from '@angular/core';

export class Employee {
  ID: number;

  FirstName: string;

  LastName: string;
}

const employees: Employee[] = [
  {
    'ID': 1,
    'FirstName': 'James',
    'LastName': 'Cook',
  },
  {
    'ID': 2,
    'FirstName': 'William',
    'LastName': 'Brown',
  },
  {
    'ID': 3,
    'FirstName': 'Jessica',
    'LastName': 'Kowalski',
  },
  {
    'ID': 4,
    'FirstName': 'Catherine',
    'LastName': 'Powell',
  },
  {
    'ID': 5,
    'FirstName': 'Andrew',
    'LastName': 'Hopkins',
  },
];

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  getEmployees(): Employee[] {
    return employees;
  }

  constructor() {}
}
