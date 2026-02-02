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

  addEmployee(data: any) {
    return this.http.post<any>(this.api, data);
  }

  updateEmployee(id: number, data: any) {
    return this.http.put<any>(`${this.api}/${id}`, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
