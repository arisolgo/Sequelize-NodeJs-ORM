import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.page.html',
  styleUrls: ['./employee-detail.page.scss'],
})
export class EmployeeDetailPage implements OnInit {

  employeeId:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
      this.employeeId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  deleteEmployee(){
      console.log("Deberia eliminarse...");
  }

}
