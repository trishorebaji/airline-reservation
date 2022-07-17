import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  handleClickSubmit(){
    if(this.firstName !== '' && this.lastName !== ''){
      
    }

  }
  modelChangeFn(event:any) {
    this.firstName = event;
  }
}
