import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  source:string=""
  destination:string=""
  public data:any;
  date:Date=new Date()
  currentdate=new Date()
  formattedDate=this.datePipe.transform(this.currentdate,'yyyy-MM-dd')
  clicked=false;
  from="";
  to=""
  selectDate:Date=new Date()
  constructor(private router:Router, private datePipe: DatePipe,private flights:FlightService) { }

  ngOnInit(): void {
    this.flights.getFlights().subscribe((result)=>{
      console.log("result",result)
      this.data=result
    })
  }
  modelChangeSource(event:any){
    this.source=event
  }
  modelChangeDestination(event:any){
    this.destination=event
  }
  modelChangeDate(event:any){
    this.date=event
  }
  
  handleClickSearch(){
   if(this.source!=""&& this.destination!=""){
    this.clicked=true;
   }
    this.from=this.source
    this.to=this.destination
    this.selectDate=this.date
    //console.log(this.source)
    // alert(this.source)
    // alert(this.destination)
    // alert(this.date)
  }
  handleClickBooking(){
    this.router.navigate(['/bookTicket'])
  }
  
}
