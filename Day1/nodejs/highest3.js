function highest_number() {
               
    var first_number = 5;
    var second_number = 15;
    var third_number=10;
    var temp;
    if(first_number>second_number && first_number>third_number)
        temp=first_number;
    else if(second_number>first_number && second_number>third_number)
        temp=second_number;
    else
        temp=third_number;

    console.log(temp);
}
 highest_number()