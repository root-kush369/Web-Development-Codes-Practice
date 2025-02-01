//NOTE MOTIVE OF THIS 4 DAYS JS CLASS IS TO LEARN SYNTAX AND GETTING COMFORTABLE WITH JS
//IT DONT COVERS DSA EXCEPT ARRAY DATA STRUCTURE JUST COVERS FUNCTIONAL PROGRAMMING
//NOT OBJECT BASED PROGRAMMING LIKE CLASSES CONCEPT AND ALL!

// console.log("hii");

//JS Day1
//Topic1
//console.log and variable
let a =10;
let b= 20;

//Topic2
//operators
//1 Airthmetic
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);

//2 assignment
// let x =10;
// let y=x; //y got b refrence!
// console.log(y);


//3 increment-decrement

// let x=10;//11//12//13
// let y=15;//16//17

// let z= ++x + (y++ * x++) + (++x * y++);
//so 11+(15*11) +(13 *16) //left to right execution
//more than brakcet acc to ram main point 4 u a s c b l t a c
//priority of unary is more than all
// console.log(z);


//4 relational /comparison

// let x=10;
// let y=12;
// console.log(x>y);

//5 logical
// let x=10;
// let y=12;
// console.log(x>y || y === 12);

//6 sizeof //not here 

//7//ternary(coz used 3 things in parallel )/conditional operator /short form of ifelse

// let a=10;
// let b=19;

// let temp=a < b ?"b is greater" : "a is greater";
// console.log(temp);

//8 bitwise operator//write everything in binary bits!
//left shift right shift not here
//bitwise | or &and ~negatates complements here i.e 1's complement
// let x=12;
// let y=14;

//Bitwise Or
// console.log(x <<2);

// console.log(x | y); //...8 4 2 1
// x= 1100
// y= 1110
//    1010   // 14 in decimal its not binary addition its or operation


//Bitwise and!
// console.log(x & y);
// 1100
// 1110
// 1100 //12 in decimal



//Now bitwise 1's complement !
// console.log (~x);

//12 -->  0000 1100
//        1111 0011 //1's complement, since in MSB 1 so i need to convert
//.. coz  it will make bigger number


//its a rule
//conversion of 1's complement back to binary is 1;s complement and add 1
//so do 1's complement again to convert to binary //as 1 is MSB says its -ve

//number not 2's complement bcoz i did 1;s complement only of positive12
//its a rule


//so   0000 1100
//            +1
//            0000 1101 //13 and 1 bcoz at time of 1's complement 1 was in MSB
//so -13


// let y=-14;

// console.log(~y);

//1's complement of -14
//first show -14 how it looks in memory
//in msb all 1's 

// 0000 1110 //14

//1111 0001 //1's complement of 14
//for 2's complement add 1
//1111 0001
//+       1
//1111 0010  //this is -14 in memory @point @x1

//its a rule
//now to convert -ve 2's complement of number to binary do its 1's complement only
//its a rule

//0000 1101 //and - bcoz of 1 in msb in @x1 //now - of -14 in question and - of -14 representation has 1111 in msb
//so - and - cuts results 13




//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

//JS Day2

//1)creation of object

//
// let xyz = {

//     fname : "kush",
//     lname : "sharma",

//     occupation : function occup()
//     {
//         console.log("SDE...");
//         return null;
//     },

// }
// console.log(xyz.fname);
// console.log(xyz.lname);
// console.log(xyz.occupation());

//topic2 creation of factory function and constructor function

//in fctory function i have to create object!
//not in constructor function and in constructor function i can use
//this keyword
// function ramji()
// {
//     let xyz = {

//         fname : "kush",
//         lname : "sharma",
        
//         occupation : function occup()
//         {
//             console.log("SDE...");
//             return null;
//         },

//     }

//     return xyz;//have to return object dont return function name in factory function
//     //bcoz obj xyz content  i need to access
// }

// let kushobj = ramji();

// console.log(kushobj.fname);
// console.log(kushobj.lname);
// console.log(kushobj.occupation());



//topic3 constructor function is not constructor of class or class!
//but always constructor are called when ever new keyword is used
//and also this object is formed which point to current object and by this i can access
//all [behaviour/methods properties/variables] inside constructor or anywhere where new keyword used for
//like classes 

