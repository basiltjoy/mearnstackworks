
class Bank{
    regAccount(){
       let accname=nname.value
       let accnum=Pnumber.value
       let pcode=Pcode.value
       console.log(accname,accnum,pcode);
       swal("Good job!", "You clicked the button!", "success");
    }
   
}
var bank=new Bank()
bank.regAccount()