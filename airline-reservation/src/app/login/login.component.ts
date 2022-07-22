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
  userData:any;
  registeredUser: any;
  constructor(public router: Router,private loginService:LoginserviceService) { }

  ngOnInit(): void {
    this.loginService.getLoginDetails().subscribe((result)=>{
      console.log("result",result)
      this.userData=result;

    })
  }
  signUp(){
    this.router.navigate(['/signup'])

  }
  handleClickLogin(){
    
    if(this.email!=="" && this.password!==""){
      this.registeredUser = this.userData.find((user: { userEmail: any; }) => user.userEmail === this.email)
      localStorage.setItem('currentUser',JSON.stringify(this.registeredUser))
      if(this.registeredUser!=undefined){
        if(this.registeredUser.userPassword===this.password){
            this.router.navigate(['/user-dashboard'])
        }
        else{
          alert("password is not correct")
        }
      }
      else{
        alert("email is Incorrect")
      }

      
    }else{
      alert("please enter login details")
    }

  }
  modelChangeEmail(event:any) {
    this.email = event;

  }
  modelChangePassword(event:any) {
    this.password = event;
  }


}
