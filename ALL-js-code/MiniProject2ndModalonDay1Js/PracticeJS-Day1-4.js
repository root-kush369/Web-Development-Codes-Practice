// note

// So, to answer your question directly: getElementsByClassName and getElementsByTagName always return an HTMLCollection, whereas getElementById returns a single element or null.


// Day1-2 covered
// let x = document.querySelector(".kush");


// x.addEventListener("click",function(event){

//     event.preventDefault();
//     console.log("jaiho");
    
//     // console.log("jaihooo");
// });

// Day3


// concept of phases of event

// let divelement=document.createElement("div");
// // let final=0;
// function kush() 
// {
//     for (let i = 0 ; i <100; ++i)
//     {
//         let newelement=document.createElement("p");
//         let temp=newelement.textContent=`this is para ${i}`;
//         // let temp=document.TEXT_NODE=`this is para ${i}`;

//         newelement.append(temp);
        
//         // console.log(i);
//         // console.log(i);

//         // `${i}`;
        


//         newelement.addEventListener("click",function(event){
//             // console.log(event);
//             console.log(`para ${i} got clicked just now...`);
//         });
//         let final=divelement.append(newelement);
//         // console.log(final);//undefined
        


//         document.body.append(final);
//     }
// }
// kush();
// // console.log( kush() );


// let t1=performance.now();

// let customElementFirst=null;

// function parafuncOne(event)
// {
//     if(event.target.nodeName==="P")
//     console.log(`this is para number`, event.target.textContent);
// }

// function parafuncSec(event)
// {
//     if(event.target.nodeName != "DIV")
//     {
//         console.log(`this is div clicked`);
//     }
// }


// let customElementSecond=document.createElement("div");

// customElementSecond.addEventListener("click" , parafuncSec);

// // let 
// for (let i = 0 ; i<100; ++i)
// {

//     // console.log(`Para : ${i}`);
//     customElementFirst=document.createElement("p");
//     customElementFirst.textContent=`${i} `;
    
//     customElementFirst.addEventListener("click" , parafuncOne);
    

//     customElementSecond.append(customElementFirst);
// }

// document.body.append(customElementSecond);
// //document mae directly ne add krsktae bcoz uske paas html element hota 
// //h always so add to document's body
// // document.body.append(customElementSecond);

// let t2=performance.now();

// console.log(t2-t1);


// let t1=performance.now();


// // step1
// let firstelement=document.createElement("div");
// console.log(firstelement);
// // let contentOne=document.TEXT_NODE="hii this is firstelement";
// // firstelement.append(contentOne);

// // step2
// function clickedPara(event)
// {
        
//     //    console.log(`para number  ${event.target.textContent} clicked `)
//     if (event.target.nodeName === "DIV") //imade differentiation
//     {
//         console.log("hii");
        
//     }
//     else
//     console.log(`${event.target.textContent} : clicked `);

//     // }); //event yhaa pr maindiv hae step1
//     // //uspae target lgaya to kya hoga ke maindiv ke andr ke sb content print hogya bcoz
//     // //target ke baad .textcontent lgaadeya
//     // console.log(`${event.target.textContent} : clicked `)
//     // [but textcontent is IMP...] for it to retrieve
    
//     // event.stopPropagation();
// }

// for (let i=0 ; i<100 ; ++i)
// {
//     let newPara=document.createElement("p");
//     // console.log(newPara.append.TEXT_NODE=`hii this is para number ${i}`);
//     // let temp=document.TEXT_NODE=`hii this is para number ${i}`; 

//     let temp=document.textContent=`hii this is para number ${i}`; 
    
//     newPara.append(temp);

//     // console.log(newPara);

//     // step3;

//     // newPara.addEventListener("click",function(){console.log(`para clicked ~> ${i}`)});
//     // document.body.append(newPara);

//     firstelement.append(newPara);
//     // document

// }
//     document.body.append(firstelement);

// firstelement.addEventListener("click" , clickedPara);

