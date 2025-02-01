// //predefined objects 
// //mathsobject
// //string
// //datetime

// //literals string by ''
// //object made by{}
// //template literal backtick symbol``

// //Array se start krte hae

// //lets create array by

// //*********declared and initlized
// // let arrayone=[1,2,'kush',3,'sharma'];

// //**********access mechanism
// //by slicing operator ofcourse
// // console.log(arrayone[4]);
// // console.log(arrayone[45]);//undefined


// //**********searching
// //by indexOF //tells index by searching whether there or not
// //if not than -1

// //by include~give true or false->boolean output on searching
// //..whether there or not

// // console.log(arrayone.includes('kush') );
// // console.log(arrayone.includes('bhardwaj'));
// // console.log(arrayone.indexOf(1));
// // console.log(arrayone.indexOf('bhardwaj'));
// // console.log(arrayone.indexOf('sharma'))



// //>>>>>alteration--Or--adding values in
// //end ->push function of array object

// //begin->unshift function of array object
// //middle->splice function of arrray object


// // let arrayone=[1,2,'kush',3,'sharma'];

// //end push
// // arrayone.push(44,45,46);

// // console.log(arrayone);

// //middlepush -->middle mae slice means splice krdo-->thats how to remember

// // arrayone.splice(2,0,22,99,11);
// // console.log(arrayone);
// // console.log(arrayone[2]);

// //start-push--> shift nahi unshift kro to add in front

// // arrayone.unshift('google',"fang")
// // console.log(arrayone);
// // console.log(arrayone[1]);


// //<><><><><><><><><><><><><><><><><><><><><><><><><><><>
// //part2 array -> this searching in array dont applies on array of object
// //so there callback() or predeciate means kis function ko as input dunga and uske answer(true or false )pr mera 
// //..entire array-object depend hoga


// //when creating array of object its just individual object
// //on memory location whose datatype is defined by mainumbrella
// //let arrayOFobject


// //>>>>>>>>>>creation
// // let arrayOFobject=[ x={fname:'kush',lname:'sharma',},
// //                     y={occupa:'SDE'},
// //                     z={future:'Billionare'}    ,


// //     ]

// //>>>>>>>>>>accessing
// // console.log(arrayOFobject[2]);


// //>>>>>alteration--Or--adding values in reference variable
// //..array object

// //

// // >>creation /declaration AND assignment/initlizing

// //i can create array of object without storing it in variable
// // x y or z
// let arrayofobject=[

//     x={ fname:'kush',
//         lname:'sharma',
//         occupation:function occup()
//         {
//             console.log("proper SDE role..");
//         }
//     },

//     y={ fname:'Rahul',
//         lname:'sharma',
//         occupation:function occup()
//         {
//             console.log("proper Accoun role..");
//         }
//     },
//     z=
//     {
//         fname:"Rajat",
//         lname:'Dalal',
//         occupation:function occup()
//         {
//             console.log("National Powerlifter and Fitness Coach..");
//         }
//     }

// ]


// // console.log(arrayofobject[2]);

// //adding values
// //1>end

// arrayofobject.push(a={
//     fname:"Raj",
//     lname:'oberoi',
//     occupation:function occup()
//     {
//         console.log('business Man...');
//     }
// })

// // console.log(arrayofobject[3].occupation());


// //2>adding value mid

// //syntax of splice is 
// //which index to add
// //deletecount->than delete any element of that index
// //than what element to add

// //if i add suppose 1 in deletecount ~~> than that entire
// //..entry or element is deleted else shifted
// arrayofobject.splice(1,1,
//     b={
//     fname:"Nora",
//     lname:'singh',
//     occupation:function occup()
//     {
//         console.log('Acctress ...');
//     }
// })
// // console.log(arrayofobject);
// // console.log(arrayofobject[2].occupation());


// //adding valye/item in start -->by unshift function

