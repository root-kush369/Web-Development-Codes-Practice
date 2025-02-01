
// step1




// fetched various stuff from html to make them alive
// 1
// password display is in parallel to copy button
const passworddisplay=document.querySelector("[data-passwordDisplay]")





// 2
// datacopymsg
const datacopymsg= document.querySelector("[data-copyMsg]");

// 2.1

// copybutton
const datacopyButton=document.querySelector("[data-copy]");

// 3
// datalength number
const lengthdisplay = document.querySelector("[data-lengthNumber]");
// console.log(lengthdisplay);

// 4
let inputslider=document.querySelector("[data-lengthSlider]");
// console.log(inputslider);




// 5
// fetching all checkbox
const UppercaseCheck= document.querySelector("#UpperCase");
const LowercaseCheck= document.querySelector("#LowerCase");
const numbersCheck= document.querySelector("#Numbers");
const symbolsCheck= document.querySelector("#Symbols");

// 7
//attributes are captured by [] symbol

const dataIndicator = document.querySelector("[data-indicator]");

// 8
const GenerateButton= document.querySelector(".Generate-Button");

// 9
const checkboxall = document.querySelectorAll("input[type=checkbox]"); //syntax all attribute with 
//type as checkbox syntax is--> input[type=checkbox /name of attribute]
// querySelectorAll ka tarika h input=[type=checkbox] se sb select krlene

// 10
const symbol_db = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
// // symbol
// const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// step2
// started code here



// start value declared and initilized when reload
let password ="";//password value is nothing in start

let passwordlength="10"; //shuru m slider ke upr muje kyaa deekhana h is passwordlength

let checkcount=0; //boxes mai ticked at start is 0

// set color circle to grey

// set password length


// 2.1
// let min=0;
// let max=20;
// uppercase is checked by default. so checkCount = 1
// uppercaseCb.checked = true;

UppercaseCheck.checked=true;/*at start 1st box need to be checked*/
checkcount=1; /*means 1st box is checked for generate password function*/


// let checkCount = 1;
function handleslider()
{
   inputslider.value=passwordlength; //iske beena 1 2 3 4 on tick nahi hoga if slider is on 0 initlially
    //for slider this needed when using special condition in handlecheckbox()
   //..below
   //inputslider gets value automatically on front and back !
//    console.log(inputslider); 

    lengthdisplay.innerText=passwordlength;

    
    const min = inputslider.min; /*these min and max is getting from html input tag attributes min and max*/
    const max = inputslider.max;
    inputslider.style.backgroundSize = ((passwordlength-min)*100/(max-min)) + "% 100%";
    /*here brain is applied to calculate formulae be tricky bro html css is fine but js apply 
    1000% of brain*/
    
    //..........................................................................
    //**ex passwordlength =10 , min=0, max=20 */
    //10 - 0 =10
    //10 *100=1000
    //20-0=20 -->1000/20 =50

    //this is formulae and gives percentage on which step i would be when i am on 10 i.e 50 %
    //..........................................................................



    //..........................................................................
    // NOTE
    // The + "% 100%" at the end formats the result into CSS background-size property value,
    //  where the first percentage is the width (how much of the background image or color 
    // should show horizontally), and 100% ensures the height covers the entire height 
    // of the slider track.
    /*backgroundSize increase width and height*/
    //..........................................................................

}
handleslider(); //so at start on scroll bar =10 should look and on number slider 10 should come

// 2.2

// let color="gray";
function setblinkcolor(color)

{
    // dataIndicator.setAttribute("background-colorgreen");
    // dataIndicator.style.cssText=`backfunction kush(val)
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
// console.log( temp());ground-color: ${color} `; /*had to write in sameline*/ 
    dataIndicator.style.cssText =`background-color: ${color} ; box-shadow: 1px 1px 8px 4px ${color} , -1px -1px 8px 4px ${color} ` ; /*backtick and placeholder concept*/
    // box-shadow : 2px 2px 2px 1px red , -2px -2px 21px 1px red `;
}
setblinkcolor("#ccc");

// 3
// random integer


