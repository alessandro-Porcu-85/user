import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //use this class employeeArray for the *ngFor
  employeeArray: Employee[]= [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Paul", country: "Italy"},
    {id: 3, name: "Giovanni", country: "Spain"},
    {id: 4, name: "Leonardo", country: "Germany"},
  ];

  //ngModel
  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;

  }

  addOrEdit(){
if(this.selectedEmployee.id === 0){
  this.selectedEmployee.id = this.employeeArray.length + 1;
  this.employeeArray.push(this.selectedEmployee);
}

    //add and terminate to add a new employee without datas(clean input)
    this.selectedEmployee = new Employee();
  }

  Delete(){
    if(confirm('Are you sure you want to delete this Employee?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

}