// //
// arrayofobject.unshift(
//     c={
//         fname:'Elon',
//         lname:'Musk',
//         occupation:function occup()
//         {
//             console.log('Ruling World with most richest man due to top profitable companies like SPACEX ,TESLA, TWITTER/X,OPENAI(shares) ');
//         }
//     }
// )
// // arrayofobjectconsole.log(arrayofobject);
// // console.log(arrayofobject[0].occupation);
// // console.log(arrayofobject[0].occupation());

// //creation done
// //accessing done
// //adding done
// //now ->searching/finding by callback functions



// //
// // A predicate function is a function that returns a single value of either TRUE or FALSE.

// //SEARCH way 1 by writing predicate function
// // let temp= arrayofobject.find(
// //         function(c) //<<<<this is predeciate function
// //         {
// //             return c.fname === 'Elon'; 
// //          }
// // )


// //  Working...
//                 //step1)predeciate function  here like function(c)
//                 // will give T or F bcoz predicate function usually
//                 //..has logic of comparison..


// //             //step2than it returned back that entire object name of predicate function
// // if t(true) encounter inside predicate function logic  arrayofobject.find 
// // thats how object get to find function of arrayofobject
// //and finally stored in temp

// //             //step3finally print it





// //     console.log(typeof(temp));
// //     console.log(temp);



// //SEARCH way2 by => or ==> function operator
// // let temp=arrayofobject.find(c => c.fname=="Elon");   
// //it means c object goes to its property c.fname and check c.fname=='Elon'; 
// // console.log(temp);

// // let temp1= arrayofobject.find(
// //     function(obj1) //obj1 is like iterator here not like 
// //     // array i cant use subscript with it
// //     {
    
// //     return  obj1.fname ==='kush' && obj1.lname === 'sharma' 
    
//     //#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//     // giving error-->return arrayofobject[2].fname === 'Nora' ;
//     //not possible bcoz may be 
//     //even if arrayofobject[2].fname is Nora
//     //and
//     //==='Nora' they not pointing to same refrence

//     //but arrayofobject as whole
//     //and arrayofobject individual items have same refrence
//     //but 'Nora'===arrayofobject[2].fname may not
//     //..having same refrence
//     //#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//     // in arrayofobject;
// //     }
// // )   //here also c/c++ rule no need to apply {}when 1 line not applies

// // console.log(arrayofobject[2].fname);
// // console.log(temp1);  
// // console.log(arrayofobject);



// //will try when i will be back to use in or .fname specific values and get true or false


// let obj2=[

//     {
//         fname:'kush'
//     },
//     {
//         fname:'rahul',
//     },
//     {
//         fname:'kwin',
//     }

// ]

// // ##@ok
// let tempp= obj2.find(function(check)
// //check gets capability of obj2 !
//     {
//         return check.fname==='kush';
//     }
// )

// console.log(tempp);

// //point @ok can be written as

// //using arrow function for more redability 
// let tempp2=obj2.find (ok=> ok.fname === 'kwin')
// //if  inside array 2 object than 2 parameter or 1 object
// // than 1 paramter like ok
// //if 0 object than 0 parameter than like this to write 
// //..let tempp2=obj2.find()=>

// // agr single parameter h actual parameter like ok
// //remove ( if single parameter)
// //  remove curly braces if single parameter
// //return automatically happens if its true than object is written


// //ok gets capability of obj2 !
// console.log(tempp2);

//part2 array 
//part a ->creation(declaration,initlization/assignment,accessingadding)
//part b-> Searchin Done for array of [primitve data type and objects]
//partc)-->removing/deletion{
// 3ways->end pop method
// beginning->shift method se
// middle se->splice sae (just count dedo wha)
// }



// //<><><><><><><><><><><><><><><><><><><><><><><><><><><>
// //<><><><><><><><><><><><><><><><><><><><><><><><><><><>


//Dec-1-24 JS day3
//array again practice for better muscle memory
//--is a reference type variable/DS

//for primitive and objects{}


let xarray =[1,2,3,'kush','sharma']; //creation and assignment

//accessing

// console.log(xarray [0]);
// console.log(xarray );

