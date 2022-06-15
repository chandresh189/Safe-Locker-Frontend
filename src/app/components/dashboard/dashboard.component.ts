import { Component, OnInit } from '@angular/core';
import { LockService } from 'src/app/services/lock.service';
import { LoginService } from 'src/app/services/login.service';
import { OtpService } from 'src/app/services/otp.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private userService:UserService,private loginService:LoginService,private lockSerive:LockService,private otpService:OtpService) { }
  user:any;
  ngOnInit(): void {
  }
  
  
  test:any;
  credentials={
    secretCode:'',
    otp:''
  }
  recievedOtp:string;
  buttonDisable=true;
  getEyePattern(){
    if(this.recievedOtp == "5498"){
      this.userService.getUser(this.credentials.secretCode).subscribe(
        user=>{
          const obj = JSON.parse(user.toString());
          this.user=obj;
          this.buttonDisable=false
        },
        error=>{
          console.log(error);
        }
        
      )
    }
    
  }
  // false - lock
  // true - open
  lockStatus:boolean = true;
  open(){
    this.lockSerive.callApi("on");
    this.lockStatus=false
  }

  close(){
    this.lockSerive.callApi("off");
    this.lockStatus=true
  }



  sendOtp(){
    this.recievedOtp="5498";
  }
}
