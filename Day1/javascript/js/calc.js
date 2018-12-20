
   function calc(){
    var Number = prompt("enter \n1.Add\n2.Sub\n3.Mul\n4.Div\n5.Exp\n6.Mean\n7.Quit:");
  
    switch(Number)
     {
       case "1":

            var Number1 = prompt("enter num1\n");
            var Number2 = prompt("enter num2\n");
            var result = parseInt(Number1)+parseInt(Number2);
            document.getElementById("txtresult").value = result;
            break;
       case "2":

            var Number1 = prompt("enter num1\n");
            var Number2 = prompt("enter num2\n");
            var result = 10;
            var result = parseInt(Number1)-parseInt(Number2);
            document.getElementById("txtresult").value = result;
            break;
       case "3":

            var Number1 = prompt("enter num1\n");
            var Number2 = prompt("enter num2\n");
            var result = parseInt(Number1)*parseInt(Number2);
            document.getElementById("txtresult").value = result;
            
            break;
       case "4":

            var Number1 = prompt("enter num1\n");
            var Number2 = prompt("enter num2\n");
            var result = parseInt(Number1)/parseInt(Number2);
            document.getElementById("txtresult").value = result;
          
            break;
        case "5":

            var Number1 = prompt("enter base\n");
            var Number2 = prompt("enter exponent\n");
            var result = Math.pow(parseInt(Number1),parseInt(Number2));
            document.getElementById("txtresult").value = result;
           
            break;
        case "6":
        var Number1 = prompt("enter series:\n");
            while(Number1!="***")
            {
                var sum=0,count=0;
                 sum=sum+parseInt(Number1);
                 count++;
                var Number1 = prompt("enter series:\n");
            }
            var  result=sum/parseInt(count);
            document.getElementById("txtresult").value = result;
            break;
         case "7":
           
         
            break;
        
        default:

            window.alert("Select again");
    }

  
  
}
  