//Updation
//start
// xarray.unshift(99,100,101);

// //Middle
// xarray.splice(3,0,'i came in second');

// //End

// xarray.push('a','b','c');

// console.log(xarray);

//searching

//indexof and include
// console.log( xarray.indexOf('kush') );
// console.log(xarray.includes('sws'));

/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><> */
//array of objects

//1>creation
let yarray=[

    {fname:"kush",
        lname:'sharma',
        occup:function occupation()
        {
            console.log("aspiring  full stack developer...");
        }
    },
    {
        fname:"raj",
        lname:'oberoi',
        occup:function occupation()
        {
            console.log("aspiring Business Hunk...");
        }
    },
    {fname:"Pawan",
        lname:'Singh',
        occup:function occupation()
        {
            console.log("Aspiring Actor...");
        }
    },
]

// console.log(yarray);

//adding objects

//1)start
yarray.unshift(
 {address:"india"}, //creating object thats why used : 
 //not putting value in exisiitng object
)

//Middle 
// yarray.splice(0,0,random=1); //in middle passed value but i need to send object

// yarray.splice()

// console.log(yarray);

yarray.splice(
    0,0,
    {
        fname:'ELON',
        lname:'Musk',
        occup:function occupation()
        {
            console.log("Top of d world..");
        }
    }
    
)

// console.log(yarray);

//At the end lets add it..
yarray.push(
    {
        fname:'Raja',
        lname:'Hindustani',
        occup:function occupation()
        {
            console.log("Actor...");
        }
    }
)

// console.log(yarray);
// console.log(yarray[3]);


//array of object
//declaration/creation AND assignment Done
//Searching callback() predecate function means kisi logic pr True False
//..ke basis pr object aayega


// let obj1=yarray.find(function(value)
//value is linked with each array single element in each iteration that
//is here object


//>>>>>>>>>>>>>>>>Working of find()<<<<<<<<<<<<<<<
//step1)find gonna return object which rely on true or false -->given by predicate function inside it
//..and find is only one who do two jobs here:-
//....1) it links current yarray each element i.e object to value for each iteration
//....2) invisibly calls function(with yarray.fname yarray.lname yarray.function)// invisibly in each iteration
//...in a sense this not how formal argument passed but in  a sense while calling function() value gets linked with yarray.fname yarray.lname yarray.function for each iteration
//each single iteration == each complete object{} of yarray


//step2) as said find relies on true or false always by predicate function
//find convert all string ,number,or anynon zero value to true acc to 
//..its convinience as find know/understand T or F only
//..and always compulsorily returns current object where Iteration stops
//..and that stop as function(value)gets true and find return current object



//NOTE PREDECATE FUNCTION MAE KOE B LOGIC LEEKH SKTA HU BUT FIND () KE WORKING KYAA
//..H MENE BTAA DE UPr.
// {
//         if (value.fname == 'ELON')
//             return true;
//     }

// )
// console.log(typeof(obj1) );//object
// console.log(obj1);

//converting to => function for ease of logic

//step1 remove function and bracket covering value if single formalargument is there
//ex  value 

//step2 put arrow
// let obj=yarray.find(value=>value.fname === 'ELON');
// let tempp2=obj2.find (ok=> ok.fname === 'kwin')
// console.log(obj);



// //1 more array of  of objects :-
// //creation
// //addition
// //searching


// let objagain= [

//     obj1={
//         fname:'k',
//         lname:'s',
//     },
//     obj2={
//         fname:'R',
//         lname: 'O',
//     },
//     obj3={
//         fname:'N',
//         lname:'s',
//     }
// ]
// console.log( objagain[0] );


//addition
//end
// objagain.push(obj4=
//     {fname:'pawan',
//      lname:'singh',   
//     }
// )
//start
// objagain.unshift(
//     obj5={
//         fname:'Kumar',
//         lname:'Babu',
//     }
// )
//end
// objagain.splice(1,0,
//     obj6={

