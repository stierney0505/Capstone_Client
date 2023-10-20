import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class ConfirmEmailComponent {
  public href: string = "";
  public token: string = "";
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    let token = this.href.split("/").pop();
    if (token) {
      this.token = token;
    }
    console.log(this.href);
    console.log(this.token);
    if (this.token) {
      const data = {
        ["email-token"]: this.token
      };
  
      this.http.post('http://localhost:4001/api/auth/confirmEmail', data)
        .subscribe((response: any) => {
          console.log('Email confirmation successful!', response);
          this.router.navigate(['/home']);
        }, (error: any) => {
          console.error('Confirmation failed.', error);
        });
    }
  }
}
