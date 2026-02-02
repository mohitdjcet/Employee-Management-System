import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Employee } from '../../services/employee';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  private empService = inject(Employee);

  employees = signal<any[]>([]);

  ngOnInit() {
    this.empService.getEmployees().subscribe((data) => {
      this.employees.set(data);
    });
  }
}