//         fname:'mukesh',
//         lname:'ambani',
//     }
// )

// console.log(objagain);


//Searching by callback function/inlinefunction/predicate function

//ismae hua kya ke fname value ko hr ek [obj1 to obj6 or uske content ke saath map krwara h]
// let tempobj=objagain.find( function (value)
//     {
//         if(value.fname == 'mukesh')
//             return true;
//     }
// )
// console.log(tempobj);

// let tempobj2=objagain.find(value=>value.lname == 's' ); //can not use here return 0 automatically predicate function logic
// //..evaluates for True or False
// console.log(tempobj2);


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// point4
//4#Removing element //kinda delete ->3 ways as add

// i uncommented xarray[of primitve] and yarray[of object] above


// console.log(xarray);
// console.log(yarray);

//from end pop
// xarray.pop();
// from start
// xarray.shift();
// from middle
// xarray.splice(0,1);
// console.log(xarray);

// 4.1 removing in array of objects!
// /

// console.log(yarray);//original
//end se remove/delete
// yarray.pop();
// console.log(yarray);

//start se remove/delete
// yarray.shift();
// console.log(yarray);

//middle se remove/delete

// yarray.splice(0,1);
// console.log(yarray);


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// point5

//emptying an array at once!--> removing an element in array we do more specificallyy[which one to]


//a)[] but it has issue see @ok  below
// console.log(xarray.length);
// console.log(xarray);
// p=xarray; //@ok
// //
// xarray=[]; //if i didnt had done @ok than garbage collector automatically would have removed
//all contents of xarray! but i allowded to point p also on earlier xarray content
//..if xarary pointed to [] and no one points to oirginal xarrayblck
// console.log(xarray);
// console.log(p);

//to resolve @ok go with 

//b)
// console.log(xarray);
// p=xarray;
// xarray.length=0;//point@xok
// console.log(xarray);
// console.log(p);

//what happens with @xok is
//..earlier in a (pointa) when i did p=xarray than xarray being refrence
//p pointed to xarray block-->step1
//later i did xarray=[]; means i pointed xarray to some empty block
//..doesnt means original/earlier xarray ruined there p is still pointing --step2

//that was issue

//so in pointb i did p=xarray //step1 yaa p and xarray pointing to sameblock
//..p got refrence of xarray-step1)


//but  than still xarray pointing to same block and i did xarray.length=0 means p got 0 too..

//HENCE WRITE WAY STEPB USED IN REALWORLD-> TOOO EMPTY ARRAY AT ONCE FROM MEMORY

//c)by splice operator

// p=xarray;
// console.log(p)
// xarray.splice(0,xarray.length);
// console.log(xarray);
// console.log(p)

//d by for/while-loop and pop()

//same for array of objects nothing new!


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

//point6

// combining ->c for concat  & slicing array

// let x=[1,2,3];
// let y=[4,5,6];

// let z=x.concat(y);
// console.log(z);

//slicing means nikalna and cut krdena

//a) z=z.slice(1,4); //start,end and end--> end wale ko include ne krta so give end+1

//b) z-z.slice[0] means if end not given so start-0 sae ...end tk

//c)
// z=z.slice();//no start no end-> means default 0 to end+1
// console.log(z);


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

//point6.1--> spread operator to combine

// let x=[1,2,3];
// let y=[4,5,6];

// //fastest way to combine 
// let z=[...x , ...y];
// console.log(z);

// //i can also add new element while using spread operator
// z=[...x , ...y,'a','b','c'];
// console.log(z);

// //i can make backup exact clone means diff variables pointing 2 diff locations

// newback_or_newclone =[... z];
// console.log(newback_or_newclone);

// //revision clone by spread operator
// //.. assign function obj.assign and slice operator and forin loop for object cloning

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

//point7 iterating through array

let xarr=[11,12,13,14,15,16];


// //for of lop
// // for (temp of xarr)
// // {
// //     console.log(temp);
// // }

// //forEach loop  used callbackfunction/=>arrowfunction concept

