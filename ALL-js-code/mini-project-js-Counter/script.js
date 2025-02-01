// dekho button tag ke paas khud ka attribut hota h
//attribute means which have properties like style attribute in css
// /..have its own properties

//similiarly attribute hae button but in js iske paas ek 
//  behaviour/method onclick()
//its like eventlistener only



//<><><><><><><><><><><><><>><><><><>
// fundamental ex this is only to make munyaad base stronger of js
// step1 beech wale value ko nikalo

// let mid_Val=document.querySelector("#middleValue");
const mid_Val=document.querySelector("#middleValue");

            //constant is element not value remember! so constant yhaa object
        //ko bnaya bcoz mid_val is object document.queryselector object he return element
    // kregain form of object
// console.log(mid_Val.innerText);

// mid_Val=parseInt(mid_Val.innerText); //string to int

//step2 than increment wala function

//step2  is event target ~[ A top level interface type is called event target]
//.event target yaa interface ko implement kr skta hu 
//mae windows object [dom bom jscore comes under windowsobject]~ seen this part in
//..day 2 modernjs +DOM

//step3
//so i can attach value in middleValue
// let retrieved_plus = document.querySelector("#middleValue"); ~~>bytheway//no need step1 mae he attach krdo

//onclick() button tag ka esa event jiske uprclick krke entire function
// ke cheeze chl rhi h
const decrement = function ()
{
    
    // console.log(mid_Val.innerText);

    value=parseInt(mid_Val.innerText); //string to int
    
    // console.log(`type of mid_value is  : ${typeof(mid_Val)}`);
    // let value = mid_Val;
    // console.log(`type of value is  : ${typeof(value)}`);
    
    // retrieved_plus.addEventListener("click" ,function(){
        value = value-1;

        // value=value.toString()

        // delete retrieved_plus.textContent;
        mid_Val.textContent=value;
    // }) ;
    //from day2 modern js + dom
    //1)addevent listener takes
    //target ~i.e retrievedplus
    //2) than eventype click double click scroll n many
    //3)listener which is finction which is reaction function
    //oneventype its predicate function/callback function
    
}

const increment = function()
{
    //value is local in increment function()
    let value=parseInt(mid_Val.innerText);

    value=value+1;

    mid_Val.innerText=value;
}




//unwrapped class ~industry mae code kholke bnaNa hoga
//kuch level of code pahle se available h ,so kisi ke or se leekha
//code smj aana chaihye

// code leekhna           and            dusrocode smj aana chaihye