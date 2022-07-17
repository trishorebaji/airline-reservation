import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isTypeOfPage: string | undefined
  @Input() type = 'land'
 
  constructor(public router: Router) { }

  ngOnInit(): void {
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