// //
// //i know how any find function or foreach function
// //or any object refrence function which takes[inline/predicate/callback()]
// //..in it that object.function or refrence.function->like here
// //..xarr.foreach 1) maps each element of array with predicate function
// //2) and call invisibly like function() and in each function call
// //..that object xarr.forEach or xarray.find pass actual argument
// //..like {function()//call} in away that each actual arguments map
// //..with formal argument


// let temp=xarr.forEach(function (value)
//     {
//         console.log(value); //i can not return as foreach will get obj
//         // and always array.function which have predicate function
//         //..they always relies on true or false and print that current time object
//         //..where execution stops and that stops on True Value
//         // return value;
//     }
// )
// console.log(temp);
// //its arrow function
// xarr.forEach(value=>console.log(value)); 

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//point8 ->joining array and splitting array
//joining is not combining -->step1 joining is method of array to present output 
//of array in some diff visual way by adding

//step2takes actual argument --> means on basis of what as actual argument
//..you want to join element inside array
//and that argument also bcom element
// - instead of space
// by ''i.eno space instead of space
//by using$ instead of space


//CONVERT RESULTANT ARRAY INTO STRING with all of its element


// let xjoin=[1,2,3,4];
// xjoin=xjoin.join('-');
// console.log(xjoin);
// console.log(typeof(xjoin));



//  splitting array basically used to split string into individual element
//
// let x='world biggest tech giant company Google';
// console.log( x.split(' ') ); //step1takes actual argyment ->means kis basis pr split i passed argument
//.. ' ' space!!

//CONVERT RESULTANT String INTO Arrays with all of its element

// let xsplit='1 2 3 4';
// xsplit=xsplit.split(' ');
// console.log(xsplit);


//CONCLUSION
//>>>> join [used to convert numeric array or array of string too to string]
//..takes Actualargument on what basis to join and that also bcoz array element

//>>>>  split used to convert [string into array] where each element of array is string
//..takes actualargument on what basis to do split space like ex -> after' ' or after ,

// let x=['a' ,'b' , 'c' , 'd'];
// x=x.join(',');
// console.log(x); 

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//point9 sorting

//in primitive
// let x=[3,4,21,34,5,55,1];//point @oo1
// console.log(x.sort()) ; //ascending sort  for strings//convert final output to string //thats why gave error in @oo1 above
//bcoz inke ascii value ke hisab se sort hora h ye

// for (temp of x)
// {
//     console.log(typeof(temp),":",temp)
// }
//when i take 2 arguments or more than 1 than 1st argument to last argument
//is actually descending order in elements of array at each iteration
//ex value and value1 in single iteration should take 2 values
//so in [1,21...]==> in array 21is value1 and 1 is value2
// let tempfinal=x.sort(function (value1 ,value2)
//     {
//         // 1st logic told by gpt
//         // console.log( parseInt(value) );    
//         // console.log(`value1 is ${value1} and value2 is ${value2}`);
//         // console.log('end \n');
//         // return value1-value2;

//         //let me apply ascii logic
//         console.log(`value1 :  ${value1} \n value2 : ${value2}`);
        
//         // if (value1 - value2)

//     }
// )
// console.log(tempfinal);


// //to get ascii value
// let a=95;
// console.log(a.toLocaleString(a));
//parse concept typecasting

// let b=[3,4,21,34,5,55,1]; 1 
// [1,4,33,2,3,8,9,7]

//not worth sorting below
// //[1,4,2,3,8,9,7,33]
// let temphold=null;
// for (let a = 0 ; a<b.length ; ++a)
// {
//     if (b[a+1].toLocaleString(a+1) > b[a].toLocaleString[a]  )
//     {
//         temphold=b[a+1];
//         b[a+1]=b[a];
//         b[a]=temphold; 
//     }
// }

//sort

// let x=[3,4,21,34,5,55,1]; // [4,3,.,....]

//NOTE 1) // console.log(x.sort()) //if i dont provide any callback function
// //than it converts all elements of array to string bcoz if i do
// //sort function work on my logic i.e callback() logic


