import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url="http://localhost:9090/userDetails/read"
  constructor(private http: HttpClient) { }
  getLoginDetails(){
    return this.http.get(this.url)
  
  }
}
