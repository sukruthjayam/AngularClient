import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { stock } from 'src/stock';
import { SectorService } from '../services/sector.service';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  obj: stock;
  
  constructor(private ps: StockService) {
    this.obj = new stock();
  }

  ngOnInit(): void {
    
  }
  save() {
    console.log(this.obj);
    this.ps.savestockExc(this.obj).subscribe(
      data => {
        alert('Saved successfully');
      },
      err => {
        alert('Error saving');
        console.log(err);
      }
    );
  }

}
