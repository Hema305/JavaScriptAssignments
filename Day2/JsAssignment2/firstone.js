var person1={fname:"balakrishna",
lname:"Motupalli",
age:52,
skils:['elevtrician','mechanic'],
Dob:new Date('1957-06-06'),
married:true,
profession:"Wall Operator",
address:{ city:"Nellore",pincode:524004}};
var person2={fname:"Hemalatha",
lname:"Motupalli",
age:22,
skils:['Drawing','face recognization'],
Dob:new Date('1997-06-09'),
married:false,
profession:"Software Engineer",
address:{ city:"Nellore",pincode:524004}};
print=function()
{
    console.log("Person1 Details:\n",person1);
    console.log("Person2 Details:\n",person2);
    
}
print();  