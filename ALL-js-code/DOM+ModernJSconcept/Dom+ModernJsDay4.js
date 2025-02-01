// // point1) sync and async function!

// // function test()
// // {
// //     console.log("hello");

// // }
// // test();
// // console.log("bye");
// //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// //point2
// //async function

// // let t1=performance.now();

// //async func
// // setTimeout(function(){
// // console.log("hello");
// // },4000 ); //jb tk sync function naa run ho tb tk ye run ne krega even
// // //time is 0 ms,bcoz TheCallStack needs to be empty


// // //sync func
// // function test()
// // {
// //     //Predefined ->sync func
// //     console.log("kush");
// // }
// // test();


// //Predefined ->sync func
// // console.log("bhardwaj");

// // let t2=performance.now();


// // console.log(t2-t1);


// //so document.addeventlistener and settimeout -->are predefined async fun
// //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// //point3 -> Js is single threaded-->means at a time ek command line by line
// //so concurrency is handle by ->async func/asyncode/ -->and async run
// //by eventloop diagram phillip robert-->when call stack is empty than
// //async code run hoga

// //search about concurrency

// //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>



















// // >>>>>>>>>>>>>>PROMISE<<<<<<<<<<<<<<<


         //          // mainly kaam iska hae compulsory koe cheez
         //          //background m parallel m chlaadena


// //topic3 promises all syntax with explnantion
//       //()()()()()()()()()()()()()()()()
//3.a)       //b3stPractice below
//       //promise ko hmesha write with async code bcoz
//          //sync code queue se full stack mae with agreement aaye
//       //wo promise ->ka predicate function argument resolve/fulfilled ya
//          //reject/nofulfilled decide krega!
//          +

// //()()()()()()()()()()()()()()()()   






//3.b) //remember promises by 2 things it has 2 arguments
            // //means comes under promise() Semicircled brackets !

            // //resolve //fulfilled
            //    //reject //not-fullfilled




//3.c //syntax how to create promise--> its like creation of object kinda
// //constructor from class or constructor function


// //few points to note about promise () kinda conclusion what
// //promise is:~

//3.c.a,b,c,d..bcoz its syntax points
// //3.c.a)note promise ke andr function predicate hota h jo ke khud call hota h
//       //...predicate behaviour

// //3.c.b)ab jo promise function h wo 2 cheezo ke upr operate hota h
// //fulfill(resolve) //not fulfill(reject)

// //3.c.c) ye 2 argument promise ke nahi balki promise ke andr predicate function
// // jo aayega uske hae kinda track ke leeye use hoga i guess
// //and predicate function jo  b apne andr argument leta h uska 
// //map krdeta hae us function se jis ke andr as argument wo reh ra hae

// //here predicate function staying inside promise()
// //so kinda promise ek object bnarhaa hae idhr by new keyword
// //new promise so ye jo object bnaa iske kaam mae aaya wo mapping 
//predicate func ka

// //3.c.d)and store is kushpromise so kushpromise ke paas resolve or reject
// //ke basis pr predicate function ke body ka logic aarha h 
// //means resolve yaani fulfiiled yaani chlaa code
// //or
// ////NOtresolve yaani Unfulfiiled yaani Nahichlaa code


// //3.d) resolve and reject dont alter the behaviour of sync and async code
// //sync code  run but resolve keyword used at end why ?
// //so i can store and track  behaviour and functionalites of predicate function
// //inside kushpromise thats why actually resolve and reject used

// //same goes with reject keyword i can store functionalities
// //and even throw error by new Keyword!

// //3.e) for async code use promise only bcoz promise ka resolve
//mark tb he krwao jb async code hua complete wrna koe lena dena
//nahi h async code ka resolve se


// //3.f) imp one i can write promise predicate func resolve and reject
// //but actually promise can be applied on 2 methods
// //than and catch
// //catch used to handle error /not fulfilled by reject
// //and than used to handle any work i have to make done after whole
// //

// //so in a sense combination of
// //resolve + than..than used to make anywork done even when promise function completes
// //its like cake order ke baad mae lena gyaa ->promise end but i want
// //to say to write name on cake!

// //reject + catch for error handling


// //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||




