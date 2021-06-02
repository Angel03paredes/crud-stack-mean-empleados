import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  constructor(public employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeesService.getEmployees().subscribe(
      (res) => {
        this.employeesService.employees = res;
      },
      (err) => console.error(err)
    );
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeesService.updateEmployee(form.value).subscribe(
        (res) => {
          this.getEmployees();
          form.reset();
        },
        (err) => console.error(err)
      );
    } else {
      this.employeesService.addEmployee(form.value).subscribe(
        (res) => {
          this.getEmployees();
          form.reset();
        },
        (err) => console.error('Error employee not  added')
      );
    }
  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want to delete it? ')) {
      this.employeesService.deleteEmployee(id).subscribe(
        (res) => {
          this.getEmployees();
        },
        (err) => console.error('Error, employee not deleted')
      );
    }
  }

  updateEmployee(employee: Employee) {
    this.employeesService.employee = employee;
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
