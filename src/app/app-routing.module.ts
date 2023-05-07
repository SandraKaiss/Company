//importing the NgModule, RouterModule, Routes,
// EmployeesComponent, and LeavesComponent classes from
// their respective files.
// defining a Routes array that contains two
// routes - one for the EmployeesComponent and one for
// the LeavesComponent. The redirectTo property on the
// first route is used to set the default route to /employees.
//exporting a module called AppRoutingModule that
// imports the RouterModule module and uses the forRoot method to
// configure the router with our routes array.


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeavesComponent} from "../leaves.component";
import { EmployeesComponent } from '../employees/employees.component';
import {ExpenseComponent} from "../expenses/expenses.component";


const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'leaves', component: LeavesComponent },
  { path: 'expenses', component: ExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