// function ramji(fn,ln)
// {
   
// //coz i am not creating objects its automatically gets create as i use new 
// //..keyword
// //so by this i can access objects in memory where ever they created invisibly
// //for constructor function or classess
// //and can assign values thats why used equal to = sign rather : which used in objects
//        this.fname=fn;
//        this.lname=ln;
        
//        this.occupation=function occup()
//         {
//             console.log(`first name is ${this.fname} and lastname is ${this.lname}`);
//             // return null;
//         }

    
// //automarically object are returned in class and constructor functions
//    //have to return object not function in factory function
//     //bcoz obj xyz content  i need to access
// }

// // let kushobj = new ramji("raja" , "hindustani");

// // console.log(kushobj.occupation());
// // console.log(kushobj.lname);
// // console.log(kushobj.occupation());


//Topic 4 dynamic nature of object
//4.1) in point 1 lets ad dynamic nature of object

//added in point 1
// let x = {
//     fname : "kush",
//     lname :"bhardwj",

//     occup: function occupation()
//     {
//         console.log("sde..");
//     }
// }

// x.author=12;

// console.log(x);

//4.2 in point 2 lets ad dynamic nature of object~~ factoryfunction

// function BB()
// {
//     let Bigboss={
//         contestone : "Rajat",
//         contestTwo : "Vivian",
//         contestThree : "avinash",

//          finale_date: function finale()
//         {
//             console.log("jan end..");
//         }
//     }
//     return Bigboss;
// }
// let obj = BB();

// obj.contestFour="Karan";
// obj.alteration_date=function finale()
// {
//     console.log("probably feb start...");
// }

// console.log(obj);


// //4.3 in point 3 lets ad dynamic nature of object

//constructor function
// function beast_mobiles_iqoo (first,sec,third,fourth)
// {
//     this.device_one=first;
//     this.device_sec=sec;
//     this.device_three=third;
//     this.device_fourth=fourth;

//     this.Tournament = function tournament()
//     {
//         console.log(`in tournament following devices gonna be used ${this.device_one} , ${this.device_sec}, ${this.device_three} , ${this.device_fourth} ${this.device_fifth}`);
//         return NaN;
//     }
        


// }
// let mob_obj = new beast_mobiles_iqoo("iqoo_neo_9","iqoo_neo_11","iqoo_neo_12","iqoo_neo_13");
// console.log(mob_obj.Tournament());

// mob_obj.device_fifth = "iqoo neo 7 pro";
// console.log(mob_obj.Tournament());


//topic 5 functions are object

// function xyz()
// {

//     xyz.a = 10;
//     xyz.b =  20;
//     // console.log(a+b);

//     return xyz;
// }
// let ok = xyz(); //have to create object of function and returnn function name as object
// //bcoz here fuunction is also obj
// console.log(ok.a);


//topic 6
//types in js

//**primitive
// let x=10;
// let z=x;
// console.log(x,z);




//**refrence/types/objects


// let xyz={
//     a:10, //lets create constructr function
//     b:20,
    


// }

// function xyz()
// {
//     this.x=10;
//     this.y=20;

//     ++this.x; //x=12 by this
// }


// function ok(temp)
// {
//     ++temp.x; //x=11 by this
// }
// let xyzObject = new xyz();
// let abc=xyzObject; //object is copied so abc points to same location as xyz!
// ok(abc);

// console.log(xyzObject.x); //xyzObject is object no [xyz! thats constructor function name)


//topic7
//iteration loop
// //for in loop iterate through objects

// let x = { //object can be accessed using dot and using slice operator[see in array Day3]
//amd @1 below
    
//     //objectname[key]//note best save it with huge observation made myself
//     fname : "kush",
//     lname :"bhardwj",

//     occup: function occupation()
//     {
//         console.log("sde..");
//     }
// }


// for (temp in x)
// {
//     console.log(x[temp]); //@1 check! used slice operator to access object value
// }

//for of loop

//array and map pr iterate krne ko

//Array
// let newArray = ["kush","tom",1,2];

