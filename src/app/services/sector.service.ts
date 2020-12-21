import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private url :string="http://localhost:54473/api/SectorService/SectorList";

  constructor(private http: HttpClient) { }

getsectors(){

  return this.http.get(this.url);
 
}


}
