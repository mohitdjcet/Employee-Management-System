import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  private http = inject(HttpClient);

  private api = 'http://localhost:3000/employees';

  getEmployees() {
    return this.http.get<any[]>(this.api);
  }
}
