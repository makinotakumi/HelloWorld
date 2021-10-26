import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(){
    return [
      {
        lastname: 'Yamada',
        firstname: 'Hanako',
        title: 'Sales Representative'
      },
      {
        lastname: 'Suzuki',
        firstname: 'Ichiro',
        title: 'Manager'
      },
      {
        lastname: 'Smith',
        firstname: 'Kevin',
        title: 'CEO'
      }
    ];
  }
}
