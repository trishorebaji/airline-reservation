import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password ='';
  constructor(public router: Router,private loginService:LoginserviceService) { }

  ngOnInit(): void {
  }
  signUp(){
    this.router.navigate(['/signup'])

  }
  handleClickLogin(){
    if(this.email!=="" && this.password!==""){
      let res = this.loginService.loginService({email:this.email,password:this.password})
      if(res){
        this.router.navigate(["user-dashboard"])
      }
      else {
        alert('login details incorrect')
      }
      
    }else{
      alert("please enter logim details")
    }

  }
  modelChangeEmail(event:any) {
    this.email = event;
  }
  modelChangePassword(event:any) {
    this.password = event;
  }


}
