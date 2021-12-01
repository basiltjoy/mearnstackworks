import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser: any;

  currentAcno: any;

  data: any = {
    1000: {
      acno: 1000,
      uname: 'sachi',
      password: '1000',
      balance: 5000,
      transaction: []
    },
    1001: {
      acno: 1001,
      uname: 'aswin',
      password: '1001',
      balance: 3000,
      transaction: []
    },
    1002: {
      acno: 1002,
      uname: 'akhil',
      password: '1002',
      balance: 8000,
      transaction: []
    },
  };

  constructor() {
    this.getDetails();
  }

  register(acno: any, uname: any, password: any) {
    let database = this.data;
    if (acno in database) {
      return false;
    } else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction: [],
      };
      this.saveDetails();
      return true;
    }
  }

  login(acno: any, pswd: any) {
    let database = this.data;
    if (acno in database) {
      if (pswd == database[acno].password) {
        this.currentUser = database[acno].uname;

        this.currentAcno = acno;

        this.saveDetails();
        return true;
      } else {
        alert('Invalid password');
        window.location.reload();
        return false;
      }
    } else {
      alert('Invalid Account number');
      window.location.reload();
      return false;
    }
  }

  credit(accno: any, pwd: any, amt: any) {
    var amount = parseInt(amt);
    let database = this.data;
    if (accno in database) {
      if (pwd == database[accno].password) {
        database[accno].balance = database[accno].balance + amount;

        database[accno]['transaction'].push({
          amount: amount,
          type: 'credit',
        });

        this.saveDetails();
        return database[accno].balance;
      } else {
        alert('Invalid Password');
        window.location.reload();
      }
    } else {
      alert('Invalid Account number');
      window.location.reload();
      return false;
    }
  }

  debit(accno1: any, pwd1: any, amt1: any) {
    var amount = parseInt(amt1);
    let database = this.data;
    if (accno1 in database) {
      if (pwd1 == database[accno1].password) {
        if (database[accno1].balance > amt1) {
          database[accno1].balance = database[accno1].balance - amount;

          database[accno1]['transaction'].push({
            amount: amount,
            type: 'debit',
          });

          this.saveDetails();
          return database[accno1].balance;
        } else {
          alert('Insufficient Fund');
          window.location.reload();
        }
      } else {
        alert('invalid password');
        window.location.reload();
      }
    } else {
      alert('Invalid Account number');
      window.location.reload();
    }
  }

  saveDetails() {
    if (this.data) {
      localStorage.setItem('acno', JSON.stringify(this.data));
    }
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  }

  getDetails() {
    if (localStorage.getItem('acno')) {
      this.data = JSON.parse(localStorage.getItem('acno') || '');
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    }
  }

  getTransaction(acno: any) {
    return this.data[acno]["transaction"]
  }
}
