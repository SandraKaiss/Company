import {Component, OnInit} from '@angular/core';

import {Employee} from "./employees";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phoneNumber: string;
  address: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  implements OnInit{

  employees: Employee[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      gender: 'Male',
      phoneNumber: '555-555-1234',
      address: '123 Main St'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 25,
      gender: 'Female',
      phoneNumber: '555-555-5678',
      address: '456 Elm St'
    }
  ];

  searchText = '';
  private newEmployee: any;

  addEmployee() {
    // to add a new employee to the array
    newEmployee: Employee = {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      age: 0,
      gender: ''
    };
  }
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  addEmployee(): void {
    if (!this.newEmployee.firstName.trim() ||
      !this.newEmployee.lastName.trim() ||
      !this.newEmployee.address.trim() ||
      !this.newEmployee.phoneNumber.trim() ||
      !this.newEmployee.age ||
      !this.newEmployee.gender) {
      return;
    }
    this.employeeService.addEmployee(this.newEmployee)
      .subscribe(Employee => {
        this.employees.push(Employee);
        this.newEmployee = {
          firstName: '',
          lastName: '',
          address: '',
          phoneNumber: '',
          age: 0,
          gender: ''
        };
      });
  }
  deleteEmployee() {
    deleteEmployee(firstName: string, lastName: string, address: string, phoneNumber: string,
      age: number, gender: string): void {
      const deleteEmployee = this.employees.find(Employee => Employee.firstName === firstName &&
        Employee.lastName === lastName && Employee.address === address && Employee.phoneNumber === phoneNumber
        && Employee.age === age && Employee.gender === gender);
      if: function (deleteEmployee) {
        this.employeeService.deleteEmployee(deleteEmployee.firstName)
          .subscribe(() => {
            const {filter} = this.Employee;
            this.Employee = filter(Employee => {
              return Employee !== deleteEmployee;
            });
          });
      }
    }
  }

}




