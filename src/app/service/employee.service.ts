import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   constructor(private http: HttpClient, 
    userService:UserService) { }

  // getAllDesignations(){
  //   return this.http.get("http://localhost:9090/api/v1/employeehrmsconsumer/designations");
  // }

  BASE_URL = "http://localhost:9090/api/v1/employeehrmsconsumer";

  updateEmployee(id:number,lastName:string): Observable<any>{
    const updatep={
      lastName:lastName
    };
    return this.http.put(`http://localhost:9090/public/api/v1/employees/lastname/${id}`,updatep);
  }

 
  getManager(): Observable<any> {
    const url = `http://localhost:9090/api/v1/employeehrmsconsumer/manager`;
    return this.http.get(url);
  }

  getDesignationSalaryStatistics(): Observable<any> {
    const url = `${this.BASE_URL}/designation/details`;
    return this.http.get(url);
  }

  getDepartmentSalaryStatistics(): Observable<any> {
    const url = `${this.BASE_URL}/department/details`;
    return this.http.get(url);
  }

  getAgeRange(): Observable<any> {
    const url = `${this.BASE_URL}/midageemp`;
    return this.http.get(url);
  }

  
  getTitleList(): Observable<any> {
    const url = `${this.BASE_URL}/designations`;
    return this.http.get(url);
  }


  getListOfEmployees(deptNo: string, fromDate: string): Observable<any> {
    const url = `${this.BASE_URL}/employees/department/${deptNo}/fromdate/${fromDate}`;
    return this.http.get(url);
  }

  getNewManagers(fromDate: string): Observable<any> {
    const url = `${this.BASE_URL}/manager/${fromDate}`;
    return this.http.get(url);
  }

  
  getEmployeesByTitle(title: string): Observable<any> {
    const url = `${this.BASE_URL}/title/${title}`;
    return this.http.get(url);
  }
}
