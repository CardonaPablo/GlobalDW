import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
     
  base_url: string = "http://localhost:4000/"

  private options: any = { headers: null, observe: null };

  constructor(
      private http: HttpClient,
  ) {
    this.resetHeaders()
  }

     private resetHeaders() {
        this.options.headers = new HttpHeaders({
             'Content-Type': 'application/json',
        });
        this.options.observe = 'response'
    }

    private handleError = (error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        console.error('Client side error occurred:', error.error.message);
        return throwError({ status: error.status, message: "An error ocurred" });
      } else {
        console.error(error)
        return throwError({ status: error.status, message: error.error });
      }
    }

    // GET 
    get(endpoint: string, useToken: boolean = true, queryParams: object = {}): Observable<any> {
        let url = `${this.base_url}${endpoint}`
        return this.http.get(url, this.options)
    }

    // POST

    post(endpoint: string, data = {}, useToken: boolean = true, queryParams: object = {}): Observable<any> {
        let url = `${this.base_url}${endpoint}`
        return this.http.post(url, data, this.options)
    }

    // PUT 

    put(endpoint: string, data:any = {}, useToken: boolean = true, queryParams: object = {}): Observable<any> {
        let url = `${this.base_url}${endpoint}`
        return this.http.put(url, data, this.options)
    }

    // DELETE
    delete(endpoint: string, useToken: boolean = true, queryParams: object = {}): Observable<any>{
        let url = `${this.base_url}${endpoint}`
        return this.http.delete(url, this.options)
    }

}
