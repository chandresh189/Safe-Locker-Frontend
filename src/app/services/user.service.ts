import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:9400/"
  constructor(private http:HttpClient,private loginService:LoginService) { }

  getUser(secretCode){
   let data = this.loginService.extractDetailFromToken();
   let username = data.sub;
   console.log(username)

    return this.http.get(this.url+"getUser/"+username +"/" +secretCode ,{responseType:'text' as 'json'});
  }

  saveUser(user:any){
    console.log(user.username)
    return this.http.post("http://localhost:9400/saveUser",user);
  }
}
