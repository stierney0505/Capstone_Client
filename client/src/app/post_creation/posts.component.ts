import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostProjectComponent {
  email: string = '';
  password: string = '';

  url: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    
  }
}
