import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects:any = [];
  constructor(private projectService:ProjectService, private router:Router, private employeeService:EmployeeService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getAllProjects();
  }

  createProject(){
    this.router.navigate(['/create-project']);
  }


  getAllProjects(){
      this.projectService.getAllProjects().subscribe(result=>{
          this.projects = result;
          
          this.projects.forEach(element => {
              this.employeeService.getEmployee(element.leaderId).subscribe(result=>{
                  element['leader'] = result;
              })
          });
      })
  }

  goToProjectDetail(project){
    this.router.navigate(['/project-detail', project.id]);
  }
  
  

}
