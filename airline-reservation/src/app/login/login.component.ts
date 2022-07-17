import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password ='';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  signUp(){
    this.router.navigate(['/signup'])

  }
  handleClickLogin(){
    alert(this.email)
    alert(this.password)
  }
  modelChangeEmail(event:any) {
    this.email = event;
  }
  modelChangePassword(event:any) {
    this.password = event;
  }


}