// let max=20
// let min=0 ;
function randomIntger(min , max)
{
    console.log("max ech time : ", max);
    // Math.random() * max-min; //number between 0 and 1 //possibility this is floating so round off it

    // Math.floor( Math.random()* max-min ) ; //so use math.floor //ye 0 se max-min h // i need min - max

    // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
    let randomNUmber= Math.floor( Math.random() * (max-min + 1) ) + min;
    console.log("max-min each time : ", max ,"-",min , " = " , max-min);
    //working a) random() 0 se 0.99 tk randome dega like 0.1,0.2,0,3 ...0.0
    //b) suppose max is 20 min is 0
    // so every count should be included
    //suppose max is 5 /min is 1 == 5-1=4 so 4 number came + 1 total 5 


    //c)Imp!! + min done so count stars from min -> i.e 1
    //suppose math.random= 0.3 *
    //max is 5 min is 1 ==>  5-1+1=5 0.3*5=1.5
    //min is 1 =2.5 so 2is ans ! as randomeNumber
    // 5-1+5 =0.1*5=0.5=1.5=1 randomNUmber so ans is 1 so ans can start from minimum thats why added min!
     


   
    return randomNUmber;

} 
// console.log( randomIntger(0,20) );


function GenerateRandomNumbers()
{
    return randomIntger(0,9);//max ,min sended as actualArguments
}
console.log(GenerateRandomNumbers());

function GenerateRandomUpperCase()
{
    return String.fromCharCode(randomIntger(65,91) );//max ,min sended as actualArguments
}
console.log(GenerateRandomUpperCase());

function GenerateRandomlowerCase()
{
    return String.fromCharCode( randomIntger(97,123) );//max ,min sended as actualArguments
    //fromCharcode converts numbers to chracter acc to ASCII Table but wo wapis aakr hoga
    //jb randomInteger call hojayega

}
console.log(GenerateRandomlowerCase());


function GenerateRandomSymbols()
{
    // console.log("symvvvvvvvvvvvvvv db:", symbol_db);
    const randNum = randomIntger(0,symbol_db.length ); //max ,min sended as actualArguments
    // console.log("symb db each time : ",symbol_db.charAt(randNum) );
    return symbol_db.charAt(randNum); //charAt is function that find positio/index of character at that index
    // return symbol_db[randNum];
}
console.log(GenerateRandomSymbols());


// function randomIntger







inputslider.addEventListener("input" , function(event){
    passwordlength = event.target.value; 

//working:~ 1) input slider pr listener lgaa wa
//.. ab uske upr event lgna means event target  slider ke value fetch krega
//means hoti rahege thats where use of target cameup fetch value from
//..input slider and send to passwordlength

//password display ko passwordlenght ke neeche deekhane ko handle slider ko call keeya

//and wo handle slider function ke andr jayega bcoz of call each time

//else instead of function i can do this ~~> // lengthdisplay.textContent=passwordlength;

    handleslider(); 
})




function calcStrength()
{
    //at start all variables as false
    let hasupprcase= false;
    let haslowercase= false;
    let hasnumber= false;
    let hassymb= false;

    if(UppercaseCheck.checked) //checked function actually check krta h form m input box ke andr
    //and give boolean ouptut t or f
    {
        hasupprcase= true;
    }
    if (LowercaseCheck.checked)
    {
        haslowercase=true;
    }
   if (numbersCheck.checked)
    {
        hasnumber=true;
    }
   if (numbersCheck.checked)
    {
        hassymb=true;
    }

    // console.log("hucase" , hasupprcase);
    // console.log("hLwcase" , haslowercase);
    // console.log("huNumb" , hasnumber);
    // console.log("husymb" , hassymb);

    // console.log("cccccccccccccccccccccccccccc");
    //my logic own
    if (hasupprcase && haslowercase && (hasnumber || hassymb ) && passwordlength>=8)
    {
        console.log("hucase" , hasupprcase);
        console.log("hLwcase" , haslowercase);
        console.log("huNumb" , hasnumber);
        console.log("husymb" , hassymb);
        console.log("strongest password..");
        // dataintor.setAttribute("style" ,"backgroundcolor : none ; ");
        // dataintor.setAttribute("style" ,"backgroundcolor : green ; ");
        // dataIndicator.style.cssText ="background-color:green";
        setblinkcolor("#0f0");

    }
    else if ( (hasupprcase || haslowercase ) && (hasnumber || hassymb) && (passwordlength>=6) )
    {
        console.log("hucase" , hasupprcase);
        console.log("hLwcase" , haslowercase);
        console.log("huNumb" , hasnumber);
        console.log("husymb" , hassymb);
        console.log("medium passwcalcStrengthord..");
        // dataIndicator.setAttribute("style" ,"backgroundcolor : yellow ; "); 
        // dataIndicator.style.cssText ="background-color:yellow";
        setblinkcolor("#ff0");
           

    }
    // else if ( (hasupprcase && passwordlength<=6) || (haslowercase && passwordlength<=6) || (hassymb && passwordlength<=6) || (hasnumber  && passwordlength<=6) )
    else
    {
        console.log("hucase" , hasupprcase);
        console.log("hLwcase" , haslowercase);
        console.log("huNumb" , hasnumber);
        console.log("husymb" , hassymb);
        console.log("weakest password...");
        // dataIndicator.setAttribute("style" ,"backgroundcolor : red ; ");
        // dataIndicator.style.cssText ="background-color:red";
        setblinkcolor("red");
    }

}