// let t2=performance.now();

// console.log(t2-t1);




// Day3 concept reflow repaint concept ko reduce krna just above wale
//ex se using document.fragment


// let t1=performance.now();


// // step1
// let firstelement=document.createElement("div");
// console.log(firstelement);
// // let contentOne=document.TEXT_NODE="hii this is firstelement";
// // firstelement.append(contentOne);

// // step2
// function clickedPara(event)
// {
        
//     //    console.log(`para number  ${event.target.textContent} clicked `)
//     if (event.target.nodeName === "DIV") //imade differentiation
//     {
//         console.log("hii");
        
//     }
//     else
//     console.log(`${event.target.textContent} : clicked `);

//     // }); //event yhaa pr maindiv hae step1
//     // //uspae target lgaya to kya hoga ke maindiv ke andr ke sb content print hogya bcoz
//     // //target ke baad .textcontent lgaadeya
//     // console.log(`${event.target.textContent} : clicked `)
//     // [but textcontent is IMP...] for it to retrieve
    
//     // event.stopPropagation();
// }

// let newfragmentforpara= document.createDocumentFragment();
// for (let i=0 ; i<100 ; ++i)
// {
//     let newPara=document.createElement("p");
//     // console.log(newPara.append.TEXT_NODE=`hii this is para number ${i}`);
//     // let temp=document.TEXT_NODE=`hii this is para number ${i}`; 

//     let temp=document.textContent=`hii this is para number ${i}`; 
//     newPara.append(temp);
//     newfragmentforpara.append(newPara); /*can add as many p tag or any tag
//     still count as 1 refactor and repainter*/

  
// }
//     firstelement.append(newfragmentforpara);
//     // document.body.append(firstelement); /*now rather div i can attach it to newfragment like virtual dom virtual htmlcss -->converteed intoJSobject*/ 
//     document.body.append(firstelement);
//     // /and than i can apply eventlistener or dom or div again/

  
// firstelement.addEventListener("click" , clickedPara);

// let t2=performance.now();

// console.log(t2-t1);



// ///


// //////sosos


// // let t1=performance.now();
// // let customElementFirst=null;

// // // let customElementSecond=document.createElement("div");
// // let customfragment=document.createDocumentFragment();
// // function parafunc(event)
// // {
// //     console.log(`this is para number`, event.target.textContent);
// // }

// // // customElementSecond.addEventListener("click",parafunc)//div mae lga deeya eventlistener instead of paraf
// // for (let i = 0 ; i<100; ++i)
// // {

// //     // console.log(`Para : ${i}`);
// //     customElementFirst=document.createElement("p");
// //     customElementFirst.textContent=`${i} `;

// //     // customElementFirst.addEventListener("click" , parafunc)

// //     customfragment.append(customElementFirst);
// //     // customElementSecond.append(customElementFirst);
// // }

// // // customfragment.addEventListener("click",parafunc);
// // //i cant add listener to it it so either create new element div
// // //or add to document body
// // document.body.append(customfragment);
// // document.addEventListener("click",parafunc);
// // let t2=performance.now();

// // console.log(t2-t1);



//************************************************************** */
//Day2 visualisationOfPhasesOfevents

//before that remove event listener
// let x = document.querySelector(".kush");


// function ok (event){

//     event.preventDefault();
//     console.log("jaiho");
    
//     // console.log("jaihooo");
// }

// x.addEventListener("click",ok);


// x.removeEventListener("click" , ok);


// let retrieve= document.getElementsByClassName("kush");
/*nonononononote~~>not worth bcoz it return object inform of html collection
only tagname and id is worth to retrieve by getelementbyid and tagname*/

// let retrieve= document.querySelector(".kush");
// console.log(retrieve);

// retrieve.addEventListener("click",function(event){
        
//     event.preventDefault();
//     console.log("hii");
// } )





//VVVVVVimp class focus here
//Day4 direct async await complex part ~promise chaining 
//sync and async function
//resolve/fulfilled  reject/unfulfilled
//async await
//ferchAPI


