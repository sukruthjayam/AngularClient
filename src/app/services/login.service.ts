import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url:string="http://localhost:59494/api/Login";
  constructor(private http: HttpClient) { }

  login(uname:string,pass:string){

   return  this.http.get(this.url+"/"+uname+"/"+pass);
  }
signup(us:user){
  
  return this.http.post(this.url,us);
}
update(us:user){
  
  return this.http.put(this.url,us);
}
getuser(id:number){
return this.http.get(this.url+"/"+id);
}

}
