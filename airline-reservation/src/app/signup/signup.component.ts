import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName = '';
  lastName=''
  email=''
  password=''
  confirmPassword='' 
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login'])

  }
  handleClickSubmit(){
    if(this.firstName !== '' && this.lastName !== ''){
      
    }

  }
  modelChangeFn(event:any) {
    this.firstName = event;
  }
}
