import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  baseUrl = 'http://192.168.137.1:4000';
  allPhones: any = [];
  iphoneFlgFrc = true;

  constructor(private http: HttpClient) {}

  getAllPhones() {
    this.allPhones = this.http.get(this.baseUrl + '/phone');
    return this.allPhones;
  }

  getPhone(id) {
    return this.http
      .get(this.baseUrl + '/phone/' + id);
  }

  addPhone(formData) {
    const postData = JSON.stringify(formData);
    return this.http.post(this.baseUrl + '/phone/', postData);
  }

  updatePhone(id, formData) {
    const postData = JSON.stringify(formData);
   
    return this.http.put(
      this.baseUrl +  '/phone/' + id, postData);
  }

  deletePhone(id) {
    return this.http.delete(this.baseUrl + '/phone/' + id);
  }

}

