import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LockService {

  private url1: string = "http://192.168.43.60/4";
  private url2: string = "http://192.168.43.60/5";

  constructor(private http: HttpClient) { }

  callFirstApi(state:string){
    return this.http.get(this.url1 + "/" +state)
    .subscribe((data) => console.log(data)
    );
  }

  callSecondApi(state:string){
    return this.http.get(this.url2 + "/" +state)
    .subscribe((data) => console.log(data)
    );
  }

  callApi(state: string) {
    this.callFirstApi(state)
    this.callSecondApi(state)
  }
}
