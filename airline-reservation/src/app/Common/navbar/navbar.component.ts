import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isTypeOfPage: string | undefined
  type = 'land'
  log='Out'
  currentUser:any;
  @Input() userCheck: string| undefined
  userType="work"
  constructor(public router: Router) { }
  
  ngOnInit(): void {
    const user:any = localStorage.getItem('currentUser');
    this.currentUser=JSON.parse(user);
  }

  login(){
    this.router.navigate(['/login'])
  }
  signup(){
    this.router.navigate(['/signup'])
  }
  logout(){
    this.router.navigate([''])
  }


}
