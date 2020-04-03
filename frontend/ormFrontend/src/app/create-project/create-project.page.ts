import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ProjectService } from '../services/project.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  employees:any = [];
  assignedUsers = [];

  project = {
                type:'',
                name:'',
                budget:'',
                leaderId:0
            }


  constructor(private employeeService:EmployeeService, private projectService:ProjectService,
    private alertController:AlertController, private router:Router ) { }

  ngOnInit() {
      this.getAllEmployees();
  }


  getAllEmployees(){
      this.employeeService.getAllEmployees().subscribe(result=>{
          this.employees = result;
          console.log(result);
      })
  }

  createProject(){
      this.projectService.addProject(this.project).subscribe(result=>{
        let projectResponse:any = result;
        this.assignProjectEmployee(projectResponse.id);
          this.presentAlert("Completado!", "Proyecto creado satisfactoriamente!");
          this.router.navigate(['/projects']);
          
      })
      console.log(this.project);
  }

  setLeader(leader){
    let leaderId = +leader.substring(0,2);
    this.project.leaderId = leaderId;
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ["OK"]
    });
    await alert.present();
  }

  printArray(){
      console.log(this.assignedUsers);
  }

  assignProjectEmployee(projectId){
      this.assignedUsers.forEach(element => {
        element['projectId']=projectId;
          this.projectService.addProjectEmployee(element).subscribe(result=>{

          })
      });
  }

  



}
