import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})

export class AppComponent {
  employees = [
    {
      firstName: 'John',
      lastName: 'Doe',
      departmentId: 'Sales',
      phoneNumber: '555-1234',
      age: 30,
      gender: 'Male'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      departmentId: 'Marketing',
      phoneNumber: '555-5678',
      age: 25,
      gender: 'Female'
    }
  ];

  newEmployee = {
    firstName: '',
    lastName: '',
    departmentId: '',
    phoneNumber: '',
    age: null,
    gender: ''
  };
  showEmployees: any;

  constructor(private modalService: NgbModal) {}

  showAddEmployeeModal() {
    this.modalService.open('addEmployeeModal');
  }

  addEmployee() {
    this.employees.push(this.newEmployee);
    this.newEmployee = {
      firstName: '',
      lastName: '',
      departmentId: '',
      phoneNumber: '',
      age: null,
      gender: ''
    };
    this.modalService.dismissAll();
  }
  deleteEmployee(index: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.employees.splice(index, 1);
    }
  }

  showEmployeesTable() {
   this.showEmployeesTable() = true;
  }
  showLeaves = false;
  showExpenses = false;
  showLeavesTable() {
    this.showLeaves = true;
    this.showExpenses = false;
  }

  showExpensesTable() {
    this.showExpenses = true;
    this.showLeaves = false;
  }

}

