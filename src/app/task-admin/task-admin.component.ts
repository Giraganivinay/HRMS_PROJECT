import { UserService } from './../service/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-task-admin',
  templateUrl: './task-admin.component.html',
  styleUrls: ['./task-admin.component.css']
})
export class TaskAdminComponent implements OnInit {
  employeesJoinedYear: any[] = [];
  employeesJoinedLastGivenYears: any[] = [];
  year: number = 0;
  noOfYears: number = 0;
  employeList: number | null = null;
  employeeCount: number | null = null;
  numberOfYears: number = 0
  selectedYear: number = 0
  empNo: number = 0;
  deptNo: string = '';
  fromDate: string = '';
  toDate: string = '';
  title: string = ''
  divId: number = 0;
  employee: any = {
    birthDate: '',
    firstName: '',
    lastName: '',
    gender: '',
    hireDate: ''
  };
  // msg: any;

  serverSuccessMessage = '';
  serverErrorMessage='';

  msg !: {
    message: ''
    timeStamp: ''
  }

  toggleMessage(flag:boolean){
    if(flag) this.serverSuccessMessage = '';
    else this.serverErrorMessage = '';
  }

  constructor(
    private adminservice: AdminService,
    private userService: UserService,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    console.log(this.userService.getId());
    this.divId = this.userService.getId();
  }
  getEmployeesJoinedYear() {
    if (this.year && this.year > 0) {
      this.adminservice.getEmployeesListJoinedInLastGivenYears(this.year).subscribe(
        (response: any[]) => {
          this.employeesJoinedYear = response;
          console.log('Employees (Joined in Year):', this.employeesJoinedYear);
        },
        (error: any) => {
          console.error('Error fetching employees:', error);
        }
      );
    }
  }
  getEmployeeCountAfterYear() {
    this.adminservice.getEmployeeCountJoinedAfterGivenNoOfYears(this.noOfYears).subscribe(
      (count: number) => {
        this.employeeCount = count;
        console.log('Employee Count:', this.employeeCount);
      },
      (error: any) => {
        console.error('Error fetching employee count:', error);
      }
    );
  }
  getEmployeeListAfterNumberOfYear() {
    if (this.numberOfYears && this.numberOfYears > 0) {
      this.adminservice.getEmployeesListJoinedAfterNoOfYears(this.numberOfYears).subscribe(
        (response: any[]) => {
          this.employeesJoinedLastGivenYears = response;
          console.log('Employees (Joined in Last Given Years):', this.employeesJoinedLastGivenYears);
        },
        (error: any) => {
          console.error('Error fetching employees:', error);
        }
      );
    }
  }
  getEmployeeCount() {
    this.adminservice.getEmployeeCountAfterSpecficYear(this.selectedYear).subscribe(
      (count: number) => {
        this.employeList = count;
        console.log('Employee Count:', this.employeList);
      },
      (error: any) => {
        console.error('Error fetching employee count:', error);
      }
    );
  }
  // assign department to employee
  assignDepartment() {
    const requestData = {
      id: {
        empNo: {
          empNo: this.empNo
        },
        deptNo: {
          deptNo: this.deptNo
        }
      },
      fromDate: this.fromDate,

      toDate: this.toDate

    };
    this.adminservice.assignDepartment(requestData).subscribe(
      (response: string) => {

        alert(response);
        this.toggleMessage(false);
        this.serverSuccessMessage = response;
      },

      (error: any) => {
        this.toggleMessage(true);
        const m = JSON.parse(error.error);
        this.serverErrorMessage = m.message
      }

    );

  }

  // assign manager to department
  assignDepartmentManager() {
    const requestData = {
      id: {
        empNo: {
          empNo: this.empNo
        },
        deptNo: {
          deptNo: this.deptNo
        }
      },
      fromDate: this.fromDate,
      toDate: this.toDate
    };
    this.adminservice.assignDepartmentManager(requestData).subscribe(
      (response: string) => {
        this.toggleMessage(false);
        this.serverSuccessMessage = response;
      },
      (error: any) => {
        this.toggleMessage(true);
        const m = JSON.parse(error.error);
        this.serverErrorMessage = m.message;
      }
    );
  }

  // assign title/designation to employee
  assignDesignation() {
    const data = {
      id: {
        empNo: {
          empNo: this.empNo
        },
        title: this.title,
        fromDate: this.fromDate
      },
      toDate: this.toDate
    };
    this.adminservice.assignDesignation(data).subscribe(
      (response: string) => {
        this.toggleMessage(false);
        this.serverSuccessMessage = response;
      },
      (error: any) => {
        this.toggleMessage(true);
        const m = JSON.parse(error.error);
        this.serverErrorMessage = m.message;
      }
    );
  }

  department: any = {
    deptName: ''
  }
  addDepartment() {
    this.adminservice.addDepartment(this.department).subscribe(
      (response: string) => {
        this.toggleMessage(false);
        this.serverSuccessMessage = response;
        console.log(this.serverSuccessMessage);
      },
      (error: any) => {
        this.toggleMessage(true);
        const m = JSON.parse(error.error);
        this.serverErrorMessage = m.message;
      }
    );
  }
  addEmployee() {
    this.adminservice.addEmployee(this.employee).subscribe(
      (response: string) => {
        this.serverSuccessMessage = "Employee added successfully";
      },
      (error: any) => {
        this.toggleMessage(true);
        const m = JSON.parse(error.error);
        this.serverErrorMessage = m.message;
      }
    );
  }
  deleteEmployee() {
    this.adminservice.deleteEmployee(this.empNo).subscribe(
      (response: string) => {
        this.toggleMessage(false);
        this.serverSuccessMessage = response;
      },
      (error: any) => {
        this.toggleMessage(true);
        const m = JSON.parse(error.error);
        this.serverErrorMessage = m.message;
      }
    );
  }
  rating: number = 0
  promoted: boolean = false;
  updateSalary() {
    this.adminservice.updateSalary(this.empNo, this.rating, this.promoted).subscribe(
      (response: string) => {
        this.toggleMessage(false);
        this.serverSuccessMessage = response;
      },
      (error: any) => {
        this.toggleMessage(true);
        const m = JSON.parse(error.error);
        this.serverErrorMessage = m.message;
      }
    );
  }
  yearsOfExperience: number = 0
  employees: any[] = []
  getEmployeesByExperience(years: number): void {
    this.adminservice.getEmployeesByExperience(years)
      .subscribe(
        (response: any) => {
          this.employees = [];
          this.employees = response;
        },
        (error: any) => {
          console.error('Error retrieving employees:' +  JSON.stringify(error));
        }
      );
  }
  totalWomenEmployeesCount: number = 0
  gender: string = ''
  getEmployeesCount(): void {
    this.adminservice.getTotalWomenEmployeesCount(this.gender).subscribe(
      count => {
        this.totalWomenEmployeesCount = count;
      },
      error => {
        console.error('Error retrieving employees count:', error);
      }
    );
  }
  womenEmployees: any[] = [];
  getWomenEmployees(): void {
    this.adminservice.getWomenEmployees().subscribe(
      (response: any) => {
        this.womenEmployees = response;
      },
      (error: any) => {
        console.error('Error retrieving women employees:', error);
      }
    );
  }
}
