import { Component, OnInit } from '@angular/core';
import { FacultyProjectService } from '../_helpers/faculty-project-service/faculty-project.service';

@Component({
  selector: 'app-research-project-card',
  templateUrl: './research-project-card.component.html',
  styleUrls: ['./research-project-card.component.css']
})
export class ResearchProjectCardComponent implements OnInit {
  activeProjects: any[] = [];

  constructor(private facultyProjectService: FacultyProjectService) {}

  ngOnInit(): void {
    this.facultyProjectService.login('sean@pfw.edu', 'testt11s1sa').subscribe({
      next: () => {
        this.facultyProjectService.getProjects().subscribe({
          next: (data) => {
            console.log('Data:', data); // Log the entire data for inspection
            this.activeProjects = data.success && data.success.projects && data.success.projects.archivedProjects
              ? data.success.projects.archivedProjects.projects
              : [];
            console.log('Active Projects:', this.activeProjects);
          },
          error: (error) => {
            console.error('Error fetching projects', error);
          }
        });
      },
      error: (loginError) => {
        console.error('Error during login', loginError);
      }
    });
  }
}
