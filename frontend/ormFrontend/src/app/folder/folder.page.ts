import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  addresses:any;

  constructor(private activatedRoute: ActivatedRoute, private addressService:AddressService ) { }

  ngOnInit() {
    this.getAllAddresses();
  }

  getAllAddresses(){
      this.addressService.getAllAddress().subscribe(result=>{
          console.log(result);
      }, err=>{
        console.log(err);
      })
  }
  



}
