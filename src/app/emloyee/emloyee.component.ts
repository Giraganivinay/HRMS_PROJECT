import { EmployeeService } from './../service/employee.service';
import { UserService } from './../service/user.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emloyee',
  templateUrl: './emloyee.component.html',
  styleUrls: ['./emloyee.component.css']
})
export class EmloyeeComponent {
  tasks = [
    { title: 'Update last name', description: 'Update the last name for yourself'},
    { title: 'Get details of managers', description: 'Get details of employees who are managers' },
    { title: 'Get employees in specific department', description: 'Get a list of employees working in a specific department in a specific year' },
    { title: 'Check department-wise salary statistics', description: 'Check department-wise average, maximum, and minimum salary' },
    { title: 'Check designation-wise salary statistics', description: 'Check designation-wise average, maximum, and minimum salary' },
    { title: 'Find mid-age employees', description: 'Find employees in their 50s' },
    { title: 'Check available designations', description: 'Check the list of designations provided in Capgemini' },
    { title: 'Print details of new managers', description: 'Print employee ID, name, and hire date of those who became managers after a specific date' },
    { title: 'Check details of employees with a specific title', description: 'Check details of employees working as a specific title' }
  ];

  constructor(private userService: UserService, private empService : EmployeeService){}
  // managers:any = {}
  
  setId(id:number){
    this.userService.setId(id);
  }

  
}
