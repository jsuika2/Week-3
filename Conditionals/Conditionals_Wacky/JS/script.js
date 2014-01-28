//created by Jeremy Suika on jan 22 2014


// Condition: If my son Carter reads three or more books he can watch a movie + he is not fussy he can watch a movie.

//          but if he cleans his room he can still watch that movie. I will use a ELSE If in the condition and use the && and <= function



alert("Carter can watch a movie if he reads at least 3 books and is not fussy today.");  //to display the conditions and the story


var booksRead=prompt("How many books did Carter read today?","");     //This variable is to show exactly how many books Carter read, the answer will be in a prompt
var minBooksRead=3;                                                   // This variable represents the # of books Carter must read, its 3, and does not change.

var fussyBoy=prompt("Was Carter fussy today? (yes or no)","");        //If he is "fussy"? which will be asked in a yes or no Prompt. Anything other then "NO" will result in a FALSE statement in the conditional part.

alert("If he does not read at least 3 books or is fussy, he can watch a movie ONLY if he cleans up his room.") //this alert is to mention the ELSE IF condition, if he does this action, he still gets a movie.


var cleanUp=prompt("Did Carter clean up his room? (yes or no)","");   //If he cleans up his room, which will be asked in a yes or no Prompt.



if(booksRead >=minBooksRead && fussyBoy=="no"){     //If the amount of books read is greater then the min, which is 3 then its true and "you can watch a movie. ---
    console.log("You can watch a movie, Carter.");                //---PLUS a Logical Operations &&, as both "books" and "fussy boy" have to true to be right; all or nothing to be true.

                                                    // The prompt "you can watch a movie if he reads and is NOT fussy.
}else if(cleanUp=="yes")                            // The "Else if Condition" is used if Carter cleans, then a differnt outcome is displayed in the console.
    console.log("Since you cleaned your room you can still watch a movie, even though you did not read and were fussy.") //the display in the console, if the ELSE IF codition is true.
else{
    console.log("Sorry Carter, no movie today");    //The end result of the condition if he 1. does not read min books. 2. He is fussy. 3. did not clean room;

}
