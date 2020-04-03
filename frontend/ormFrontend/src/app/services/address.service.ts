import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = 'http://192.168.137.1:4000';
  allAddress: any = [];
  iphoneFlgFrc = true;

  constructor(private http: HttpClient) {}

  getAllAddress() {
    this.allAddress = this.http.get(this.baseUrl + '/address');
    return this.allAddress;
  }

  getAddress(id) {
    return this.http
      .get(this.baseUrl + '/address/' + id);
  }

  addAddress(formData) {
    
    return this.http.post(this.baseUrl + '/address/', formData);
  }

  updateAddress(id, formData) {
    const postData = JSON.stringify(formData);
   
    return this.http.put(
      this.baseUrl +  '/address/' + id, postData);
  }

  deleteAddress(id) {
    return this.http.delete(this.baseUrl + '/address/' + id);
  }

 
}
