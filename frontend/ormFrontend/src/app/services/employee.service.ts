import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = ' http://192.168.137.1:4000';
  allEmployees: any = [];
  iphoneFlgFrc = true;

  constructor(private http: HttpClient) {}

  getAllEmployees() {
    this.allEmployees = this.http.get(this.baseUrl + '/employee');
    return this.allEmployees;
  }

  getEmployee(id) {
    return this.http
      .get(this.baseUrl + '/employee/' + id);
  }

  addEmployee(formData) {
    const postData = JSON.stringify(formData);
    return this.http.post(this.baseUrl + '/employee/', postData);
  }

  updateEmployee(id, formData) {
    const postData = JSON.stringify(formData);
   
    return this.http.put(
      this.baseUrl +  '/employee/' + id, postData);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrl + '/employee/' + id);
  }

}
