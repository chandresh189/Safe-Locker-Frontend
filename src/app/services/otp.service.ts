import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  url ="http://localhost:9400/sendOtp/"
  constructor(private http:HttpClient) { }

  sendOtp(username:string){
    
    return 5498;
  }
}
