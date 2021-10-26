import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees;
  employeeService: EmployeeService = new EmployeeService();

  constructor(employeeService: EmployeeService){
    this.employees = employeeService.getEmployees();
  }

  ngOnInit(){
    this.employees = this.employeeService.getEmployees();
  }
}
