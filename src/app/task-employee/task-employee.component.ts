import { UserService } from './../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-task-employee',
  templateUrl: './task-employee.component.html',
  styleUrls: ['./task-employee.component.css']
})
export class TaskEmployeeComponent implements OnInit {

  title: string = '';
  employees: any[] = [];
  employeeData: any[] = [];
  ageRangeData: any[] = [];
  newManagers: any[] = [];
  departmentNo = '';
  fromDate = '';
  titleList: string[] = [];
  employeeList: any[] = [];
  employeeId: number = 0;
  lastName: string = "";
  managers: any[] = [];
  divId:number = 0;
  showManagers: boolean = false;
  serverErrorMessage: string = '';
  serverSuccessMessage: string = '';
  isLoading = false;

  constructor(
    private http: HttpClient, 
    private employeeservice: EmployeeService, 
    private userService:UserService
    ) { }

  ngOnInit(): void {
    console.log(this.userService.getId());
    this.divId = this.userService.getId();
  }

  toggleMessage(flag:boolean){
    if(flag) this.serverSuccessMessage = '';
    else this.serverErrorMessage = '';
  }

  updateEmployee() {
    this.employeeservice.updateEmployee(this.employeeId, this.lastName).subscribe(
      (response: any) => {
        this.toggleMessage(false);
        this.serverSuccessMessage = "Updated successfully";
      },
      (error: any) => {
        this.toggleMessage(true);
        this.serverErrorMessage = error.error.message;
      }
    );
  }

  getManager() {
    this.employeeservice.getManager().subscribe(
      (response: any) => {
        this.managers = response;
      },
      (error: any) => {
        console.error('Error fetching manager:', error);
      }
    );
  }

  departmentStatistics:any[]=[]
  getDepartmentSalaryStatistics() {
    this.isLoading = true;
    this.employeeservice.getDepartmentSalaryStatistics().subscribe(
      (response: any[]) => {
        this.departmentStatistics = response;
        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = false;
      }
    );
  }

  designationStatistics:any[]=[]
  getDesignationSalaryStatistics() {
    this.isLoading = true;
    this.employeeservice.getDesignationSalaryStatistics()
      .subscribe(
        (response: any[]) => {
         this.designationStatistics=response;
         this.isLoading = false;
        },
        (error: any) => {
          this.isLoading = false;
        }
      );
  }

  toggleManagers() {
    this.showManagers = !this.showManagers;
    if (this.showManagers && this.managers.length === 0) {
      this.getManager();
    }
  }

  getAgeRange() {
    this.employeeservice.getAgeRange().subscribe(
      (response: any[]) => {
        this.employeeData = response;
      },
      (error: any) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

  getTitleList() {
    this.employeeservice.getTitleList().subscribe(
      (response: string[]) => {
        this.titleList = response;
      },
      (error: any) => {
        console.error('Error fetching title list:', error);
      }
    );
  }

  // list of employee by deptNo and fromDate
  getListOfEmployees() {
    this.employeeservice.getListOfEmployees(this.departmentNo, this.fromDate).subscribe(
      (response: any[]) => {
        this.employeeList = response;
      },
      (error: any) => {
        console.error('Error fetching employee list:', error);
      }
    );
  }

  getNewManagers() {
    this.employeeservice.getNewManagers(this.fromDate).subscribe(
      (response: any[]) => {
        this.newManagers = response;
      },
      (error: any) => {
        console.error('Error fetching new managers:', error);
      }
    );
  }


  getEmployeesByTitle() {
    this.employeeservice.getEmployeesByTitle(this.title).subscribe(
      (response: any[]) => {
        this.toggleMessage(false);
        this.employees = response;
        console.log('Employees:', this.employees);
      },
      (error: any) => {
        this.toggleMessage(true);
        this.serverErrorMessage = error.error.message;
        console.error(error.error.message);
      }
    );
  }

}
