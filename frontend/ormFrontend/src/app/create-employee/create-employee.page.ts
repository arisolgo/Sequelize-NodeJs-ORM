import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import * as _moment from "moment";
const moment = _moment;

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  startDate:any = '';
  endDate:any = '';

  constructor(private datePicker:DatePicker) { }

  ngOnInit() {
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


}
