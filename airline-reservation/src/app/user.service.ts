import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:9090/userDetails/read"
  constructor(private http:HttpClient) { }
  getUsers(){
    this.http.get(this.url)
  }
}