// for (temp of newArray)
// {
//     console.log(temp);
// }


//map concept created map from array
// let newArray = ["kush","tom",1,2];

// // for (temp of newArray)
// // {
// //     console.log(temp);
// // }


// let newmap= newArray.map(function (value)

//     {
//         // console.log(value);
//         return value + "@KB.com";//this is step to create map
//         //i returned map //here newArray being Higher ordr fun
//         //taking callback fun/internal function/predcatefunc
//         //calls function automatically with mapping newArray each
//         //value and passing newArray means own value as actual argument
//         //to function like

//         //function call--> function(newArrayValue 0,1,2...) //1 by 1call happens
//     }
// )

// console.log(newmap); //its array but in js its also refrence means
// //a object
// console.log(typeof(newmap));

// for (kush of  newmap)
// {
//     console.log(kush);
// }

//topic 8
//clone of object/or any refrence variable
//not copying refrence means 2 variables same blocked Memory

//..  but 

// same content but wid diff memory blocks 

// let x = {
//     fname : "kush",
//     lname :"bhardwj",

//     occup: function occupation()
//     {
//         console.log("sde..");
//     }
// }


// let z={}; //declared object with null intilization as jvm engine gives 0 if nothing initlized/assigned

//1)
// z={... x}; //using spread operator

// console.log(z);

//2 using iteration
// for (temp in x)
// {
//     z[temp]=x[temp];
// }

// console.log(z);


//3 using assign function of Object variable

// z=Object.assign({} , x)
// console.log(z);
// z.occup();


//topic 9

//
//if else if else and switch case statments
// let salary =1000;

// if (salary >100000)
// {
//     console.log("take job")

// }
// else if (salary ===100000)
// {
//     console.log("will think")
// }
// else
// {
//     console.log("No..");
// }

//topic 10
// switch case days week
// let day=14;
// switch (day){
//     case 1 : console.log("Mond");
//                 break;
        
//     case 2 : console.log("Tues");
//                 break;  
    
//     case 3 : console.log("wed");
//                 break;
    
//     case 4 : console.log("thur");
//                 break;
    
//     case 5 : console.log("fri");
//                 break;
    
//     case 6 : console.log("Sat");
//                 break;
    
//     case 7 : console.log("Sun");
//                 break;

//     default : console.log("wrong input ")                    

// }




//***************************************************************************** */

//js day 3 some predefined object and Array in details


//Array Datastructure

//
//for primitive DS first
let x =[1,2,3,4,5];

// console.log(typeof(x));

//1) adding element in array

//start
x.unshift(11,12,13);
// // // console.log(x);

// // //middle
x.splice(3,0,"kush"); 
//1//where //2nd (how much element from that position to remove)//3// what content

// // // console.log(x);

// // //end
x.push(111,1111,1111);
// console.log(x);


//2) removing element same opposite of above /specific element

//from start
// x.shift();
// console.log(x);

// //from end
// x.pop();
// console.log(x);


// //from Middle
// x.splice(0,1);
// console.log(x);


//point3)empty an array all at once!

// let y=x;
// 1)
// x={}; //issue still y pointing to same memory block
//so solution point 2
// console.log(x);
// console.log(y);

// 2
// x.length=0;
// console.log(x);
// console.log(y);


//3 way

// by iteration pop all values

// let y=x;
// let temp=x.length; //in comparison expression x.length directly not working --doubt
// let i=0;
// for ( i=0 ; i<temp; i=i+1)
// {
//     x.pop();
// }
// console.log(x);
// console.log(x.length);
// console.log(y);

//4th way //check by splice operator or splice function one n same thing

// x.splice(0,x.length);
// console.log(x);

//point4 finding searching elements in array


// console.log(x.indexOf(3));
// console.log(x.includes(1));


//point5 and point6 combining and slicing array
// c for combine c for concat

// y=['a','b','c','d'];
// x=x.concat(y); //concat in last
// console.log(x);

//combining by spread operator! //it combines entire array if i use directly array name without
//spread operator ex @1x below
// x=[...x, y];//@1x 

// x=[...x, ...y];
// console.log(x);



//slice is like cutting array but end should be +1 till where to cut

