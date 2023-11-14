import { Component, OnInit } from '@angular/core';
import { FacultyProjectService } from '../_helpers/faculty-project-service/faculty-project.service';

@Component({
  selector: 'app-research-project-card',
  templateUrl: './research-project-card.component.html',
  styleUrls: ['./research-project-card.component.css']
})
export class ResearchProjectCardComponent implements OnInit {
  facultyProjects: any[] = [];

  constructor(private facultyProjectService: FacultyProjectService) {}

  ngOnInit(): void {
    this.facultyProjectService.getProjects().subscribe(
      (data) => {
        this.facultyProjects = data;
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );
  }
}
