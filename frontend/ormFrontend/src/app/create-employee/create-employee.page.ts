import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import * as _moment from "moment";
import { EmployeeService } from '../services/employee.service';
import { AddressService } from '../services/address.service';
import { PhoneService } from '../services/phone.service';
import { AlertController } from '@ionic/angular';
const moment = _moment;

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  

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
              
              
  startDate:any = '';
  endDate:any = '';
  allEmployees = [];
                

  constructor(private datePicker:DatePicker, private employeeService:EmployeeService, private addressService:AddressService,
    private phoneService:PhoneService, private alertController: AlertController) { }

  ngOnInit() {
      this.getAllEmployees()
  }


  createEmployee(){
    console.log(this.address);
      this.addressService.addAddress(this.address).subscribe(result=>{
            console.log(result);
            let addressResponse:any = result;
            this.employee.addressId = addressResponse.id;

            this.employeeService.addEmployee(this.employee).subscribe(result=>{
                  console.log(result);
                  let employeeResponse:any = result;
                  this.phone.ownerId = employeeResponse.id;
                  this.phone.areaCode = this.phone.phoneNumber.toString().substring(0,3);

                  this.phoneService.addPhone(this.phone).subscribe(result=>{
                    console.log(result);
                      this.presentAlert("Completado!", "Usuario creado satisfactoriamente!");
                  },
                  error=>{
                    console.log('cannot create a phone')
                    this.presentAlert("Algo salió mal", "No se pudo crear el telefono!");
                    return false;
                    
                  })
            },
            error=>{
              console.log('cannot create an employee');
              this.presentAlert("Algo salió mal", "No se pudo crear el empleado!");
              return false;
            })
      },
      error=>{
          console.log("Cannot Create an address");
          this.presentAlert("Algo salió mal", "No se pudo crear la dirección!");
          return false;
      })
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

  

  //#region PickDate

  pickStartDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        let randomDate = moment(date); //casting date to a moment object to transfer the data as string
        this.employee.startDate = randomDate; //passing date to our proposalObject estimateCompleteDate field
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
        this.employee.endDate = randomDate; //passing date to our proposalObject estimateCompleteDate field
        this.endDate = date.toLocaleDateString(); //formatting the date to show it on app
      },
    
      err =>{console.log('Error occurred while getting date: ', err)}
      ); 
    
  }
//#endregion

//#region UX stuff
async presentAlert(header, message) {
  const alert = await this.alertController.create({
    header: header,
    message: message,
    buttons: ["OK"]
  });
  await alert.present();
}
//#endregion
  

}
