import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { company } from 'src/company';

@Component({
  selector: 'app-comp-match',
  templateUrl: './comp-match.component.html',
  styleUrls: ['./comp-match.component.css']
})
export class CompMatchComponent implements OnInit {
pattern:string;
visible:boolean;
obj:any=[];
  constructor(private comp:CompanyService) {
    this.pattern=null;
   }

  ngOnInit(): void {
  }
search(){
this.comp.matchcompany(this.pattern).subscribe(
res=>{
  this.obj=res;
  this.visible=true;
  console.log(this.obj);
},
err=>{
  alert("No company found");
  this.visible=false;
  console.log(err);
}

);
}
}
