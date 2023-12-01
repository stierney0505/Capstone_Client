import { Component } from '@angular/core';

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
    { name: 'Sean', gpa: 12.0, degree: 'Computer Science', email: 'sean@outlook.com', experience: true },
    { name: 'Luke', gpa: 1.0, degree: 'Computer Science', email: 'luke@outlook.com', experience: true },
    { name: 'Prasanna', gpa: 0.6, degree: 'Computer Science', email: 'prasanna@outlook.com', experience: true },
    { name: 'Adam', gpa: 0.3, degree: 'Computer Science', email: 'adam@outlook.com', experience: true },
    { name: 'Nick', gpa: -0.2, degree: 'Computer Science', email: 'nick@outlook.com', experience: true },
  ];

  sortedData: appliedStudent[];

  constructor() {
    this.sortedData = this.appliedStudentData
  }

  displayedColumns: string[] = ['name', 'gpa', 'degree', 'email', 'experience'];
  dataSource = this.appliedStudentData;
}
