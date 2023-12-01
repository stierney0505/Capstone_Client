import {Component} from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
@Component({
  selector: 'app-applied-student-table',
  templateUrl: './applied-student-table.component.html',
  styleUrls: ['./applied-student-table.component.css'],
})
export class AppliedStudentTableComponent {
  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
  // appliedStudentData: appliedStudent[] = [
  //   {name: 'Sean', gpa: 12.0, degree: 'Computer Science', email: 'sean@outlook.com', experience: true},
  //   {name: 'Luke', gpa: 1.0, degree: 'Computer Science', email: 'luke@outlook.com', experience: true},
  //   {name: 'Prasanna', gpa: 0.6, degree: 'Computer Science', email: 'prasanna@outlook.com', experience: true},
  //   {name: 'Adam', gpa: 0.3, degree: 'Computer Science', email: 'adam@outlook.com', experience: true},
  //   {name: 'Nick', gpa: -0.2, degree: 'Computer Science', email: 'nick@outlook.com', experience: true},
  // ];

  // sortedData: appliedStudent[];

  // constructor() {
  //   this.sortedData = this.appliedStudentData
  // }

  // displayedColumns: string[] = ['name', 'gpa', 'degree', 'email', 'experience'];
  // dataSource = this.appliedStudentData;
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}