import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fb-jason',
  templateUrl: './fb-jason.component.html',
  styleUrls: ['./fb-jason.component.css'],
})
export class FbJasonComponent implements OnInit {
  aim = 'Connecting the world';

  facebk = '24*7';

  eventUsername = '';

  eventpwd = '';

  database: any = {
    basil: { uname: 'basil', pswd: 1000 },
    ashwin: { uname: 'ashwin', pswd: 1000 },
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nameChange(event: any) {
    //event Binding(argument)
    this.eventUsername = event.target.value;
  }

  pwdChange(event: any) {
    //event Binding(argument)
    this.eventpwd = event.target.value;
  }

  logIn() {
    var user = this.eventUsername;
    var pwd = this.eventpwd;
    let db = this.database;
    if (user in db) {
      if (pwd == db[user].pswd) {
        alert('login success');
        this.router.navigateByUrl('userhome');
      } else {
        alert('invalid password');
      }
    } else {
      alert('Invalid User');
    }
  }

  register(){
    this.router.navigateByUrl('register')
  }
}
