//importing the NgModule, BrowserModule, AppRoutingModule,
// AppComponent, EmployeesComponent, and LeavesComponent
// classes from their respective files.
// declaring the AppComponent, EmployeesComponent,
// and LeavesComponent components in the declarations array.
// importing the BrowserModule and AppRoutingModule modules
// in the imports array.
// not providing any services, so the providers array is empty.
// bootstrapping the AppComponent component in the bootstrap array.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {LeavesComponent} from "../leaves.component";
import { AppRoutingModule } from './app-routing.module';
import {ExpenseComponent} from "../expenses/expenses.component";
import {EmployeeComponent} from "../employees/employees.component";

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeComponent },
  { path: 'leaves', component: LeavesComponent },
  { path: 'expenses', component: ExpenseComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LeavesComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    // add the following modules to the imports array
    NgbModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }



