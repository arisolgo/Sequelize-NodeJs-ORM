import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../services/address.service';
import { EmployeeService } from '../services/employee.service';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  addresses:any =[];
  employees:any = [];
  phones:any =[];
  
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private addressService:AddressService,
    private employeeService:EmployeeService, private phoneService:PhoneService ) { }

  ngOnInit() {
  
  }

  ionViewWillEnter(){
    this.getAllEmployees();
  }

  goToEmployeeDetail(employeeId){
    this.router.navigate(["/employee-detail", employeeId]);
  }


  createEmployee(){
    this.router.navigate(['/create-employee']);
  }


  getAllEmployees(){
      this.employeeService.getAllEmployees().subscribe(result=>{

          this.employees = result;

          this.employees.forEach(element => {
                this.addressService.getAddress(element.addressId).subscribe(result=>{
                      element['address'] = result;
                })

                this.phoneService.getAllPhones().subscribe(result=>{
                  this.phones = result;

                  this.phones.forEach(phoneObj => {
                      if(phoneObj.ownerId == element.id)
                       element['phone'] = phoneObj;
                    });
                
              })

          });
          console.log(this.employees);
      })
      
  }
  



}
