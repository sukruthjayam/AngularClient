import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-view-ipo',
  templateUrl: './view-ipo.component.html',
  styleUrls: ['./view-ipo.component.css']
})
export class ViewIPOComponent implements OnInit {
  ipos:any=[];
  filipo:any=[];
  constructor(private ps: CompanyService) {
 
   }

  ngOnInit(): void {
    this.ps.AllIPO().subscribe(
      data => {
        this.ipos.forEach(element => {
          if(element.open_time>Date.now()){
this.filipo.add(element);
          }
        });
        console.log(this.filipo);
this.ipos=data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
