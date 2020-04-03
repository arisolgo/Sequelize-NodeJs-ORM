import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://192.168.137.1:4000';
  allProjects: any = [];
  allProjectsEmployees: any =[];
  

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
    
    return this.http.post(this.baseUrl + '/project/', formData);
  }

  updateProject(id, formData) {
    
   
    return this.http.put(
      this.baseUrl +  '/project/' + id, formData);
  }

  deleteProject(id) {
    return this.http.delete(this.baseUrl + '/project/' + id);
  }

  getAllProjectEmployees(){
    this.allProjectsEmployees = this.http.get(this.baseUrl + '/projectEmployee');
    return this.allProjectsEmployees;
  }

  getProjectEmployee(projectId){
    return this.http
    .get(this.baseUrl + '/projectEmployee/' + projectId);
  }

  addProjectEmployee(formData) {
    
    return this.http.post(this.baseUrl + '/projectEmployee/', formData);
  }

  deleteProjectEmployee(id) {
    return this.http.delete(this.baseUrl + '/projectEmployee/' + id);
  }

  




}

