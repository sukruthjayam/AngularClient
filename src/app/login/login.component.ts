import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { JWTokenService } from '../jwtoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string=null;
pass:string=null;
  constructor(private auth: LoginService,
    private router: Router,private jwt:JWTokenService) { }

  ngOnInit(): void {
  }
  doLogin() {
    this.auth.login(this.uname, this.pass).subscribe(
      res => {
      this.jwt.saveToken(res);
      this.jwt.isAuthenticated=true;
      this.router.navigateByUrl('/menu');
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
}
