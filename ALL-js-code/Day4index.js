// normal way of creating function
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 1)FUNCTION DECLARATION,DEFINATION ,CALLING
// function running ()
// {
//     console.log("i am running...");
//     return null;
// }
// console.log(running());

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 2)HOISTING CONCEPT
//  bcoz of hoisting concept i can call function above its declaration&defination
// console.log(running());

// function running ()
// {
//     console.log("i am running...");
//     return null;
// }


// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 3)//function with formal and actual arguments

// function sum(a,b)
// {
//     return a+b;
// }
// console.log( sum(12,13) );

// 3.1) arguments -> objects which take all actual arguments automatically
// function sum(a,b)
// {
//     console.log(arguments); //argument is not array but only an object
//     //which store all actual argument to formal
//     //arguments in key : value  pairs !
//     return a+b;
// }
// console.log( sum() );



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 4 rest operator -> use in formal argument to store rest of all actual
// ..arguments

// rest formal parameter should be last!


// function sum(a,b, ...ok)
// {
//     console.log(ok); //ok is array(array here is dynamic one!) here any by rest operator it behaved as array
//     //..and can store all variable of formal arguments here!
//     return a+b;
// }
// console.log(`sum is ${sum(12,13,14,15,'kush','sharma') }`);



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 5 function assignment

// 5.1)normal function assignment 
// x(); //function assignment can't be called as normal assignment

// x=function running ()
// {
//     console.log("i am running...");
//     return null;
// }
// x();


// 5.2) anonymous function

// x=function  () //see i can assign function to again 
// //..assigned anonymous from running
// MEANS FUNCTION MAE BHEE HM DYNAMIC BEHAVIOUR OF FUNCTION USE KR SKTE H..
// {
//     console.log("i am walking...");
//     return null;
// }
// x();




// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 6)Default parameter

// r=5 if 10 is not send than 5 is used -->right in rightmost LSB <--RULE

// function SimpleInterest(p,r=6,y)//point@19x-BadPractice
// function SimpleInterest(p,y,r=6)//GoodPractice
// {
//     return p*r*y/100;
// }

// console.log( SimpleInterest(1000,undefined,5) ); //hack for @19x not good practice write default parameter rightmost

// console.log( SimpleInterest(1000,5) );//p and y is sended


// 7) getter setter method
// the clear defn : getter actual use : to access [properties/variables] inside object probably
// ..to access [behaviour/functions/method]

// setter acctual use:
// the clear defn :  to set/change/mutate/update [properties/variables] inside object probably 
// to set [behaviour/functions/method]

// MEANS GETTER SETTER MAE OBJECTS M USE KRUNGA

// getter to get values from function of predefined object
// setter to set values from function of predefined object to some variable or object probably



// lets create getter and setter concept

// let ipl=
// {

//     //no need of using let here as here its key:value not actual variable
//     //..who need let !
//     teamone:'CSK',
//     teamtwo:'RCB',


//     //  NUSANCE OBSERVED FOR THIS->KEYWORD
//     // this.teamone=teamone, this  used to access value in function/method
//     //in object of already declared property 
//     //or assign value in constructor-function/or/class! and access in there method


//     get firstMatch()
//     {
//         // console.log(`first match gonna be between ${this.teamone} and ${this.teamtwo}`);

//         return(`first match gonna be between ${this.teamone} and ${this.teamtwo}`);
//         //this used as by this i can access all proeprties of current object
//     },
  
//     set firstMatch(Val) //setter method takes 1 argument only
//     {

//         console.log(`last match gonna be between ${Val}`); //here i setted value so its setter
//     }
// }
// //cant as ipl is not constructor function,not class
// //nor factory function its object
// // let obj1= new ipl();
// // obj1.firstMatch('csk');

// // console.log(ipl.firstMatch);

// ipl.firstMatch='jatni' //setted
// console.log(ipl.firstMatch);


// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// 7th again getter setter method inside object

// let bgmi =
// {
//     players:100,
//     maps:7,

//     set firsttournament(formal_argument)
//     {
//         console.log(`the official tournament starts on ${formal_argument} 
//             with ${this.players} and ${this.maps}`);
//     },

//     //cant access formalargument which is formalparameter of settermethod
//     //inside getter method
//     get firsttournament()
//     {
//         console.log(`${this.players}`);
//         // console.log('ok');
//     }
// }
// bgmi.firsttournament='24th-Aug-2025'; //coz i used set method 
// //24th-aug-..automatically goes to formal argument of setter method

