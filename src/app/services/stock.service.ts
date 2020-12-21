import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stock } from 'src/stock';
@Injectable({
  providedIn: 'root'
})
export class StockService {
private url :string="http://localhost:54473/api/Stockservice/StockExchange";

  constructor(private http: HttpClient) { }

getStockExc(){

  return this.http.get(this.url);
 
}

savestockExc(st:stock){
  return this.http.post(this.url,st);
}


}
