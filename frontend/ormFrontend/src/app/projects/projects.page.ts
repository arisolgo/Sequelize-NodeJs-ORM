import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  createProject(){
    this.router.navigate(['/create-project']);
  }

  goToEditProject(project){
    this.router.navigate(["/project-detail", 2]);
  }



}
