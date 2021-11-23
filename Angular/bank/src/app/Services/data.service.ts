import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any = {
    1000: { acno: 1000, uname: "sachi", password: "1000", balance: 5000 },
    1001: { acno: 1001, uname: "aswin", password: "1001", balance: 3000 },
    1002: { acno: 1002, uname: "akhil", password: "1002", balance: 8000 }
  }

  constructor() { }

  register(acno: any, uname: any, password: any) {
    let database = this.data
    if (acno in database) {
      return false
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      return true
    }
  }

  login(acno: any, pswd: any) {
    let database = this.data
    if (acno in database) {
      if (pswd == database[acno].password) {
        return true

      }
      else {
        alert("Invalid password")
        return false
      }
    }
    else {
      alert("Invalid Account number")
      return false
    }
  }

  credit(accno: any, pwd: any, amt: any) {
    var amount = parseInt(amt)
    let database = this.data
    if (accno in database) {
      if (pwd == database[accno].password) {
        database[accno].balance = database[accno].balance + amount
        return database[accno].balance
      }
      else {
        alert("Invalid Password")
      }
    }
    else {
      alert("Invalid Account number")
      return false
    }
  }

  debit(accno1: any, pwd1: any, amt1: any) {
    var amount = parseInt(amt1)
    let database = this.data
    if (accno1 in database) {
      if (pwd1 == database[accno1].password) {
        if (database[accno1].balance > amt1) {
          database[accno1].balance = database[accno1].balance - amount
          return database[accno1].balance
        }
        else{
          alert("Insufficient Fund")
        }
      }
      else {
        alert("invalid password")
      }
    }
    else {
      alert("Invalid Account number")
    }
  }

}

