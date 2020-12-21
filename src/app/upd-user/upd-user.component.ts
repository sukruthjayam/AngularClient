import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { user } from 'src/user';

@Component({
  selector: 'app-upd-user',
  templateUrl: './upd-user.component.html',
  styleUrls: ['./upd-user.component.css']
})
export class UpdUserComponent implements OnInit {
obj:any;
  constructor(private login:LoginService) { 
    this.obj=new user();
  }

  ngOnInit(): void {
    this.login.getuser(3).subscribe(
      data => {
        this.obj=data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

update(){
  this.login.update(this.obj).subscribe(
    data => {
      console.log(data);
      alert("update successful");
    },
    err => {
      console.log(err);
    }
  );

}

}
