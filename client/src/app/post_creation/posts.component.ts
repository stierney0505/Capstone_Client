import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostProjectComponent {
  title: string = "";
  description: string = ""; 
  responsibilities: string = ""; 
  gpa: Number = 3;
  major: string = "";
  standing: string = "";
  miscExperience: string = "";

  url: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    
  }
}