//will know about phases of events inside it
//capturing-->testing-->bubbling




//>>>>>>>>>sync
// function kush()
// {
//     console.log("IBD..")
// }
// kush();


//>>>>>>>>>>>>>>>>>async()


//
// setTimeout(function(){
//     console.log("kushbhardwaj...");

// },3000);




//before lets do 1 thing


//Day2 bhot imp h ye for phases of events ko 1 jhatke m smjJaana
// // eventphases

// let heading_retrieved=document.querySelector(".headin");
// let span_retrieved=document.querySelector(".spa");

// heading_retrieved.addEventListener("click",function()
// {

//     console.log("heading is clicked");
// },true)


// span_retrieved.addEventListener("click",function(event)
// {

//     console.log("span is clicked");
//     // event.stopPropagation();
// })

// /*phases of events maine bhot mehnt krii h kush isme
// top to bottom
// capture
// target

// bubbling ke time activate hota h back jaane pr eventlistener~type of top level interface
// //isko object like of windows[dom+bom+aljsCorecode[]]se implement krte h
// //means in a sense addeventlistenr mae ye windowsobj[dom,bom alljscore[code] ] use hota h

// */



//so lets start actually

// direct async await complex part ~promise chaining 
//sync and async function
//resolve/fulfilled  reject/unfulfilled
//async await
//ferchAPI
// promisereturns async function in form of object for sure!

//here for sure eventloop occuring

//IN JS MAXIUM THINGS ARE OBJECTS ONLY

//KUSH BHAUUUJI EX1
// let firstpromise= new Promise(function(resolve , reject){

//     setTimeout(function(){
//         console.log("kush");
//     },);

//     resolve("firstpromise gonna complete after 2second..");
// });
// console.log(typeof(firstpromise));
// console.log(firstpromise);

// firstpromise.then(function(){
//     let secPromise= new Promise(function(resolve,reject)
//     {
//         setTimeout(function(){
//             console.log("Bhardwaj");
//         },);
    
//     resolve("Secpromise gonna complete after 2second..");

//     });



//     secPromise.then(function(){
//         let ThirdPromise = new Promise(function(resolve,reject) 
//         {
//                 setTimeout(function(){
//                 console.log("sharma");
//                 },);
//                 resolve("ThirdPromise gonna complete after 2second..");
//         });
       
       
//         ThirdPromise.then(function(){
//             console.log("ended...");//synccode //first execution
//         });
//     });
        

//     });

// so in //KUSH BHAUUUJI EX1 i cant control flow of execution



//so poweful async await

//NOT-WORTH CODE BELOW ASYNC AWAIT USED THEN CATCH
//BCOZ

//ASYNC AWAIT ALREADY RETURN PROMISE AUTOMATICALLY AND USE INTERNAL
//RESOLVE/FULFILL,REJECT/NOTFULFILL AND METHODS THEN AND CATCH
// async function improveOverPromiseChain()
// {   
//     let fp=null;
//     let sp=null;
//     let tp=null;


//     let firstpromise= new Promise(function(resolve , reject){

//             setTimeout(function(){
//                 console.log("kush");
//             },);
        
//             resolve("firstpromise gonna complete after 2second..");
//         });
//         // console.log(typeof(firstpromise));
//         // console.log(firstpromise);
        
        
//         fp=await firstpromise;
        
//         // firstpromiseThen
//         firstpromise.then(function(){
           
           
           
//         //    2nd promise
//             let secPromise= new Promise(function(resolve,reject)
//             {
//                 setTimeout(function(){
//                     console.log("Bhardwaj");
//                 },);
            
//             resolve("Secpromise gonna complete after 2second..");
        
//             });
            
//             // SecPromiseThen

//             secPromise.then(function(){
//                 let ThirdPromise = new Promise(function(resolve,reject) 
//                 {
//                         setTimeout(function(){
//                         console.log("sharma");
//                         },);
//                         resolve("ThirdPromise gonna complete after 2second..");
//                 });
            