// //>>>Note<<
// //promise-->abhi promise use krna acha h when ever writing ANy async function
// //async await -->aage chlkr ptaa chlega ke promise se bdiya async wait h
// //fetch api--> or bhot aage chlkr ptaa chlega ke us se b bdiya fetch api naam ke b cheez hote h
// //jo or b bdiya h!
// //>>>Note<<


// //3.g) predicate function of promise should always have resolve and reject
// //error ko catch kro and throw kro //application nahi balki muje future error 
// //ptaa hona chaihye

// //3.h)  //**  promise have 3 states resolve fulfilled


            // //** reject/not fulfilled

      // //f.3)pending when async code is on hold and from 
      // //*i know async code when cpu comes on it
      // //*its entry goes on call stack

// //*than it goes on browser/web api bcoz its rule of event loop
// //so all (sync event/code/function) can execute

// //than aysnc code says gives itself to browser and tells it to execute
// //than when actually predefined async code/function like addeventlistener or 
// //setTimeout method clicked or ran they came in
// //queue there also they track if call stack is empty 

// //than finaly they enter callstack and ran

// //so till final async code comes to callstack to ran and it says on browser/webapi ->quque->thats
// // ~~pending state



            //practical of point3 promise
   // with resolve and reject argument and than and catch keyword...


   // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// //ex1 with sync-code + resolve operation in promise
// // let kushPromise = new Promise(
// //     function(resolve,reject)
// //     {
// //         console.log("kush sharma");
// //         // resolve(1999);
// //         resolve(1999); //resolve can take any argument or no arguments
// //     }
// // );

// // console.log("kush bhardwaj");






// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// //ex2 with sync-code + reject operation in promise
// // let kushPromise = new Promise(
// //     function(resolve,reject)
// //     {
// //         console.log("kush sharma");
// //         // resolve(1999);
// //         reject(new Error ("bhaiya ke jai ho"));
// //     }
// // );

// // console.log("kush bhardwaj");







// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // //ex3 with async-code + resolve operation in promise
// // let kushPromise = new Promise( //promise func mae predicate/internal/callback function leekhna hota h
// //    function(resolve,reject) //this is predicate function and inside
// //    //it rather console.log i can put async function like setTimeout
// //    {

// //       setTimeout(function(){
// //          console.log("SDE in Google.")
// //       },3000)//always 2 arguments functions(what to write not predicate) and time

// //       resolve(1920); //resolve is inside function so it gonna come under
// //       //..function which is predicate herw!
// //    } 

// // );

// // console.log("SDE in MICROSOFT");





// // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // ex4 with async-code + resolve operation in promise
// // let kushPromise = new Promise( //promise func mae predicate/internal/callback function leekhna hota h
// //    function(resolve,reject) //this is predicate function and inside
// //    //it rather console.log i can put async function like setTimeout
// //    {
// //    //aysync code promise ke andr rehta h
// //       setTimeout(function(){
// //          console.log("SDE in Google.")
// //       },)//always 2 arguments functions(what to write not predicate) and time

// //       // resolve(1298);
// //             // console.log("SDE in META.")
// //       //new Error here is equivalent of throw keyword!
// //       reject(new Error ("filhaal Microsoft mae kaam kro")); //resolve is inside function so it gonna come under
// //       //..function--> which is predicate here gets call automatically at the end
// //       // ...like function()
// //    } 

// //    //predicate function apne aap call hojayega!
// // );

// // console.log("SDE in MICROSOFT");

// // console.log(kushPromise); //i can print object which is made from promise!







// //3.I)ROLE OF THAN-->       than used to do anywork after promise
// //predicate fun end or its main role is  to ensure predicate func of
// //promise ran succesfully and since promsie needs always 2 argument
// //RESOLVE AND REJECT
// //SO PROMISE can only ensure THIS WHEN resolve is used means fulfilled
// //and than keyword se mai koe dusre promise function ko call kru
// //or wo tb hoga means cpu than ke paas tbhi ayyega jb current than excuted hoga

// //and promise used to catch error and promise already use kraa wa hoga
// //reject its not like promise rely on that but promise needs itself
// //reject if promise/MEANS TASK is not fulfilled





// //ex5 

// let kushPromise = new Promise( //promise func mae predicate/internal/callback function leekhna hota h
//    function(resolve,reject) //this is predicate function and inside
//    //it rather console.log i can put async function like setTimeout
//    {
//    //aysync code promise ke andr rehta h
//       setTimeout(function(){
//          console.log("SDE in Google.")
//       });//always 2 arguments functions(what to write not predicate) and time

