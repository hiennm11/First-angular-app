import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  formData : Employee;
  readonly rootURL = "http://localhost:63750/api";
  constructor(private http : HttpClient) { }

  postEmployee(formData: Employee){
    return this.http.post(`${this.rootURL}/Employees`,formData,this.httpOptions);
  }

  employees : Employee[];
  refreshList(){
    return this.http.get<Employee[]>(`${this.rootURL}/Employees`).toPromise().then(res => this.employees = res as Employee[])
  }

  putEmployee(formData : Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.rootURL}/Employees/${formData.ID}`,formData,this.httpOptions);
  }

  deleteEmployee(id: number){
    return this.http.delete(`${this.rootURL}/Employees/${id}`);
  }
}
