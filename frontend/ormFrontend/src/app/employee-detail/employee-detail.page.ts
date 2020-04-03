import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import * as _moment from "moment";
import { EmployeeService } from '../services/employee.service';
import { AddressService } from '../services/address.service';
import { PhoneService } from '../services/phone.service';
import { AlertController } from '@ionic/angular';
import { error } from 'protractor';
const moment = _moment;


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.page.html',
  styleUrls: ['./employee-detail.page.scss'],
})
export class EmployeeDetailPage implements OnInit {

  employee:any = {
    firstName:"",
    lastName: "",
    salary:"",
    startDate:"",
    endDate:"",
    addressId: 0 
   }

address:any = 
   {
     street: "",
     city:"",
     province:"",
     country: "",
     postcode:""
   }

phone:any = {
     type:"",
     phoneNumber:"",
     areaCode:"",
     ownerId: 0 
}      

  endDate:any;
  startDate:any;
  employeeId:any;
  allEmployees:any;
  currentManager:any = {};
  constructor(private activatedRoute:ActivatedRoute, private datePicker:DatePicker,
    private employeeService:EmployeeService, private addressService:AddressService,
    private phoneService:PhoneService, private alertCtrl:AlertController, private router:Router) { }

  ngOnInit() {
      this.employeeId = this.activatedRoute.snapshot.paramMap.get('id');
      this.getCurrentEmployee(this.employeeId);
      this.getAllEmployees();

  }

  getCurrentEmployee(id){
      this.employeeService.getEmployee(id).subscribe(result=>{
          this.employee = result;

          this.getAddress(this.employee.addressId);
          this.getPhone(this.employee.id);
          this.getManager(this.employee.managerId);
      })
  }

  getManager(id){
    this.employeeService.getEmployee(id).subscribe(result=>{
        this.currentManager =  result;
    })
  }

  getPhone(ownerId){
    this.phoneService.getAllPhones().subscribe(result=>{
        result.forEach(element => {
            if(element.ownerId == ownerId){
                this.phone = element;
            }
        });
      console.log(this.phone);
    })

  }

  getAddress(addressId){
      this.addressService.getAddress(addressId).subscribe(result=>{
          this.address = result;
          console.log(this.address);
      })
     
  }

  deleteEmployee(){
       this.employeeService.getEmployee(this.employeeId).subscribe(result=>{
         let employeeResponse:any = result;
         let addressId = employeeResponse.addressId;
         this.deletePhone(this.employeeId);
            this.deleteAddress(employeeResponse.addressId);
            
            this.employeeService.deleteEmployee(this.employeeId).subscribe(result=>{
                this.presentAlert("Completado", "Empleado eliminado satisfactoriamente!");
                this.router.navigate(['/folder']);
            })
       }, error=>{
        this.employeeService.getEmployee(this.employeeId).subscribe(result=>{

        }, error=>{
          this.presentAlert("Algo salió mal", "Intente mas tarde!");
        })
       })
     
  }

  updateEmployee(){
      this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(result=>{
        console.log(result);
        this.updateAddress();
        this.updatePhone();
        this.presentAlert("Completado", "Empleado Editado satisfactoriamente!");
        this.ngOnInit();
        
      },error=>{
        console.log(error.error.msg);
        if(error.error.msg == "SQLITE_CONSTRAINT: FOREIGN KEY constraint failed"){
          this.presentAlert("Algo salió mal", "Un gerente no debe ser empleado de su empleado.");
        
        }
      })
  }

  updatePhone(){
      this.phoneService.updatePhone(this.phone.id, this.phone).subscribe(result=>{
         
      })
  }

  updateAddress(){
    this.addressService.updateAddress(this.address.id, this.address).subscribe(result=>{
         
    })
  }

  deletePhone(ownerId){
    this.phoneService.getAllPhones().subscribe(result=>{
        result.forEach(element => {
            if(element.ownerId==ownerId){
              this.phoneService.deletePhone(element.id).subscribe(result =>{

              })
            }
        });
    })
  }

  deleteAddress(addressId){
      this.addressService.deleteAddress(addressId).subscribe(result=>{
    
      })
  }


  pickStartDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        let randomDate = moment(date); //casting date to a moment object to transfer the data as string
        // this.proposal.estimateCompleteDate = randomDate; //passing date to our proposalObject estimateCompleteDate field
        this.startDate = date.toLocaleDateString(); //formatting the date to show it on app
      },
    
      err =>{console.log('Error occurred while getting date: ', err)}
      ); 
    
  }

  pickEndDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        let randomDate = moment(date); //casting date to a moment object to transfer the data as string
        // this.proposal.estimateCompleteDate = randomDate; //passing date to our proposalObject estimateCompleteDate field
        this.endDate = date.toLocaleDateString(); //formatting the date to show it on app
      },
    
      err =>{console.log('Error occurred while getting date: ', err)}
      ); 
    
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(result =>{
         console.log(result);
        this.allEmployees = result;
    })
}

setManager(manager){
  let managerId = +manager.substring(0,2);
  this.employee.managerId = managerId;
}


async presentAlert(header, message) {
  const alert = await this.alertCtrl.create({
    header: header,
    message: message,
    buttons: ["OK"]
  });
  await alert.present();
}

}