//       // resolve(1298);
//             // console.log("SDE in META.")
//       //new Error here is equivalent of throw keyword!
//       reject(new Error ("filhaal Microsoft mae kaam kro")); //resolve is inside function so it gonna come under
//       //..function--> which is predicate here gets call automatically at the end
//       // ...like function()
//    } 
//    // //    //predicate function apne aap call hojayega!
//    )
//    // console.log(kushPromise);
   
//    console.log("SDE in MICROSOFT");


// //ex5 again role of than and catch


//ex5.1)async ,resolve,than
// let okKush = new Promise(function (resolve ,reject)//this here is predicate/callback/internal function
//     {
      
//       setTimeout(function(){
//          console.log(`i am async method came from call stack to browser/webapi to 
//             queue to back to call stack ~and thats why this concept comes under eventloop`)
//       } , 0)
//          // {//i though settimeout method ke block ke andr rkhuga
//          //..but i can't as its not a custom/or/Userdefined function
//          //..its predefined function thats also gets called itself
//          //    console.log("ok...");
//          // }

//          resolve(1882);//called so i can mark this predcate function
//          //resolve/fullfiled and stored tracking entry in okkush
//       //and than i can use than and catch on ok kush than only
//       //so all are connected
  
// });

//                //now use of than
// //**than is like sync functionality only i feel
// //**than is not only value specific like okkush have value
// //**kya promise ke baadreject kuch krna h muje? so value pr than lgaa ke kr ska hu
// //there than is used and useful


// // okKush.then( function(value){ //this also inside than is predicate function!
// //    // many function which take another function inside it are mostly predicate only
// //    console.log("finally async code is executed....")
// //    console.log(value);
// // } ) //same function by arrow function below

// // //steps of arrow function htao  or aage arrow lgao
// // //function ke brackets htao or uske andr ke argument value ke badd => arrow
// // //... lgao than i know how its called
// // okKush.then(value => console.log(value) )



// // //ex5.2 async ,reject,catch
// let kushok= new Promise(
//    function(resolve,reject){ //resolve pahle aata h or reject hmesha baad m!
   //NOTE>>>>>>>>>
   //so promise job hae async code agreement ke saath for sure
   //print krwata hae bcoz of predicate function ,it has inside

   //..and which has arguments resolve and reject
   //and that for sure used to store predicate function value to object kushok made from
   //new promise --> so promise here is kinda predefined class or constructor function
   //<<<<<<<<<<<<<<<<


 
//    setTimeout(function(){ //print in last //even though timings are 0ms
//       console.log("i am async method with reject approach...")
//    });

//    // resolve(4444);
//    //1st bcoz of catch below catch caught errors!@okok
//    reject(new Error ("this is 404 error..") ); //reject takes argument as throwing error 
   
// });

// than wala code
// kushok.then( function(value){ //this also inside than is predicate function!
// //    // many function which take another function inside it are mostly predicate only
//    // console.log("finally async code is executed....")
//    console.log(value);
// } ) 

//catch method
// kushok.catch( function(value){ //this also inside than is predicate function!
//    //    // many function which take another function inside it are mostly predicate only
//       // console.log("finally async code is executed....")
//       console.log(value);
//    } )  
   

   //conclusion
   //here catch retrieve error and i can print value
   //and than receive value too but than gives me ensurance
   //ke promise ke baad or koe call or yaa koe dusra promise function run krwana ho
   //bcoz its stored in object kushok from promise object inside
   //catch argument so thats why on kushok.catch(take predicate function)
   //and i can print it
   //and kushok has nothing but tracked argument value of promise function
   //whether fulfilled accepted or rejected not fulfiiled
   


   //************************************************ */




//point3.I

//now making ex of interconnection of 3 
// --> seen promise chaning
// let kushPromise = new Promise(
   
//          function(resolve,reject)//this is predicate function here
//             {

//                //async function settimeout()...
//                   setTimeout (function () {//this is also predicate function

//                   console.log("first predicate functio inside setTimeout()...");
//             },8000); //predefined function called automatically no body

   
   
   
//       resolve("value1"); //resolve ka koe lenaa dena nae async func ke printing sae
//    //wo resolve ke beena b print hojayega! 
//       // resolve(true) b leekh skta thaa mae

   

