var Amithabh={fname:"Amithabh",
lname:"Bachan",
age:52,
skils:['acting'],
Dob:new Date('1957-06-06'),
married:true,
profession:"Acting",
address:{ city:"Mumbai",pincode:400074}};
var Abhishek=Object.create(Amithabh);
Abhishek.fname="Abhishek",
Abhishek.age=37,
Abhishek.skils=['Drawing','face recognization'],
Abhishek.Dob=new Date('1987-06-09'),
Abhishek.married=true;

print=function()
{
   
    console.log("Person1 Details:\n",Amithabh);
    console.log("Person2 Details:\n",Abhishek);
    console.log("lname:",Abhishek.lname);
    console.log("profession:",Abhishek.profession);
    console.log("address:",Abhishek.address);
    

}
print();  