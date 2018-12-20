var accontNumber;
var accountHolderName;
var accountBalance;
var isSalary;
function savings(accontNumber,accountHolderName,accountBalance,salary)
{
    
        function withdraw(amount)
        {
            if(accountBalance>=amount)
                accountBalance-=amount;
            else
                console.log("Insufficient Funds");
            
        }
        savings.withdraw=withdraw;
        function getCurrentBalance()
        {
            console.log("Remaining balance Savings account:",accountBalance);
        }
        savings.getCurrentBalance=getCurrentBalance;
    
}

function current(accontNumber,accountHolderName,accountBalance,odLimit)
{

     function withdraw(amount)
    {
        if(accountBalance+odLimit>amount)
              accountBalance-=amount;
        else
            console.log("Insufficient Funds");
       
         
    }
    current.withdraw=withdraw;
    function getCurrentBalance()
    {
        console.log("Remaining balance current account",accountBalance);
    }
    current.getCurrentBalance=getCurrentBalance;
}
savings(123456,"hema",50000,true);
savings.withdraw(20000);
savings.getCurrentBalance();
current(123456,"hema",60000,40000);
current.withdraw(40000);
current.getCurrentBalance();