// let y=x.splice(0,5);
// console.log(y); //dont confuse slice with splice

//point 7 iterating through array

// 1for of loop
// for (temp of x)
// {
    // console.log(temp," ");
// }

//2 by foreach loop using predicate function/internal/callback function



// x.forEach(function (value) 
//     {
//         console.log(value);
//     }
// )


//point8 ->joining array and splitting array

//joining is converting array to string
//splling string to array s for splliting s for string

// y="222,2222,2222";
// x=x.join("pookie \n"); //join on the basis of pookie and fact that i used pookie in " "string tells
//resultant output is in refrence/objectvariable/string
// console.log(x);//join works on array so need array as input

// console.log(typeof(x));
// let abc="kush bhardwaj";
// abc=abc.split(" "); //split works on string so need string as input

// console.log(abc);
// console.log(typeof abc);


//point 9 sorting ~~> sort fucntion takes predcate function concept

// console.log(x);

// x.sort();

// console.log(x);


//

// let o =[11,1,3,44,4,2,999,9,99];


// o.sort(); //it convert resultant sort in string so use predicate function in sort

// console.log(o);
//here value 2 is 1st value and value1 is 2nd value

// let temp =o.sort(function (value1 ,value2)

//     {
//         if (value1 < value2)
//         {
//             return -1;
//         }
//         else if (value1 >value2)
//         {
//             return 0;
//         }
//         else {
//             return 0;
//         }
//     }
// // 0 1 -1 //0 no change  //1 in number line is +ve right side //-1 is -ve in left side
// )

// console.log(temp);


//point10 filtering and point11 mapping

// filtering ~~> filter()  fucntion takes predicate function concept

// x=[1,2,3,4,9,11];

// //filtering

// let temp=x.filter(function (value)

// {
//     if (value %2 == 0)
//     {
//         return value;
//     }
//     // else 
    
// }

// )
// //mapping!

// console.log(temp);

// let temp2=temp.map(function(value){

//     return value + "@ok.com"

// })
// console.log(temp2);

//now all array functions on object/refrence variables 
//i will see as far no need ,seen all predicate function logic!

// let l  = {
//     fname:"kush",
// }

// //add
// l.lname="ok";

// console.log(l); //add elements

// //remove elements




//Js day4 all functions in details


// 1>

// ok();//point2 //hoisting concept
// function ok()
// {
//     console.log("kush...");
// }

// ok();


// 3)//function with formal and actual arguments

// function product(a,b) //formal arguments/parameters
// {
//     return a*b;
// }

// console.log( product(13,3) ); //actual arguments

//3.1 use of keyword agruments
// function product(a,b) //formal arguments/parameters
// {
//     console.log(arguments); //its not array but an object!//although array is object
//     //but still argument is not an purearray
//     //arguments stores rest of formal parameters values is key : value  pairs !
//     console.log(typeof arguments);
//     return a*b;
// }


// console.log( product(13,3,1,1,1,2,3,4,5) );


// 4 rest operator -> use in formal argument to store rest of all actual
// ..arguments


// function product(a,b, ...x) //formal arguments/parameters //like spread operator rest operator is
// {
//     console.log(x);
//     console.log(typeof x); //type is object here //but more like array
//     //n   o    t    e   =-=-=----> simple thing is by look and feel of output i came to know point 3 is object but not array
//     //presenting values in key:value pairs

//     //and point 4 is object but array
//     return a*b;
// }

// console.log( product(13,3,1,2,3,45,66) );


// 5 function assignment

// 5.1)normal function assignment 
// x(); //function assignment can't be called as normal functions can be called in js before defination
//which takes help of hoisting concept there means creating bodydefination/declaration blueprintyapicture
//automatic abovecalling invisibly..

// x=function running ()
// {
//     console.log("i am running...");
//     return null;
// }
// x();


// //anonymous function //no name so anonymous function

// let xy= function ()
// {
//     console.log("hii");
// }
// xy();


// 6)Default parameter

// r=6 if 10 is not send than 6 is used -->right in rightmost LSB <--RULE

