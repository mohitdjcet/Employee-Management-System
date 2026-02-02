import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Leave {
  private http = inject(HttpClient);
  private api = "http://localhost:3000/Leaves";

  getLeaves() {
    return this.http.get<any[]>(this.api);
  }
}