function handlecheckBoxChange()
{
    // checkboxall.addEventListener("check",even)
    // let counter=0;
    checkcount = 0

    //used for each loop so in all checbox i can track/or watch if checked than add 1 ot remove 1
    //so used foreach which has [predicatefunction/innerfunction/callbackfunction functionality]
    //with formal paramter inside predicate function like foreach inside foreach used function
    //and inside function keyword used cbox which acts as actually actual argument and maps itself
    //automatically to all value to predefinedmethod/fucnt like forEach which is applied to
    //checkboxall variable so finally map to it
    //cbox-->maps to foreach -->which mapss to --> checkboxall variable!!

    checkboxall.forEach(function(cbox){
        if (cbox.checked)
            {
                console.log("checked...");
                checkcount+=1;
            }
            console.log("counter : ", checkcount);
        });
        // return counter;

        // so all 4 tick box if ticked so automatically number mae change aajaye so used checkcount
        //value and called handleslider to show effect on on slider and numberig above it
        if (passwordlength < checkcount)
        {
            //suppose password length is 0 and check count is 1 so automatically slider and numbering above it will increase
            passwordlength=checkcount;
            handleslider();
        }
    
    }
    // console.log("counter: " , counter);
// console.log( handlecheckBoxChange() );


// eventlisteners
checkboxall.forEach(function(cbox){
    cbox.addEventListener("change" , handlecheckBoxChange );
})
    
// console.log("hedehd:",handlecheckBoxChange); //body print krra to uske functionality b print krega


//to genrate a shuffle paswword
function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
      //random J variabke, second index with i variable find out using random function
      //than do swap
      const j = Math.floor(Math.random() * (i + 1));
      //swap number at i index and j index
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
  }


  // console.log("stating the journey");

  //lets start to journey to find new password

  //remove old password
  
  // console.log(GenerateButton);
