//notes from ScreenCast   jan 29 2014
// Parameters and Arguments

//calArea(30,20);

//function calArea(w,h){    //w=30 h=20
  //  var area= w * h;
  //  console.log(area);

// -------------------separate one-----adding parameters and auggments-------------

//function dogYears(){
    //var age =4;
    //var dogYears = age *7
   // console.log("Sparky is " + dogYears + " years old.")                ///First part before parameters are placed
//}

//dogYears();       // Calling it



/*/function dogYears(age){                                          //----------the AGE holds the parameters------
    var dogYears = age *5.5
    console.log("Sparky is " + dogYears + " years old.")
}

dogYears(6);       // Calling it        ------The 6 holds augments--------
dogYears(13);              // The input of 6, or 13, is the "PASS" or "PASSING"

                    //"We are Passing the vale 6 to age."
/*/

// Functions ---------------Returning Values----------------------

var total = calArea(30,20);

function calArea(w,h){                                      // This whole thing is a procedure, the other one
  var area = w * h;                                         //   without the RETURN and TOTAL is a function
  return area;      //spiting the function out
}
console.log(total);