// bgmi.firsttournament;
// //OM-OM NOTE OM-OM setter and getter method automatically invoked when i passed value inside
// //setter and ran getter method




// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 8 ERROR HANDLING:~~>try catch throw concept with getter and setter method for practice

// let GTA=
// {
//     playerhealth:null, //will pass at time of calling with dot operators
//     //..feels its kind of setter but they are not ,they are just key:value pairs
//     maps:null,

//     //everything in objects stays in key value pairs
//     //from property:variable
//     //to behaviour:method
//     //but excepts setter and getter method ..@x119point it is
//     // setmethod : set game_start(val) //@x119 not allowded
//     set game_start(val) 
//     {
//         let temp=val.split(" ");
//         console.log(`starting on ${temp[0]}`);
//         console.log(`starting on ${temp[1]}`);
//     },
//     get game_start()
//     {
//         console.log(`player health is ${this.playerhealth}
//             and no of maps are ${this.maps}`);
//     }

// }
// GTA.playerhealth=100;
// GTA.maps=8;
// console.log(GTA.playerhealth);


// GTA.game_start='version numberSix';//setter method cant be directly called
// //..with sending value
// GTA.game_start;


// Try catch throw //same code copied above


// let GTA=
// {
//     playerhealth:null, //will pass at time of calling with dot operators
//     //..feels its kind of setter but they are not ,they are just key:value pairs
//     maps:null,

//     //everything in objects stays in key value pairs
//     //from property:variable
//     //to behaviour:method
//     //but excepts setter and getter method ..@x119point it is
//     // setmethod : set game_start(val) //@x119 not allowded
   
//     get game_start()
//     {
//         console.log(`player health is ${this.playerhealth}
//             and no of maps are ${this.maps}`);
//     },

//     set game_start(val) 
//     {
//         if (typeof (val) !== "string")
//         {
//             throw new Error (`${val} is not a string...`);
//             // console.log("hii");
//         } 
//         else
//         {
//             let temp=val.split(" ");

//             console.log(`starting on ${temp[0]}`);
//             console.log(`starting on ${temp[1]}`);
//             // console.log('ok');
        
//         }
//     },

// }
// // GTA.playerhealth=100;
// // GTA.maps=8;
// // console.log(GTA.playerhealth);


// try
// {
//     // GTA.game_start="versionnumber Six";
//        GTA.game_start=true; //passing boolean value to see error output
    

//     // GTA.game_start;//this is getter method calling ,i got confused bcoz of sameNAME
// }
// catch(e)
// {
//     // console.log(e);
//     // alert(e);
// }


// //working of try catch throw

// //step1)i write that block inside try which can have error
// //like  --> GTA.game_start=true; //passing boolean value to see error output
// //bcoz this is setter method i am calling not exactly method bcz
// //method calls by methodName() but here dont need of () in setter method

// //so when i get error bcoz i used true or number bcoz inside setter method
// //..i made logic if !== string than throw error else not

// //step2-->that error is throw using throw keyword and it gets caught
// //by catch keyword inside its actual argument 'e' or take any
// //..than either i can console.log(on screen..)
// //or create alert window!


// /HW FINALLY() KEYWORD
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// 9th> scope concept done in day1 :~

// localvariable by let inside
// {
//     ...
// }


// global variable by var through out program file function
// bcoz than var scope through out programfile bcoz main()/main Namespace is running
// if i put var in func than till there its scope comes!
//  function{
//     global variable //if func Notdefined than full pfile
//  }


// const variable also behave as global variable var
// const inside function is diff means scope in that function
// but if const declared outside of function
// ..than const scope through out programfile bcoz main()/main Namespace is running

// and ig js execution is like python sequencial line by line
// for ex execute by js engine(spidermonkey) if running code on firefox

// if var is declared inside for loop initlization expression i can
// access it outside of for loop toobcoz var inside function cant be accessed
// but var of [if and for loop] is accessible if declared inside it  



//checking concept of scope myself


function a()
{

    //i had to attach x to function object by a.x
    //or this.x coz a is object here so this work here as
    //this refer to current object but here this is not like this
    //of new operator or constructor its due to globalMode thing chatgpt said
    //   a.x=10; /leave can not access but by factory function i can/
    //will see in future
    // let  aa=10;
    //   a.xx=10;

    // return xx;
    // return a;
}
// console.log(a.xx);



function b()
{
    // const  a=10;
    // let  a=10;
}