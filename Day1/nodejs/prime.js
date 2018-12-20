function prime()
{
    var number=12;
    var i=1;
    var count=0;
    for(i=2;i<number;i++)
    {
        if(number%2==0)
            count++;
        
    }
    if(count>0)
        console.log("not prime");
    else    
        console.log("prime");
   
}
prime()