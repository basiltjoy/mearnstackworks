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
}

