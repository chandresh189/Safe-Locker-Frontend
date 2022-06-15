import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  credentials={
    username:'',
    password:'',
    email:'',
    eyePattern:'',
    secretCode:'',
  }
  
  onSubmit(){
    if(this.credentials.username==null || this.credentials.username=='') {
      Swal.fire({
        title: 'Please Enter User Name',
        icon: 'warning'
      })
    } else if(this.credentials.email==null || this.credentials.email=='') {
      Swal.fire({
        title: 'Please Enter Email',
        icon: 'warning'
      })
    } else if(this.credentials.password==null || this.credentials.password=='') {
      Swal.fire({
        title: 'Please Enter Password',
        icon: 'warning'
      })
    } else if(this.credentials.eyePattern==null || this.credentials.eyePattern=='') {
      Swal.fire({
        title: 'Please Enter Eyepattern',
        icon: 'warning'
      })
    } else if(this.credentials.secretCode==null || this.credentials.secretCode=='') {
      Swal.fire({
        title: 'Please Enter Password',
        icon: 'warning'
      })
    }
    if(this.credentials.username!=null && this.credentials.username!='' && this.credentials.password!=null && this.credentials.password!='' && this.credentials.email!='' &&this.credentials.email!=null){
      console.log("hihihihih")
      this.userService.saveUser(this.credentials).subscribe(
        response=>{
          console.log(response)
          this.router.navigate(['login'])
        }
      );
    }
    
  }
}
