import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9400/authenticate"

  constructor(private http:HttpClient,private cookies:CookieService) { }

  // api call to generate token
  generateToken(credentials:any){
    return this.http.post(`${this.url}`,credentials,{responseType : 'text' as 'json'});
  }



  loginUser(token){
    localStorage.setItem("token",token)
    this.cookies.set("token",token)
    
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token ==null || token==''){
      return false
    }
    return true

  }

  logout(){
    localStorage.removeItem("token")
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }
  extractDetailFromToken(){
    let token = localStorage.getItem("token")
    if(token!=null && token!=undefined && token!=''){
      return JSON.parse(atob(token.split('.')[1]))
    }

  }
}
