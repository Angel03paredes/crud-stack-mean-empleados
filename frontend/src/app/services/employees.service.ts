import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  URL_API = "http://localhost:3000/employees"
  employees: Employee[]
  employee: Employee = {
    name:"",
    office:"",
    salary: 0,
    position:""
  }

  isUpdate : boolean = false;

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
  }

  addEmployee(employee:Employee){
    return this.http.post(this.URL_API,employee)
  }

  deleteEmployee(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateEmployee(employee:Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`,employee)
  }

}
