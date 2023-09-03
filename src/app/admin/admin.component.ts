import { UserService } from './../service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  constructor(private userService:UserService){}

  tasks: { title: string, description: string }[] = [
    {
      title: 'Employees Joined After Given Year',
      description: 'Fetch a list of employees who joined the organization after given year.'
    },
    {
      title: 'Count of Employees Joined in Last given Years',
      description: 'Get the total count of employees who joined the organization in the last given years.'
    },
    {
      title: 'Employees Joined in Last Given Years',
      description: 'Retrieve a list of employees who joined the organization in the last given years.'
    },
    {
      title: 'Count of Employees Joined After 2005',
      description: 'Retrieve the total count of employees who joined the organization after the year 2005.'
    },
    {
      title: 'Assign Department to Employee',
      description: 'Assign a specific department to an employee for a specified duration.'
    },
    {
      title: 'Assign Manager to Department',
      description: 'Assign a manager to a specific department for a specified duration.'
    },
    {
      title: 'Assign Employee Designation',
      description: 'Assign a specific title (designation) to an employee from a start date to an end date.'
    },
    {
      title: 'Add New Department',
      description: 'Create a new department in the organization.'
    },
    {
      title: 'Add New Employee',
      description: 'Add a new employee to the organization.'
    },
    {
      title: 'Delete Employee',
      description: 'Remove an employee from the organization based on their employee ID (empid) when they leave.'
    },
    {
      title: 'Update Employee Salary',
      description: 'Adjust the salary of an employee each year based on their performance rating. If the employee is promoted, update the salary by 100000.'
    },
    {
      title: 'Employees with Experience Awards',
      description: 'Identify employees with specific years of experience (e.g., 5, 10, 15, 20, 25, 30) to recognize and award them.'
    },
    {
      title: 'Count of Women Employees for Gift Voucher',
      description: 'Calculate the total count of women employees to send them a mail for Women\'s Day celebration.'
    },
    {
      title: 'List of Women Employees for Invitation',
      description: 'Retrieve the list of women employees to send them a mail invitation for Women\'s Day'
    }
  ];

  setId(id:number){
    this.userService.setId(id);
  }

}
