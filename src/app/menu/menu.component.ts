import { Component, OnInit } from '@angular/core';
import { JWTokenService } from '../jwtoken.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  uname:string=null;
  pass:string=null;
  visible:boolean=true;
  constructor(public token: JWTokenService, private router: Router,private auth: LoginService) { }
isLogged:boolean=false;
  ngOnInit(): void {

  }
  doLogin() {
    this.auth.login(this.uname, this.pass).subscribe(
      res => {
        alert("successfully logged in");
     this.visible=false;
      },
      err => {
        console.log(err);
       
        if (err.status === 400) {
          alert('Invalid username/password');
        }
        else {
          alert('Error logging in');
        }
      }
    );
  }
  logout(){
    this.visible=true;
  }

}
