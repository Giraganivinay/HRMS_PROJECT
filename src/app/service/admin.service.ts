import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface ResonseDto{
  "message" : "",
  "timeStamp" : ""
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  

  constructor(private _http: HttpClient) { }

  Base_url = `http://localhost:9090/api/v1/adminhrmsconsumer/employees`;


  getEmployeesListJoinedInLastGivenYears(year: number): Observable<any> {
    const url = `${this.Base_url}/${year}`;
    return this._http.get(url);
  }

  getEmployeeCountJoinedAfterGivenNoOfYears(noOfYears: number): Observable<number> {
    const url = `${this.Base_url}/count/${noOfYears}`;
    return this._http.get<number>(url);
  }


  getEmployeesListJoinedAfterNoOfYears(numberOfYear: number): Observable<any> {
    const url = `${this.Base_url}/joined-after/${numberOfYear}`;
    return this._http.get(url);
  }

  getEmployeeCountAfterSpecficYear(year: number): Observable<number> {
    const url = `${this.Base_url}/countAfter/${year}`;
    return this._http.get<number>(url);
  }
//--------------------------
  assignDepartment(data: any): Observable<any> {
    const url = `http://localhost:9090/api/v1/adminhrmsconsumer/assigndept`;
    return this._http.post(url, data, {responseType: 'text'});
  }

  assignDepartmentManager(data: any): Observable<any> {
    const url = `http://localhost:9090/api/v1/adminhrmsconsumer/assignmgr`;
    return this._http.post(url, data, {responseType: 'text'});
  }

  assignDesignation(data:any): Observable<any> {
    const url = 'http://localhost:9090/api/v1/adminhrmsconsumer/assigntitle';
    
    return this._http.post(url, data, {responseType: 'text'});
  }

  addDepartment(department: any): Observable<any> {

    const url = 'http://localhost:9090/api/v1/adminhrmsconsumer/department';

    return this._http.post(url, department, {responseType: 'text'});

  }

  addEmployee(employee: any): Observable<any> {
    const url = 'http://localhost:9090/api/v1/adminhrmsconsumer/employee';
    return this._http.post(url, employee, {responseType: 'text'});

  }

  deleteEmployee(empNo: number) {

    const url = `http://localhost:9090/api/v1/adminhrmsconsumer/employees/${empNo}`;

    return this._http.delete(url, {responseType: 'text'});

  }

  updateSalary(empNo:number, rating: number, promoted: boolean): Observable<any> {

    const url = `http://localhost:9090/api/v1/adminhrmsconsumer/salaries/${empNo}`;

    let params = new HttpParams();
    params = params.set('rating', rating);
    params = params.set('promoted', promoted.toString());

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: params,
      responseType: 'text' as 'text' 
    };
    return this._http.put(url, null, options);

  }

  getEmployeesByExperience(years: number): Observable<any> {
    console.log("year : " + years);
    
    const url = `${this.Base_url}/experience/${years}`;
    return this._http.get(url);

  }

  getTotalWomenEmployeesCount(gender:string): Observable<number> {
    const url = `${this.Base_url}/gender/${gender}/count`;
    return this._http.get<number>(url);

  }

  getWomenEmployees(): Observable<any> {
    const gender = 'F';
    return this._http.get(`${this.Base_url}/gender/${gender}`);
  }
}
