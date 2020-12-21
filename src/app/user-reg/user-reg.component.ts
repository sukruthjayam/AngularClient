import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { user } from 'src/user';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
obj:user;
  constructor(private log:LoginService) {
    this.obj =new user();
   }

  ngOnInit(): void {
  }
  register() {
    this.obj.confirmed="yes";
    this.obj.usertype="user";
    this.log.signup(this.obj).subscribe(
      res => {
     console.log(res);
     alert("registration successful");
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
