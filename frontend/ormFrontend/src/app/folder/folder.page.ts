import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  addresses:any;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private addressService:AddressService ) { }

  ngOnInit() {
    this.getAllAddresses();
  }

  createEmployee(){
    this.router.navigate(['/create-employee']);
  }

  goToEmployeeDetail(employee){

  }
  getAllAddresses(){
      this.addressService.getAllAddress().subscribe(result=>{
          console.log(result);
      }, err=>{
        console.log(err);
      })
  }
  



}
