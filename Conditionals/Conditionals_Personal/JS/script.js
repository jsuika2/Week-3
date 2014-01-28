//created by Jeremy Suika on jan 23 2014
//conditionals_personal

//If I sell 10 or more cars I get a $1,000 bonus. So the bonus is conditional on the displayed PROMPTS being > 10 cars.
// the console will display if I make a bonus and exactly how much I make for the cars sold.



alert("You get a bonus for selling 10+ cars each month...."); //The alert to signify exactly what you have to do to get get a bonus

var amountCarsSold=prompt("How many cars did you sell this month",""); //Once you type how many cars sold it will car over to the conditionals and the math for totaling in the equation;

var bonus=1000;  //The amount for the bonus,        -I put the $ sign in the console prompts as you cannot * $1000 but you can * 1000, eliminated special character


alert("If you have experience selling cars, you get $100 a car sold, if no experience, $75 a car sold")  //this states how much you can make per car,$75 for lack of experience, and 100 for experience



var eachCar=prompt("How much money do you make per car? (express without $)","")   //input a amount you make per unit (unit = car)



if(amountCarsSold >=10){                                 //the  prompt from above will be greater or equal to 10 to get a bonus
    console.log("Bonus of "+"$"+bonus+" plus you get $"+(eachCar * amountCarsSold)+ " for each car sold");  //this one took some time, but explains-
}else{                                                                                                       //- the console message of achieving bonus
    console.log("No bonus this month, only "+"$"+eachCar * amountCarsSold);   //The else option, if the statement above is FALSE, you get no bonus.
}