// GenerateButton.textContent="kush";
let funarray = [] ;
// let password="";
GenerateButton.addEventListener("click", function(event){
    // console.log(event.target.textContent);
    
    // console.log("defre : ",handlecheckBoxChange());
    // console.log("defre : ",typeof handlecheckBoxChange());
    // console.log("defre : ",typeof (1));
    
    if (checkcount == 0) { //means if no tick return back not generate password
        return;
    }
    
    
    if (passwordlength < checkcount) { //brabar hoga checkcount or passwordlength iske need ne h !
        passwordlength = checkcount;
        handleslider();
    }


    //each time reset password as generate clicked
password = "";
 

// why this funarray taken can i do without it?
//yes but lets see why its used?
//so on each click of generate button for always this 4 tick should work but
//till now they will be as in order as they clicked upper lower number symbol so used shuffle()  above

let funArray = [];   
    if (UppercaseCheck.checked)
    {
        //  passworddisplay.value= GenerateRandomUpperCase;
        funArray.push(GenerateRandomUpperCase);
    }
    if (LowercaseCheck.checked)
        {
            //  passworddisplay.value= GenerateRandomUpperCase;
            funArray.push(GenerateRandomlowerCase);
        }
     if (numbersCheck.checked)
    {
        //  passworddisplay.value= GenerateRandomUpperCase;
        funArray.push(GenerateRandomNumbers);
    }
    if (symbolsCheck.checked)
        {
            //  passworddisplay.value= GenerateRandomUpperCase;
            funArray.push(GenerateRandomSymbols);
        } 

        
         //generate password
//compulsory addition which is ticked 
    for (let i = 0 ; i<funArray.length ; i++)
        {
            password += funArray[i](); //iska means funarray ke 0 se  i index pr jo h usko call krdo
        }

        
    //rest complete random integers until length
    for (let i = 0 ; i <passwordlength-funArray.length; i++ )
    {
        let randIndex = randomIntger(0 , funArray.length -1); // remaining list will have 0 to 4 as randomnumbers
        // i can call randomother thing instead of random integer too!
        //funarraylenght-1 so last index du not out of index!
        console.log('randindex:',randIndex);
        console.log('randindex-type:',typeof randIndex);
        password += funArray[randIndex](); //iska means funarray ke 0 se   randindex tk jo h usko call krdo()
        //any random integers
    }
    
    password= shufflePassword(Array.from(password));
// console.log("fp:",finalpassword);
    passworddisplay.value=password;
    calcStrength();
});


 
let iamclearbutton=document.querySelector(".Clear-Button");
console.log(iamclearbutton);
iamclearbutton.addEventListener("click",function(event){

    // password="";
    passworddisplay.value="";
    passwordlength=10;
    handleslider(); 
    setblinkcolor("#ccc");
})

//NOTE ~~~~
// syntax of function is function keyword 
// than namee
// than () function kush()
// {

// }

// NOTE ~~~~
//  now async function syntax is same just use async in forward
// aysnc function kush()
// {
    // ....code
// }


async function copybuttonclick()
{
    let retrievedParentofcopyimg= document.querySelector(".password-copybutton")
    let retirevedCopyimg=document.querySelector(".copyimg");
    try
    {
        await navigator.clipboard.writeText(passworddisplay.value);
            
      
        datacopymsg.innerText="Copied!";
        datacopymsg.style.cssText="box-shadow: 1px 1px 4px 4px rgb(157, 231, 243) ,  -1px -1px 4px 4px rgb(237, 108, 185); background: linear-gradient(90deg, var(--lt-violet) , var(--lt-violet2)) ;  color:white ; cursor:pointer ;";

   
        retrievedParentofcopyimg.removeChild(retirevedCopyimg);
        
        var newimg=document.createElement("img"); //used var so i can remove it inside setTimeout function
        //let lekr nahi horha thaa.
        newimg.setAttribute("src", "check-markk.png" );
        newimg.setAttribute("height", "24px" );
        newimg.setAttribute("width", "24px" );
        newimg.style.cssText="  pointer-events:none ;"; 
    
        // background-color:red ;
        // newimg.style.cssText="background:none ;";
        // newimg.style.cssText="pointer-events: none;";
        retrievedParentofcopyimg.append(newimg);
        retrievedParentofcopyimg.style.cssText= "pointer-events:none";

        // retrievedParentofcopyimg
        
        // datacopymsg.classList.add("include-tick");
        // datacopymsg.classList.remove("copied-gone");
     
        
    }
    catch(e)
    {
        console.log("error while copying is : ",e);
        datacopymsg.innerText="failed";
        
    }

    

    // datacopymsg.classList.add("copied-gone")
    setTimeout(function(){
        //taki htaa do in the end
        // datacopymsg.classList.add("copied-gone");
        datacopymsg.innerText=""; 
        datacopymsg.style.cssText="";
        // if (retrievedParentofcopyimg.childNodes === newimg)
        // {
            retrievedParentofcopyimg.removeChild(newimg);
        // }
        retrievedParentofcopyimg.append(retirevedCopyimg);
        retrievedParentofcopyimg.style.cssText= "pointer-events:true";
    },1500);  
}





datacopyButton.addEventListener("click",function(event){
    if(passworddisplay.value)
    {
        copybuttonclick();
    }
})

// passworddisplay.value=11;

//this Array keyword creates array
//array is predefined array object to use its all behaviour/Methods/function