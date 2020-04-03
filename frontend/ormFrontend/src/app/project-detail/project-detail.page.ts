import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { EmployeeService } from '../services/employee.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {
  projectId:any;
  currentProject: any={};
  projectLeader: any={};
  employees: any = [];
  currentProjectEmployees:any = [];
  assignedUsers:any =[];
  projectEmployees =[];

  constructor(private activatedRoute:ActivatedRoute, private projectService:ProjectService,
    private employeeService:EmployeeService, private alertController:AlertController,
    private router:Router) { }

  ngOnInit() {
     this.projectId = this.activatedRoute.snapshot.paramMap.get('id');
     this.getProject();
     this.getAllEmployees();
  }

  

  getProject(){
      this.projectService.getProject(this.projectId).subscribe(result=>{
          this.currentProject = result;
          console.log(this.currentProject);
          this.getProjectLeader(this.currentProject.leaderId);
          this.getCurrentProjectEmployees(this.projectId);
      })
  }

  getCurrentProjectEmployees(projectId){
    this.projectService.getProjectEmployee(projectId).subscribe(result=>{
       let projectEmployeeResponse:any = result;

       this.projectEmployees = projectEmployeeResponse;

       this.projectEmployees.forEach(element => {
          this.employeeService.getEmployee(element.employeeId).subscribe(result=>{
              element['employee']= result;
              console.log(this.projectEmployees)
          })
       });
    })
  }

  deleteProjectEmployee(projectEmployee){
      this.projectService.deleteProjectEmployee(projectEmployee.employeeId).subscribe(result=>{
        this.presentAlert("Completado!", "Colaborador eliminado satisfactoriamente!"); 
        this.ngOnInit();
      })
  }

  deleteAllProjectEmployees(proyectId){
      this.projectService.getProjectEmployee(proyectId).subscribe(result=>{
          let allProjectEmployees:any = result;
          allProjectEmployees.forEach(element => {
              this.projectService.deleteProjectEmployee(element.employeeId).subscribe(result=>{

              })
          });
      })
  }




  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(result=>{
        this.employees = result;
        console.log(result);
    })
}
  getProjectLeader(leaderId){
    this.employeeService.getEmployee(leaderId).subscribe(result=>{
        this.projectLeader = result;
    })
  }

  setLeader(leader){
    let leaderId = +leader.substring(0,2);
    this.currentProject.leaderId = leaderId;
  }

  deleteProject(){
      this.projectService.deleteProject(this.projectId).subscribe(result=>{
        this.deleteAllProjectEmployees(this.projectId);
        this.presentAlert("Completado!", "Proyecto eliminado satisfactoriamente!");
        this.router.navigate(['/projects']);
      })
  }

  updateProject(){
    this.projectService.updateProject(this.projectId, this.currentProject).subscribe(result=>{
      this.assignProjectEmployee(this.projectId);
        this.presentAlert("Completado!", "Cambios efectuados satisfactoriamente!");
        this.ngOnInit();
    })
  }

 


  assignProjectEmployee(projectId){
    if(this.assignedUsers.lenght != 0){
      this.assignedUsers.forEach(element => {
        element['projectId']=projectId;
          this.projectService.addProjectEmployee(element).subscribe(result=>{
          })
      });
    }
  
}

  
  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ["OK"]
    });
    await alert.present();
  }
  

}
