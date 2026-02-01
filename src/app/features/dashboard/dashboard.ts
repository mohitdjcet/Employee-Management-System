import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  totalEmployees = signal<number>(0);
  totalLeaves = signal<number>(0);
}
