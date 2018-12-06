function  Temp_C()  {
               
    var Temp_F = document.getElementById("Text1").value;
    if (Temp_F.length < 1)
     {
        window.alert("field is blank");
        return false;
    }
    else if(isNaN(Temp_F))
    {
        window.alert("Enter Numeric Values only");
        return false;
    } 
    var result = (Temp_F - 32 )*(5/9);
     
 document.getElementById("txtresult").value = result;
  
}