//         });
       
        
        
            
                
                
//                 // 3rdPromise
//                 ThirdPromise.then(function(){
//                     console.log("ended...");//synccode //first execution
//                 });
//             });
                
        
          
        


//             // async await dont allow ig then &catch method use

//             // let fp=await firstpromise;
//             // let sp=await secPromise;
//             // let tp=await ThirdPromise;

//             return[tp,sp,fp];

// }

// improveOverPromiseChain();




//finalcode


//improvement over promiseChaining+resolve,reject+thenANDcatch concept
// async function kushWeather() //takes promises code inside
// {
//     let sataunWeather = new Promise(function(resolve,reject){
//         {
//             setTimeout(function(){
//                 console.log("3deg..of sataun");
//                 resolve(true);   
//             },10000);
//         }
        
        
//     });
//     let Sw= await sataunWeather;
//     let paontaWeather =new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("7deg.. of paonta");
//             resolve(true); 
//         },4000);
//     })
    
//     let Pw= await paontaWeather;
    
//     let doonWeather= new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("temp is 10deg..of doon");
//             resolve (true);
//         },2000);
//     });
//     /*await cant be written inside promise they need to be inside
//     predefined async function*/
//     let dooN= await doonWeather;



//     return[dooN,Pw,Sw];


//     // us hisab se function ko upr rkh de jisko pahle execute krwana
//     //+ use resolve inside settimeout if
//     //  [not use outside of settime ~but  body of promise function
//     //..predicate bcoz it not gonna work
// }

// kushWeather();


//ex2


// async function kushWeather()
// {
// let SataunMausam = new Promise(
//    function(resolve){
//       setTimeout(function()
//       {
//          console.log("temperature is 7deg");
         
//          resolve(true);
//         },17000);
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
//       },3000)});

//       // let SataunW=await SataunMausam;
//       let PaontaW=await PaontaMausam;
//       // console.log(PaontaW);
//       return [PaontaW,SataunW];
//     };
    
//     kushWeather();





// new topic
//now concept of fetchapi concept

//retrieving/request/get method!

// ex1 blocked
// async function anime_quotes()
// {
//     // let myapi = await fetch("https://animechan.io/api/v1/quotes/random"); //blocked-quotes api


//     let after_Fetch= await myapi.json();
//     console.log(after_Fetch);
// }
// https://api.waifu.im/search
// anime_quotes();


// ex2

//requestingAPI
// async function anime_image_search()
// {
//     let myapi = await fetch("https://api.waifu.im/search"); //blocked-quotes api


//     let after_Fetch= await myapi.json();
//     console.log(after_Fetch);
// }

// anime_image_search();
// WHATS RESTAPI --CHECK HW


//smallex to create own API and fetch it
//to understand JAVAscript-Object-Notation



//Point2 //Requesting/request/post method!

//
// async function details()
// {
// let student_Details=
// {
//     method:"POST", /*this is relevant backend public API place*/

//     body : JSON.stringify({

//         fname:"shine",
//         lname:"sharma",
//         okk : function right()
//         {
//             console.log("eminem...");
//         }
//     }),
// //          //ye wala concept baad mae dekehneg jisme argument ke basis pr back end sae data aayega
// 	//ifelse use krna
// //          // weatherall : function weather()
// //          // {
// //          //    if (location == "HP")
// //          //    {
// //          //       return "3deg Celsius...";
// //          //    }
// //          // } 
// //       }),



//     headers: {
//                  'Content-type': 'application/json; charset=UTF-8',
//               },
// }


// //retrieve

// let SDetails= await fetch("https://jsonplaceholder.typicode.com/posts",student_Details);
// let finalOutPut=await SDetails.json(); //rule to convert backend string to jsonhere 
// // bcoz backend mae code string se in computer hardwaree converts string to equivalent binary ascii code

// console.log(finalOutPut);
// }


// details();


//will see more about api in future