//code
// let obj1= x.sort(
//     function (value1 ,value2)
//     {
//         /NOTE2 /here sort is optimised version depend on js engine i using
//         //firefox spider and v8 in chrome acc to that it use
//         //quick,merge or timsort

// in sort second argument ex value2 here is value1 when picked and compared
// ..with 2 element in 1 pair and [value1 is 2nd element]


//                     // console.log(value1);
//                     // console.log(value2);

//                     //sort relies or -1,0,1
//                     //1-> [after] a/value1 should come after b/value2
//                     //-1 ->[before] a/value1 should come before b/value2
//                     //0-> no change as a/value1 ==b/value2
//         if (value1< value2 )//means 1 no need
//             return -1;
//         else if (value1 > value2)  //means -1 for array[4,3,..,.,]
//             return 1; //means swap krdo to get [3,4]                      
//         else    
//             return 0; //no swap

//     }
// )
// console.log(typeof(obj1));
// console.log(obj1);


//sorting->in array of objects


// let arrayofobj=[
//     {
//         id:1,
//         fname:'kush',
//         lname:'sharma',
//     },
//     {
//         id:2,
//         fname:'Aniket',
//         lname:'sharma',
//     },
//     {
//         id:0,
//         fname:'Raj',
//         lname:'sharma',
//     }
// ]

// // let object=arrayofobj.sort();
// // console.log(object); //on the basis of id lets sort

// //NOTE--> V IMP LOGIC IN SORT !
// //in sort second argument ex b here is 1st element when picked and compared
// //..with 2 element in 1 pair and a is 2nd element

// //how to remember 0 1 2 
// //number line pr 0 means equal -1 before 1 after-->// placement

// let temObj=arrayofobj.sort(function (a,b)
//     {
//         if (b.id < a.id)
//             return 0; //1 after -1 before
//         //so -1 place before 
//         //
//         else if (b.id > a.id)
//             return -1;
//         else
//             return 0;
            
//     }
// )
// //i can convert it into arrow function by getting condition which will
// ///..return 1 bcoz at that time sorting gonna happen
// //so i have to change this big logic
// console.log(temObj);

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//point10 filtering and point11 mapping
//in amazon,flipkar,jiomart,meesho,ebay filtering is there so lets create that

// let Mobiles_itemsarray_filter=[
//     id1 = {
//         // mid_range:'Galaxy A serires',
//         same:'Galaxy A series',

//     },
//     id2=
//     {
//         // flagShip:'IQOO Series',
//         same:'IQOO Series',
//     },
//     id3=
//     {
//         // premium:'Samsung',
//         same:'Samsung',
//     }

// ]
// let counter=250;

// let splitted_array=""; //as i maptempobject will print output in object form
// let maptempObj=Mobiles_itemsarray_filter.map(
    
    
//     function(value) //here value has id1 ,id2,id3 so i did value.
    //than used same variable in all 3 bcoz i had to add id first
    //property[membervariable]
//     {
    
      
    
//         // counter + value.same;
//         // return 'pookie';
//         // return value.same+" "+parseInt(counter);
//         let finalMap= `${value.same} => ${counter}$`;
//             counter+=300;
        
//         return finalMap;    
//     }
// )
// console.log(maptempObj);

// let xyz=JSON.stringify(maptempObj) //converted object to JSON.string format
// //bcoz object has key:value pair which resembles with JSON most!

// // splitted_array=maptempObj
// // console.log(typeof(splitted_array));
// // splitted_array.split('=>');

// console.log(typeof(xyz));

// xyz=xyz.split("=>");//its not arrow its i used to point or use ===>
// console.log("here is xyz[0]:",xyz[0]);


//now again adding filter acc to values
// let xyzcounter=0;
// let filterArr=[250,550,880,900,1200];


// //ask input here
// let finalfilter=filterArr.filter(
//     function (value)
//     {
        
//         // value=250;
//             if (value == 250)
//             {