// });

//          //1 small ex point name is @21x
//             //ye than promise ke baad kuch krna ho usko krega
//                // kushPromise.then(function(value){
//                   //    console.log(value);
//                      // });//function inside than is again predicate//callback()

//                      //same above @21x by than keyword by arrow functioN...
//                      kushPromise.then(value => console.log(value));
//                      // as said by grok ai
//                      //then waits for marking system if promise is done
//                      //so here it hold resolve content always!






// // {NOTE 1)//promise object never creates as a functin do note!

// // }

//       //NOTE 2) I LEARNED WHEN AS PREDICATE FUNC I WRITE 
//          //..AFUNCTION IT ALSO MEANT AS () in short form


// //than method of promise () always takes predicate function !! and so do catch function of promise!
// //inside that predicate function i can run another promise method



// let output=kushPromise.then(function(){ //if needed i can use..
//          //.. value inside predicate function here
//          //then always needed predicate function uske andr
//          //dusra  promise leekh skta hu m...
         
         
//          let xyz= new Promise(     //promise inside predicate func takes 1 argument always -->so this not allowded//..console.log(value);
            
//             function(resolve,reject){
//                      setTimeout(() => {
//                         console.log("Second predicate function inside setTimeout()...")
                        
//                      }, 4000);

//                      resolve("value2");   
//                      }
         
         
//                      );
//                      //*after xyz promise uspe then lgaa ke technically
//                      //maine value fetch krle of predicate function 
//                      //inside xyzpromise()
                     
                     
//                      //**usko temp mae store keeye return jrure thaa
                     
                     
//                      //***at last kushpromise ke andr return temp keeya
                     
//                      let temp=xyz.then(function(value){
//                         return value;// as said by grok ai
//                         //then waits for marking system if promise is done
//                         //so here it hold resolve content always!
//                      })
//       return temp;
// } );

// output.then((value)=>console.log(value));// as said by grok ai
// //then waits for marking system if promise is done
// //so here it hold resolve content always!



// //NOTE I OBSERVED IF IN QUEUE FIRST TURN OF ASYNC CODE CAME WHICH IS
// // OF TIME 8000ms- 8sec
// //and
// //second turn of -- TURN OF SECOND ASYNC CODE CAME WHICH IS
// // OF TIME 4000ms- 4sec

// // than automatically second of 4s gonna run even if its quque FIFO mechanism first item
// // should print


/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> */

//topic 4.1 Async and Await~~
//return promise function always which is automatically marked as fulfilled/resolved [or may be reject/notfulfilled not seeen this case yet]



///promise chaining has issue like 
//in 50 chaining if suppose in resolve rather some value
//i put sync code so than it gonna print in sequence 

//but what if i apply async code setTimeout and of 4-5 promise is lesser than
//1st 2nd promise still i need 1st and 2nd promise to execute first
// not in sequence
//due to more or less times in async code setTimeout ,see ss in mobile

//here concept of

//>>>>>>>>async and awaits comes I CAN MAKE ANY FUNCTION async
//.....and any promise probably await to execute completely
//with ignoring timings of promise whether its more or less!

//see directly @kkx code below directly




//predefined async function returns fulfilled promise!
//means  it has already inside resolve function 
//like resolve(true)//automatic call hote hae isme!

// async function xyz()
// {
   // console.log("kush sharma...");
// };

// console.log(xyz());

// async with await

// async function weatherAPI()
// {
//    let SataunMausam = new Promise(
//       function(resolve){
//          setTimeout(function()
//          {
//             console.log("temperature is 7deg");
//          },4000);
//          resolve();
//    });
//    // let SataunWeather=
//    // await SataunMausam;

//    let PaontaMausam = new Promise(
//       function(resolve){
//          setTimeout(function()
//          {
//             console.log("temperature is 9deg");
//          },2000);
//          resolve();
//    });

//    // SatatunMausam.then

//    // await SatatunMausam; //await can't be written without async method
//    let SataunWeather=await SataunMausam;
//    // let SataunWeather=await SatatunMausam;
//    let PaontaWeather=await PaontaMausam;
//    // await SataunMausam;
//    // await PaontaMausam;
//    return[await SataunWeather,PaontaWeather];
//    // return [await SataunMausam , await PaontaMausam]; //returned in the form of object/array
// }


