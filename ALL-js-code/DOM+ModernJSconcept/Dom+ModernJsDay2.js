//DAY2 ALL ABOUT EVENTS AND PHASES COMPLEX BUT I GOT IT!

//6)new topic 
//the event object -
//addeventlistener actually listen kr skta h event jo mai listener/yaani function ke andr leekh ra
//..and wo mai print kraa skta hu.. for tracking

// let temp = document.querySelector("#firsth2");

// // temp.addEventListener("click",function(){
// //     temp.setAttribute("style","color:red ; background-color:green ; cursor:pointer ;");
// // })

// // let temp = document.querySelector("#firsth2");

// // document.addEventListener("click",function(){
// //     temp.setAttribute("style","color:none ; background-color:none ; cursor:none ;");


// temp.addEventListener("click",function(event)
//     {
//         console.log(event);
//     }
//     )


//7th point


// function ok ()
// {

// }




// let target = document.getElementById("yt")

// let new_elem=document.createElement("a");
// target.insertAdjacentElement("beforeBegin",new_elem);
// new_elem.setAttribute=("href","https://www.netflix.com"); //href mae daalna h isko
// new_elem.setAttribute=("target", "_blank"); 
// new_elem.textContent="m here :";

// let new_elem_sec=document.createElement("br");
// target.insertAdjacentElement("afterBegin",new_elem_sec);

// // document.createElement("a");


// target.addEventListener("click", function(kush)
//     {
//         //kush is event here which automatically listener called as
//         //..function() argument gets
//         kush.preventDefault(); //event ko he prevent default krna h

//         target.addEventListener("click",function()
    
//         {
//             // console.log(replace);
//             // target.innerHTML("hii");
//             // window.location.href = "https://www.brazzers.com";
//             // window.location.target="_blank";
//             // new_elem.target="_blank";
            
//             // window.location.assign new_elem;
//             new_elem;

//             // new_elem.target="_blank"; //target is attribute of anchor tag
//             //which is inside new_elem thats why used new_elem.target
//         }
//     );

//         //window.location.href = new_elem.getAttribute("href" , "https://www.google.com" ); // Redirect to new_elem href
//         // window.console.log("okhii");

//     }
// )



//Dec15-24/Sunday


//target property of event is used here

//about target property below
// The read-only target property of the Event interface
//  is a reference //    event.stopPropogation();to the object onto which the event was dispatched. 
//  It is different from Event.currentTarget when the event handler
//   is called during the bubbling or capturing phase of the event.
//   The read-only target property of the Event interface is a reference to
//    the object onto which the event was dispatched. 
//    It is different from Event.currentTarget
//     when the event handler is called during the bubbling or capturing phase of the event.

// let firstelement_div=document.createElement("div");

// function paranumbers(event){
//     console.log(`this is para event`, event.target.textContent ); //click hone pr aayega ye
// }

// //{{{{}}}}
// //working of-> event.target.textContent// means ke event sae mai current event jo b hora ho
// //click or wo maine firstelementdiv pr lgaya with .addeventlistener sae
// //..2nd step us event ke leeye target hae div or div ke sare child or tbhi uska sare child
// //fetch hore like p tag bhee!!
// //{{{{}}}}

// firstelement_div.addEventListener("click",paranumbers); //instead of writing function in addeventlistener
// //i added functionName
// for (let i=0; i<100; ++i)
// {
//     let newparaagain= document.createElement("p");
//     newparaagain.textContent=`hii this is para no :  ${i}`;
//     firstelement_div.append(newparaagain);

//     //newparaagain is target so target.addeventlistener
//     // newparaagain.addEventListener("click",paranumbers) //called inside addeventlistener by justname
// }
// document.body.append(firstelement_div);



//got the point

// let maindiv=document.getElementById("maindiv");
// let paratag=document.getElementById("para");
// let spantag=document.getElementById("span");

// maindiv.addEventListener("click" ,function(event){
    
//     if (event.target.nodeName === "SPAN")//@x1x
//     console.log("hii this is maindiv" + event.target.textContent);
//     // event.sto//    event.stopPropogation();pPropagation();


// }); //event yhaa pr maindiv hae step1
// //uspae target lgaya to kya hoga ke maindiv ke andr ke sb content print hogya bcoz
// //target ke baad .textcontent lgaadeya ...[but textcontent is IMP...] for it to retrieve



// paratag.addEventListener("click" ,function(event){
//     console.log("hii this is paraclicked");
//     // event.stopPropagation();
// },);

// spantag.addEventListener("click" ,function(event){
//     // if (event.target.nodeName === "SPAN") 
//     console.log("hii this is span clicked");
//     // event.stopPropagation();


// },);

//same thing .stoppropogation jesa kaam mae target.nodename se krlunga
// nodename is capital representation of whatentered

//SUMMARY:~~
//WORKING UNDERSTAND
//1)event.target krta hae ke jis target pr maine target
// ex Document orArtilce.addeventlistnerevent.target lgaya
//uske sare text ko sequencially retrieve krdeta hae ye target but i had used target.textContent

//so agr muje para pr click krke span nahi retrieve krna
//although span is inside para
//so i had used nodeName function of target which is function of event see above @x1x

//2)phases mae jb b addevent listener lgaya maine to bydefault
// agr mae addeventlistener ka 3rd argument true nahi use krta to
//addeventlistener trigger hoga bottom child element to top bcoz of Bubbling phase
//if in above code
// of
//div
//p <span> ...i look

//to stop this i can use method of event called  // event.stopPropagation();


//16dec-2k24
//Js day 3 ModernJs+Dom

//revising here modern js day2





// let t1=performance.now();
// let customElementFirst=null;


// function parafunc(event)
// {
//     console.log(`this is para number`, event.target.textContent);
// }
// for (let i = 0 ; i<100; ++i)
// {

//     // console.log(`Para : ${i}`);
//     customElementFirst=document.createElement("p");
//     customElementFirst.textContent=`${i} `;

//     customElementFirst.addEventListener("click" , parafunc)

//     document.body.append(customElementFirst);
// }

// let t2=performance.now();

// console.log(t2-t1);

//17 dec 2k24!

//its also of day2 modern js

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


//using document.fragment concept


let t1=performance.now();
let customElementFirst=null;

// let customElementSecond=document.createElement("div");
let customfragment=document.createDocumentFragment();
function parafunc(event)
{
    console.log(`this is para number`, event.target.textContent);
}

// customElementSecond.addEventListener("click",parafunc)//div mae lga deeya eventlistener instead of paraf
for (let i = 0 ; i<100; ++i)
{

    // console.log(`Para : ${i}`);
    customElementFirst=document.createElement("p");
    customElementFirst.textContent=`${i} `;

    // customElementFirst.addEventListener("click" , parafunc)

    customfragment.append(customElementFirst);
    // customElementSecond.append(customElementFirst);
}

// customfragment.addEventListener("click",parafunc);
//i cant add listener to it it so either create new element div
//or add to document body
document.body.append(customfragment);
document.addEventListener("click",parafunc);
let t2=performance.now();

console.log(t2-t1);
