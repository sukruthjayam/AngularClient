import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { company } from 'src/company';
import { comid } from 'src/comid';
import { IPO } from 'src/IPO';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url :string="http://localhost:54473/api/Companyservice/Company";
  private ipourl :string="http://localhost:54473/api/Companyservice/IPO";
  constructor(private http: HttpClient) { }

savecompany(com:company){
  return this.http.post(this.url,com);
}
 getcompany(id:number){

return this.http.get(this.url+'/'+id);
}
matchcompany(pattr:string){

  return this.http.get(this.url+'/srchcomp/'+pattr);

}
getcompanies(){

  return this.http.get(this.url);
}
updatecompany(com:comid){

  return this.http.put(this.url,com);
}
deletecompany(id:number){
  
  return this.http.delete(this.url+'/'+id);
  }

  getIPO(cname:string){

    return this.http.get(this.ipourl+'/'+cname);
    }

    updateIPO(uipo:IPO){

      return this.http.put(this.ipourl,uipo);
    }
    AllIPO(){
      return this.http.get(this.ipourl);
    }
}