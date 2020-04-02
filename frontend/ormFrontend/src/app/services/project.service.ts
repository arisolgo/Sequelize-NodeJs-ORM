import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:4000';
  allProjects: any = [];
  

  constructor(private http: HttpClient) {}

  getAllProjects() {
    this.allProjects = this.http.get(this.baseUrl + '/project');
    return this.allProjects;
  }

  getProject(id) {
    return this.http
      .get(this.baseUrl + '/project/' + id);
  }

  addProject(formData) {
    const postData = JSON.stringify(formData);
    return this.http.post(this.baseUrl + '/project/', postData);
  }

  updateProject(id, formData) {
    const postData = JSON.stringify(formData);
   
    return this.http.put(
      this.baseUrl +  '/project/' + id, postData);
  }

  deleteProject(id) {
    return this.http.delete(this.baseUrl + '/project/' + id);
  }

}

