import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { IPO } from 'src/IPO';

@Component({
  selector: 'app-upd-ipo',
  templateUrl: './upd-ipo.component.html',
  styleUrls: ['./upd-ipo.component.css']
})
export class UpdIPOComponent implements OnInit {
cname:string;
visible:boolean=false;
obj:any;
ipos:any=[];
  constructor(private ps: CompanyService) {
    this.obj=new IPO();
   }

  ngOnInit(): void {
    this.AllIpo();
  }

  AllIpo(){
    this.ps.AllIPO().subscribe(
      data => {
this.ipos=data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

  }
  getipo(){
    
   
    this.ps.getIPO(this.cname).subscribe(
      data => {
        this.visible=true;
this.obj=data;
        console.log(data);
      },
      err => {
        alert("IPO not Found");
        console.log(err);
      }
    );
  }

  update(){
    this.visible=false;
    this.ps.updateIPO(this.obj).subscribe();
    alert("update successful");
    this.AllIpo();
}
}