import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { EmployeeList } from './features/employee-list/employee-list';

export const routes: Routes = [
    {path:"", component: Dashboard},
    {path:"employees",component:EmployeeList }
];