// weatherAPI();


// let SataunMausam = await promise;

//SYNTAX OF ASYNC FUNCTION IS~~>
//* async keyword
//** functionkeyword
//***function name followd by ()
// async function kush()
// {
//    let xyz=await SataunMausam  ;
//    let abc=await PaontaMausam
//    console.log(xyz);
//    console.log(abc);
//    // return [xyz,abc];

// }
// console.log( kush() );



// @kkx code

// async function kushWeather()
// {
// let SataunMausam = new Promise(
//    function(resolve){
//       setTimeout(function()
//       {
//          console.log("temperature is 7deg");
         
//          resolve(true);
//         },2000);
// });

// let SataunW=await SataunMausam;

// //await wait krta hae fulfilled ka until that wo aagae he ne jayega ye dekh leeya maine!
// // console.log(SataunW);

// let PaontaMausam = new Promise(
//    function(resolve){
//       setTimeout(function()
//       {
//          console.log("temperature is 9deg");
         
//            resolve(true);
//       },1000);
// });


// // let SataunW=await SataunMausam;
// let PaontaW=await PaontaMausam;
// // console.log(PaontaW);

// return [PaontaW,SataunW];


/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> */

// Topic5 fetch API 


//get method -->using url only with fetch () makes it...
// async function fetched_cat_Facts_API(){


//    let xyz = await fetch("https://catfact.ninja/fact") ;
//    let finaloutput= await xyz.json();
//    console.log(finaloutput);
// }f

// fetched_cat_Facts_API();


//get method -->using url only with fetch () makes it...



//post method

//API meant ~~>creating API is nothing but keeping object based data of js in backend 
//on server acc to me till here knowledge




// async function KushAPI(location)
// {

//    let details={
//       method:"POST",
      
      
//       body: JSON.stringify({ //its property called body /we had to convert
//          //JSON objects to string its rule!
//          fname:"Shine",
//          lname:"Bhardwaj",
//          occupation:"SDE",

//          //ye wala concept baad mae dekehneg jisme argument ke basis pr back end sae data aayega
	//ifelse use krna
//          // weatherall : function weather()
//          // {
//          //    if (location == "HP")
//          //    {
//          //       return "3deg Celsius...";
//          //    }
//          // } 
//       }),

//       headers: {
//          'Content-type': 'application/json; charset=UTF-8',
//       },
//    }


// let kAPI=await fetch("https://jsonplaceholder.typicode.com/posts",details);
// let finaloutput= await kAPI.json();
// console.log(finaloutput);
// }

// KushAPI("HP");


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//about closure written in syntax below!!

// INTERVIEW QUESTION ~ INNER FUNCTION KE PAAS LEXICAL FUNCTIONALITY WAY MAE OUTERFINCTION KA REFRENCE HOTA H
//IN A  SENSE INNER FUNCTION POINT TO BLOCK OF IT NOT LIKE CREATING COPY OF OUTER FUNCTION INSIDE INNER FUNCTION
//TBHI WO OUTER FUNCTION KE VARIABLE KO ACCESS KR SKTA H
//topic 6 Closure property
// function kush(val)
// {
//    let x=val;
//    function sharma()
//    {
//       ++x;
//       console.log(`value of x is ${x}`);
//    }
//    return sharma;//had to return thats how closure can be accessed

   
// }

// let closure=kush(12);
// closure();
// closure();
// console.log(kush().x);//i can never access again now! even can't access
// // on first func call ok kush(12)
// // console.log(closure.sharma);
// // console.log(kush(12));
// closure.x; //even cant' access here!



//let x=12
// function abc()
// {
   // console.log(x); function abc can take value of let x=12
   //bcoz its on main function scope and function abc falls under
   // it its kina again closure but not properly
   //still abc scope can access x bcz abc() is inside main() somehow
//  }


//new api

// function outer ()
// {

// let a=12;

//    function inner1()
//    {
//       let a=13;
//       console.log(a);

//    }
//    // return inner1;//ek baare m ek closure he sendkr skta hu!
   
//    function inner2()
//    {
//       let a=14;
//       console.log(a);

//    }
//    function inner3()
//    {
//       // let a=13;
//       ++a
//       console.log(a);

//    } 
//    return inner3; 
// }
// let closure= outer();
// closure();