// function SimpleInterest(p,r=6,y)//point@19x-BadPractice
// function SimpleInterest(p,y,r=6)//GoodPractice
// {
//     console.log(p," ",y," ",r);
//     return p*r*y/100;
// }

// // console.log( SimpleInterest(1000,undefined,5) ); //hack for @19x not good practice write default parameter rightmost
// console.log( SimpleInterest(5,10,15) ); //default parameter gets over-ride by actual agruments always

//7 getter and setter methods used in objects always


// let Actors=
// {
//     bollywood: "salman",
//     tollywood: "allu",
//     // hollywood: temp,

//     set finalList(val)
//     {
//      console.log("new val: ",val);
//     },
//     get finalList()
//     {
//         //this can be used to objects properties.variable whether [i am in class/constructor funtion]
//         //or creating object and [object is made from blueprint i.e class interface]
//         console.log(`bollywood actor : ${this.bollywood} tollywood actor : ${this.tollywood} and
//             hollywood ${this.hollywood}`)
//     },
// }

// Actors.hollywood="Tom";//
// //jb hmnae seekha tha day1  mae ke objects mae 
// //dyamic nature of object ke object mae new values add krsktae h thats1 way to add values/properties to object


// Actors.finalList ="kush"; //passed value to setter method
// console.log(Actors.finalList); //called getter method they are not actually function thats why called without ()


// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 8 ERROR HANDLING:~~>try catch throw concept with getter and setter method for practice




// let Actors=
// {
//     bollywood: "salman",
//     tollywood: "allu",
//     // hollywood: temp,

//     set finalList(val)
//     {
//     //  console.log("new val: ",val);
//         if (typeof val !== "string")
//         {
//             throw new Error (`${val} is not string`);
//         }
//         else
//         {
//             let temp = val.split(" ");
//             console.log("1st value is : ",temp[0]);
//             console.log("2nd value is : ",temp[1]);
//         }
//     },
//     get finalList()
//     {
//         //this can be used to objects properties.variable whether [i am in class/constructor funtion]
//         //or creating object and [object is made from blueprint i.e class interface]
//         console.log(`bollywood actor : ${this.bollywood} tollywood actor : ${this.tollywood} and
//             hollywood ${this.hollywood}`)
//     },
// }

// Actors.hollywood="Tom";//
// //jb hmnae seekha tha day1  mae ke objects mae 
// //dyamic nature of object ke object mae new values add krsktae h thats1 way to add values/properties to object

// try{
//     // Actors.finalList ="kush sharma"; //passed value to setter method
//     Actors.finalList=12; //passed value to setter method
// }
// catch (e)
// {
//     console.log(e);
// }
// console.log(Actors.finalList); //called getter method they are not actually function thats why called without ()



//REVISION DAY 4

//topic 6 Closure property
// function kush(val)
// {
//    let x=val;
//    function sharma()
//    {
//       ++x;
//       console.log(`value of x is ${x}`);
//       return null;
//    }
//    return sharma;//had to return thats how closure can be accessed

   
// }
// //sharma temp m leeya temp () call mtlb sharma fun call!
// //or due to closure property sharma ke pass kush() ke last value 12 h!
// let temp= kush(12);
// console.log( temp());



//js object


// //topic5 fetch Api---> i know Api nd interface from abovetopic2 thats pre required!!!!



// async function kushbhardwaj_API()
// {
//     // 1 name of object
//     let kushobj={
        
//         // 1.1)
//         method : "POST",
        
//         // 1.2
//         body : JSON.stringify({

//             fname:"kush",
//             lname:"sharma",
//             occup:"SDE",
//         }),
        
//                 headers: {
//                     'Content-type':'application/json ;charset=UTF-8'
//                     // 'Content-type': 'application/json; charset=UTF-8',
//                 },

//     }
//         // 1.3


//     let fetchKAPI=await fetch("https://jsonplaceholder.typicode.com/posts",kushobj);

// // let kAPI=await fetch("https://jsonplaceholder.typicode.com/posts",details);
//     let finalop = await fetchKAPI.json();
//     return finalop;

// }
// async function kush()
// {
//     let k = kushbhardwaj_API();
//     console.log(k)
// }
// kush();
// // console.log( kushbhardwaj_API() );