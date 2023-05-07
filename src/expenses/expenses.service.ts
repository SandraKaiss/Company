import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ExpenseComponent} from "./expenses.component";


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = 'http://localhost:4200/api/expenses';

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<ExpenseComponent[]> {
    return this.http.get<ExpenseComponent[]>(`${this.baseUrl}`);
  }

}
