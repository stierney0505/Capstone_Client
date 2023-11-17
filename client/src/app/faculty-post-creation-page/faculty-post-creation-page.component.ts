// faculty-post-creation-page.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-faculty-post-creation-page',
  templateUrl: './faculty-post-creation-page.component.html',
  styleUrls: ['./faculty-post-creation-page.component.css'],
})
export class FacultyPostCreationPageComponent {
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.projectForm = this.formBuilder.group({
      professor: ['', Validators.required],
      projectType: ['', Validators.required],
      projectDetails: this.formBuilder.group({
        project: this.formBuilder.group({
          projectName: ['', Validators.required],
          posted: [''],
          description: ['', Validators.required],
          questions: this.formBuilder.array([]),
          requirements: this.formBuilder.array([]),
        }),
      }),
    });
  }

  onSubmit() {
    const authToken = localStorage.getItem("jwt-auth-token");
    const url = '/api/projects/createProject';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    this.http.post(url, this.projectForm.value, { headers }).subscribe(
      (response) => {
        console.log('Project created successfully', response);
      },
      (error) => {
        console.error('Error creating project', error);
      }
    );
  }
}
