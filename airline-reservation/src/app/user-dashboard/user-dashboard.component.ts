import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  source:string=""
  destination:string=""
  date:Date=new Date()
  constructor() { }

  ngOnInit(): void {
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
    alert(this.source)
    alert(this.destination)
    alert(this.date)
  }

}