//                 //again created callback function
//                     filterArr.map(
//                         function(val)
//                     {
//                         let finMap= ` ${xyz[xyzcounter]} ==> ${val}`; 
//                         console.log( finMap );
//                         value+=300;
//                     }
//                 )
//                 return 0;
//             }
//             else if (value == 550)
//             {
//                     filterArr.map(function(val)
//                     {
//                         let finMap= ` ${xyz[xyzcounter]} ==> ${val}`; 
//                         value+=300;
//                         return finMap;
//                     }
//                 )
//             }

//             else if (value == 850)
//                 {
//                         filterArr.map(function(val)
//                         {
//                             let finMap= ` ${xyz[xyzcounter]} ==> ${val}`; 
//                             value+=300;
//                             return finMap;
//                         }
//                     )
//                 }
        
//     }
// )

// console.log(finalfilter);


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//again
//point10 filtering and point11 mapping


//some things about all higher order function
    //some functions depends on true and falsy some not

    //1)like find() works on true or false concept and print->object at that iteration
        //find automatically calls (and send invisibly actual argument in a way and maps each element of [array/refrence/object] to function (value))
        //[ like find() calls every higher order func gonna call @all call ]
    
    //2)sort () is also Higher order function that takes callbackfunction
    //and print output if it gets three value -1 0 1 [
    // for -1 it swap before
    
    //for 1 it swap after]
    //for 0 no swap

    //and in sort it do soritng acc to java engine spidermonkey 
    // or engine browser has like quick merge tim sort or mixture
    //..so in that sort 2nd value is actually 1st and 1st is second
    //..in callback function(value1, value2)


    //3)forEachloop also takes callback and it focus on printing
    //probably depend on return true to print arrayobject each of element

    //4)map ,filter are also HigherOrder function
    //map() just used to map thats it and probably can return it !

    //5)filter () just filter output on based of callback function logic
    //..and give output on true means return true/0

    // [IN SUMMARY FIND () , FLITER() , SOME() , EVERY()
    //     DEPENDS ON CALLBACK VALUE MEANS RETURN TRUE OR FALSE


    //     AND


    //     FOREACH()
    //     Map()
    //     SORT() THESE FUNCTION DONT CARE WHATS RETURNED OR NOT THEY DO THERE JOB
    // ] 
    //
// let int_val=[1,2,3,4,0,-1,-2,-3,-4];

// // console.log ( int_val.filter(function (value)

// ( int_val.filter(function (value)
//     {
//         if (value < 0)
//             return 1;
//     }
// )
// );

// console.log ( int_val.map(
//     function(value)
//     {
//         if (value > 0)
//         {
//            return value + "positive ";
//         }
//         else if (value < 0 )
//         {
//            return  value + "-ve ";
//         }
//         else 
//         {
//             return value + 'netural value '
//         }
//     }
// )
// );

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//point11 reducing an array

// x=[1,2,3,4,5];

// // for (temp of x)
// // console.log( x.reduce( (accumulator , cv)=> accumulator + cv,0) );

// console.log( x.reduce(function (pv ,cv ) //automatically runs start to end
// //.. array x reduce fucntion
{
    // console.log("hii");
    // console.log(startAndHold);
    // return 'ok';
    // return pv +cv;

    //reduce takes 2 arguments previous value to hold on
    //and current value to iterate 
    //previous value :-> is like accumulator which keeps tracks of
    //..final output ! i can give accumaltor start value =0
    //->0 so accumulator will get 0 coz its like sum or for prodcut i can pass 1
    //like function (pv ,cv,1 )->for product and function (pv ,cv ) -> for sum 
    //if 3rd argument not provided pv/accumulator takes 1st value of x=[..,..,..,..,..] <--array
}//function (pv ,cv ) 
)//can convert it to arrow by
// );

// console.log(x.reduce ( (pv,cv)=> pv+cv));
// (pv,cv)//used bracket in == (pv,cv) coz more than 1 argument pv and cv