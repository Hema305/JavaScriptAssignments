//parent class

class BankAccount{
    
    constructor(accountNumber,accountHolderName,accountBalance)
    {
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }
    deposit(amount){
        this.accountBalance+=amount;
    }
    getCurrentBalance()
    {
        console.log("Balance in BankAccount:",this.accountBalance);
    }
}
var BankAccountObject =new BankAccount(123456,"Hema",50000);
BankAccountObject.deposit(5000);
BankAccountObject.getCurrentBalance();

//saving class

class Savings extends BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance,isSalary){
        super(accountNumber,accountHolderName,accountBalance);
        this.isSalary=isSalary;
    }
    withdraw(amount)
    {
        if(this.accountBalance>=amount)
        {
            this.accountBalance-=amount;
        }
                
        else
        {
            console.log("Insufficient Funds");
         }
                
         
    }
    getCurrentBalance()
    {
        console.log("Remaining balance Savings account:",this.accountBalance);
    }
    
}
var savingsObject =new Savings(123456,"Hema",50000,true);
savingsObject.withdraw(5000);
savingsObject.getCurrentBalance();

//current class

class Current extends BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance,odLimit){
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit=odLimit;
    }
    withdraw(amount)
    {
        var limit=parseInt(this.accountBalance+this.odLimit);
        if(limit>=amount)
        {
            this.accountBalance-=amount;
        }
                
        else
        {
            console.log("Insufficient Funds");
        }
                
         
    }
    getCurrentBalance()
    {
        console.log("Remaining balance current account",this.accountBalance);
    }

}
var currentObject=new Current(123456,"Hema",50000,100);
currentObject.withdraw(12000);
currentObject.getCurrentBalance();

