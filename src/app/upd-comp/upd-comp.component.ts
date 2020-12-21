import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { company } from 'src/company';
import { SectorService } from '../services/sector.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-upd-comp',
  templateUrl: './upd-comp.component.html',
  styleUrls: ['./upd-comp.component.css']
})
export class UpdCompComponent implements OnInit {

  obj:any=null;
  companies:any=[];
  id:number;
  visible:boolean=false;
  sectors:any=[];
  stocks:any=[];
  constructor(private ps: CompanyService,private ss: SectorService,private sto: StockService) {
    this.obj=new company();
    this.id=null;
   }

  ngOnInit(): void {
   this.AllComp();
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

  AllComp(){
    this.ps.getcompanies().subscribe(
      data => {
this.companies=data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

  }
  getcom(){
    this.ps.getcompany(this.id).subscribe(
      data => {
        this.obj=data;
        console.log(data);
        console.log("company found");
        this.visible=true;
      },
      err => {
        alert("company not found");
        console.log("company not found");
        console.log(err);
      }
    );
  }

  delgetComp(){
    this.ps.getcompany(this.id).subscribe(
      data => {
        this.obj=data;
        console.log(data);
        console.log("company found");
        this.delete();
        window.location.reload();
      },
      err => {
        alert("company not found");
        console.log("company not found");
        console.log(err);
      }
    );
  }
delete(){

    this.ps.deletecompany(this.id).subscribe(
      data => {
        alert("Deleted Successfully");
        this.AllComp();
        console.log(data);
        console.log("company found");
      },
      err => {
       
        console.log("company not found");
        console.log(err);
       
      }
    );
   
  }

update(){
 
  this.id=null;
 this.visible=false;
  this.ps.updatecompany(this.obj).subscribe( );
  alert("update successful");
 window.location.reload();
}

}
