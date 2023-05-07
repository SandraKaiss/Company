import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    const headers = this.getHeaders();
    return this.http.get<T>(this.baseUrl + url, { headers, params })
      .pipe(
        catchError(this.handleError)
      );
  }

  post<T>(url: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.post<T>(this.baseUrl + url, body, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  put<T>(url: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.put<T>(this.baseUrl + url, body, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  delete<T>(url: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.delete<T>(this.baseUrl + url, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }
}
