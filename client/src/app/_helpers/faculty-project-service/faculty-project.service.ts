import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacultyProjectService {
  apiUrl = environment.apiUrl;
  private authToken: string | null = null;

  constructor(private http: HttpClient) {}

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/login`, loginData)
      .pipe(
        tap((response: any) => this.setAuthToken(response?.success?.accessToken))
      );
  }

  getProjects(): Observable<any> {
    const authToken = localStorage.getItem("jwt-auth-token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.get(`${this.apiUrl}/projects/getProjects`, { headers });
  }
}
