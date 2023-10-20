import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  url: string = 'http://18.222.175.231:5000/api/register';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:4001/api/register', data)
      .subscribe((response: any) => {
        console.log('Registration successful!', response);
        this.router.navigate(['/home']);
      }, (error: any) => {
        console.error('Registration failed.', error);
      });
  }
}
