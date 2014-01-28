//created by Jeremy Suika on jan 23 2014


// conditionals_industry



//I don't know the ins and outs of the industry, and the terms, I am using a example of buying a second moniter for displaying coding better.
                    // Someone told me to save up for one, makes coding easier.

// I am doing tenary operators for this conditional operation-

//"If I make enough money from freelance jobs and don't go over my monthly expenses, I can get the second moniter for $1200.00

alert("If I make enough money from freelance jobs building websites, and have money left over from my expenses, I can get a $1,200 moniter");

var job=prompt("How much money did I earn doing freelance jobs for people?  (do not put $)");  //Income make from freelance internet jobs

var expen=prompt("How much was my bills this month?  (do not put $)");  //expenses for the month. Expressed from the prompt

var moniter=1200;   // the price of the second moniter I want.



/*if ((job-expen)>moniter){                               //tested this, it works with just IF statement. --If the amount left over from my job and expenses
    console.log("I can get the 2nd moniter");           //                                                 -is over $1200 the console prompt comes up.
}else{
    console.log("I can't get a 2nd moniter")            //tested this, adding the else command. comes up if the statement is false.
}
*/

    ((job-expen) > moniter) ? console.log("I can get the 2nd moniter") :  console.log("I can't get a 2nd moniter")   //this is using the Ternary Operations for the
                                                                                                                           //above statement which I blacked out, tested and works



