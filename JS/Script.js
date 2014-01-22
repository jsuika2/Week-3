-//conditional logic   done on jan 21
    +//conditional logic if else                    done on jan 21


        - var kidHeight =47;
+ var kidHeight =52;
var midHeight =48;
+ var wParentHeight =45;                                                                     //height of the kid and parent
//if child is old enough, print to the console

if(kidHeight > midHeight){                                                                                //If the kid is over 48 inches in height
    @@ -12,8 +13,11 @@ if(kidHeight > midHeight){

    }

    -else{
        +else if(kidHeight > wParentHeight){
            +    console.log("You can ride but only with a parent");
            +}else{
            console.log("Sorry kid you got some growing to do");
            +
        }
