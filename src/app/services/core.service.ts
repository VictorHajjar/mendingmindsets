import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { throwError } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
settings: any;

 getHeader() : HttpHeaders {
   let header: HttpHeaders= new HttpHeaders();
   header = header.set("Content-Type", "application/json" );
   header = header.set("Authorization", `Bearer ${window.localStorage.getItem("Auth-Token")}`);
   return header;

  }


  formHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(private http: HttpClient) {
    
  }

  postHeader(path:string,body:any):Observable<any>{
   let header:HttpHeaders= new HttpHeaders();
   header = header.set("Content-Type", "application/json" );
  // header = header.set("Authorization", `Bearer ${window.localStorage.getItem("token")}`);
   return this.http.post(path, body, { headers:header });
  }


  get(path: string): Observable<any> {
    let headers:HttpHeaders = this.getHeader();
    return this.http.get(path, { headers: headers });
  }

  
  post(path: string, body:any): Observable<any> {
    let headers:HttpHeaders = this.getHeader();
    return this.http.post(path, body, { headers:headers });
  }



  delete(path: string) : Observable<any> {
    return this.http.delete(path, { headers: this.getHeader() });
  }

   patch(path: string, body:any): Observable<any> {
    return this.http.patch(path, JSON.stringify(body), { headers: this.getHeader() });
	}
}
