import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.credentials.username==null || this.credentials.username=='') {
      Swal.fire({
        title: 'Please Enter User Name',
        icon: 'warning'
      })
    } else if(this.credentials.password==null || this.credentials.password=='') {
      Swal.fire({
        title: 'Please Enter Valid Password',
        icon: 'error'
      })
    } 
    if((this.credentials.username!='' && this.credentials.password !='') && (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("call api")
      this.loginService.generateToken(this.credentials).subscribe(
        response=>{
          console.log(response)
          this.loginService.loginUser(response)
          window.location.href="/dashboard"
        },
        error=>{
          Swal.fire({
            title: 'Something Went Wrong',
            icon: 'error'
          })
          console.log(error)
        }
      )
    }else{
      console.log("Fields are empty")
    }
  }
}
