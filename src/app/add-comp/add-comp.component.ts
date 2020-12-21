import { Component, OnInit } from '@angular/core';
import { company } from 'src/company';
import { CompanyService } from '../services/company.service';
import { SectorService } from '../services/sector.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  obj: company;
  sectors:any=[];
  stocks:any=[];
  constructor(private ps: CompanyService,private ss: SectorService,private sto: StockService) {
    this.obj = new company();
  }

  ngOnInit(): void {
    this.ss.getsectors().subscribe(
      data => {
        console.log(data);
       this.sectors=data;
      },
      err => {
        alert('Error');
        console.log(err);
      }
    );
    this.sto.getStockExc().subscribe(
      data => {
        console.log(data);
       this.stocks=data;
      },
      err => {
        alert('Error saving');
        console.log(err);
      }
    );
  }
  save() {
    console.log(this.obj);
    this.ps.savecompany(this.obj).subscribe(
      data => {
        alert('Saved successfully');
     
        window.location.reload();
      },
      err => {
        alert('Saved successfully');
        console.log(err);
      }
    );
  }
}
