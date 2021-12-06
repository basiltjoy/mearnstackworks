database = {
  1000: {
    acno: 1000,
    uname: "sachi",
    password: "1000",
    balance: 5000,
    transaction: [],
  },
  1001: {
    acno: 1001,
    uname: "aswin",
    password: "1001",
    balance: 3000,
    transaction: [],
  },
  1002: {
    acno: 1002,
    uname: "akhil",
    password: "1002",
    balance: 8000,
    transaction: [],
  },
};

const register = (acno, uname, password) => {
  //  let database = this.data;
  if (acno in database) {
    return {
      status: false,
      statusCode: 401,
      message: "account already exist",
    };
  } else {
    database[acno] = {
      acno,
      uname,
      password,
      balance: 0,
      transaction: [],
    };

    return {
      status: true,
      statusCode: 200,
      message: "account created",
    };
  }
};

const login = (acno, pswd) => {
  // let database = this.data;
  if (acno in database) {
    if (pswd == database[acno].password) {
      /*
        this.currentUser = database[acno].uname;
  
        this.currentAcno = acno;  */
      return {
        status: true,
        statusCode: 200,
        message: "Login successful",
      };
    } else {
      return {
        status: false,
        statusCode: 401,
        message: "Invalid password",
      };
    }
  } else {
    return {
      status: false,
      statusCode: 401,
      message: "Acccount not found",
    };
  }
};

module.exports = {
  register,
  login,
};
