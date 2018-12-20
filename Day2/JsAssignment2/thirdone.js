var Amithabh={fname:"Amithabh",
lname:"Bachan",
age:52,
skils:['acting'],
Dob:new Date('1957-06-06'),
married:true,
profession:"Acting",
address:{ city:"Mumbai",pincode:400074}};
console.log("Amithabh Details:\n",Amithabh);
console.log("\n");
var Abhishek=Object.create(Amithabh);
Abhishek.fname="Abhishek",
Abhishek.age=37,
Abhishek.skils=['Drawing','face recognization'],
Abhishek.Dob=new Date('1987-06-09'),
Abhishek.married=true;
console.log("Abhishek Details:\n",Abhishek);
console.log("lname:",Abhishek.lname);
console.log("profession:",Abhishek.profession);
console.log("address:",Abhishek.address);
console.log("\n");
var Aaradhya=Object.create(Abhishek);
Aaradhya.fname="Aaradhya",
Aaradhya.age=10,
Aaradhya.skils=['dancing'],
Aaradhya.Dob=new Date('2008-06-09'),
Aaradhya.married=false;
console.log("Aaradhya Details:\n",Aaradhya);
console.log("lname:",Aaradhya.lname);
console.log("profession:",Aaradhya.profession);
console.log("address:",Aaradhya.address);
   
  
  
   
    
