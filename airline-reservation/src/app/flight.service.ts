import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  url="http://localhost:9090/flightDetails/read";
  constructor(private http:HttpClient) {
   }
   getFlights(){
    return this.http.get(this.url);
  }
}
