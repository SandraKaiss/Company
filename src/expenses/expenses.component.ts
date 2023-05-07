import {Component} from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  showExpenses: boolean = false;

  // showExpenses = true;

  constructor() {
  }

  ngOnInit() {
  }

  showExpenseDetails() {
    this.showExpenses = true;
  }
}
