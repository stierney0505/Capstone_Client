import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Sort} from '@angular/material/sort';



export interface appliedStudent {
  name: string;
  gpa: number;
  degree: string;
  email: string;
  experience: boolean;
}


@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent {
   appliedStudentData: appliedStudent[] = [
    {name: 'Sean', gpa: 12.0, degree: 'Computer Science', email: 'sean@outlook.com', experience: true},
    {name: 'Luke', gpa: 1.0, degree: 'Computer Science', email: 'luke@outlook.com', experience: true},
    {name: 'Prasanna', gpa: 0.6, degree: 'Computer Science', email: 'prasanna@outlook.com', experience: true},
    {name: 'Adam', gpa: 0.3, degree: 'Computer Science', email: 'adam@outlook.com', experience: true},
    {name: 'Nick', gpa: -0.2, degree: 'Computer Science', email: 'nick@outlook.com', experience: true},
  ];

  sortedData: appliedStudent[];

  constructor() {
    this.sortedData = this.appliedStudentData
  }
  
  sortData(sort: Sort) {
    const data = this.appliedStudentData.slice();
    if(!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch(sort.active) {
        case 'name' : return compare(a.name, b.name, isAsc);
        case 'name' : return compare(a.gpa, b.gpa, isAsc);
        case 'name' : return compare(a.degree, b.degree, isAsc);
        case 'name' : return compare(a.email, b.email, isAsc);
        case 'name' : return compare(a.experience, b.experience, isAsc);
        default: return 0;
      }
    });
  }

  displayedColumns: string[] = ['name', 'gpa', 'degree', 'email', 'experience'];
  dataSource = this.appliedStudentData;
}

function compare (a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
