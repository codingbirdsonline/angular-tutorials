import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public saveStudentData(student: any) {
    return this.http.post(this.BASE_URL + '/students', student);
  }
  public getStudentData() {
    return this.http.get(this.BASE_URL + '/students');
  }
}
