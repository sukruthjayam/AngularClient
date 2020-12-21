import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
stocks:any=[];
  constructor(private ps: StockService) { }

  ngOnInit(): void {
    this.ps.getStockExc().subscribe(
      data => {
        this.stocks=data;
        console.log(data);
       console.log(this.stocks);
      },
      err => {
        console.log(err);
      }
    );
  }

}
