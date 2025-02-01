// let retrived_body = document.querySelector("body");
// let retrived_body = document.getElementsByTagName("body");
// console.log(retrived_body);



//1st> its about Modal
let shareButton = document.querySelector('.shareclass');
// console.log(shareButton);
let modaldiv = document.querySelector('.modal-div');



//2 
content_div_retrieved = document.querySelector(".content_div");
// console.log(content_div_retrieved);
wrapper=document.querySelector(".topwrapper");


const kush=function(event){
    
    modaldiv.setAttribute("style","opacity:1");
    wrapper.classList.add("topwrapperblur");

    // event.stopPropagation(); 
    /*can't apply coz its simple function*/

} 


// 3
// let iconcross_Retrieved= document.querySelector(".iconcross");
let iconcross_Retrieved= document.querySelector(".iconcross");
// console.log(iconcross_Retrieved);



iconcross_Retrieved.addEventListener("click", function(event)
{
    
        // currentTarget tells us on which element the event
        //  was attached to or the element whose 
        // eventListener triggered the event. ,,event. target 
        // tells where the event started (like from phases it meant
        // capturing target bubble)

        
            
        if (event.target === event.currentTarget)
                {
                    
                    modaldiv.setAttribute("style","opacity:0");
                    wrapper.classList.remove("topwrapperblur");
                
                    event.stopPropagation();
                }
                

                // iconcross_Retrieved.sty
                // iconcross_Retrieved.setAttribute
                
    });




// xyz();
//WORKING TOOK ME 4 DOM REVISION CLASS AGAIN !!
// REMOVED COLLISON IN CODE

//i studied in  day2 addevent listener ke jb b mae function bnaunga

//as predicate to wo different hoga  removeevent listener m even if
// same body and declration still they creates in diff memory block

//so use function name

//so in document.body == iconcross predicate function
//still they work and i used concept of true ke jese target milae top
//sae niche execute used true


//and in icon cross used stop propogation so waps aatehue dubara body
//kae same event ke saath collision na ho




document.body.addEventListener("click", function(event)

//function onclick ke ye he deekt h automatically starts
// closemodal = function(event)
{

 

// wrapper.addEventListener("click",function(event)
// {
//if i use on body event listner it will work everywhere which is not good practice
// const secoo = function(event)
// {s
// 
    // if(!iconcross_Retrieved.contains(event.target))
    if (!event.target.closest(".content_div") && !event.target.closest(".modal-div"))
    {
    // closeModal();
    modaldiv.setAttribute("style","opacity:0");
    wrapper.classList.remove("topwrapperblur");
    }

     
    // event.stopPropagation(); /*wrna close he rahega modal in capture phase being*/

},true);

// wrapper.addEventListener("click",function(event)
// {
    // event.preventDefault();
    // modaldiv.setAttribute("style","opacity:1");
    // wrapper.classList.add("topwrapperblur");
    // event.stopPropagation();   
// });
// conclusion :~div ka chkkr thaa bs ke div lganaa ek ache practice h
//baki main problem thee ke button ke div ko mene bndd ne keeya
//baki target phase active keeya body mae
//and modal mae stop propogation simple 
//made my own code not copied of babbar bhai


// let modal_header_retrieve= document.querySelector(".modal-header");
// let modal_header_retrieve= document.querySelector(".crs");


// CROSS_ICON = function()
// {
//     modal_header_retrieve.classList.remove("icon-cross")
//     modal_header_retrieve.classList.add("iconcross-red")
// }




// Topic2nd
// audio player created from here myself !!No Library Used

// my selfmade audio player!

// 1

let audio_parent_div_retrieved= document.querySelector(".audio_parent_div");

//................................................
// all audios collection
let customaudioFilefirst=document.querySelector("#myAudio");
let customaudioFileSec = document.querySelector("#myAudioSec");
let customaudioFileThird=document.querySelector("#myAudioThird");
let customaudioFileFourth=document.querySelector("#myAudioFourth");
let customaudioFileFifth=document.querySelector("#myAudioFifth");

let array_of_all_array= [customaudioFilefirst , customaudioFileSec , customaudioFileThird , customaudioFileFourth , customaudioFileFifth];
console.log("array_of_all_array  : " , array_of_all_array);
console.log("size of array_of_all_array : ",array_of_all_array);
console.log("type of size of array_of_all_array : ",typeof array_of_all_array);
// array_of_all_array = parseInt (array_of_all_array);
console.log("type of size of array_of_all_array : ",typeof array_of_all_array);
// array_of_all_array=array_of_all_array;
// console.log("type of size of array_of_all_array again : ",typeof array_of_all_array);


console.log("type of size of array_of_all_array index : ",typeof array_of_all_array[0]);

console.log("lenght of array_of_all_array index : ", array_of_all_array.length);





 
let Music_State=false;  //Declared For Tracking Play Pause 
var track_Music_Position_counter=0; //Declared For track_Music_Position_counter 0 means from 1st position of song

console.log("type of track_Music_Position_counter: ",typeof track_Music_Position_counter);
//    let imageTagState=true;



// playbutton


let playImage_as_PLaybutton = document.createElement("img");
playImage_as_PLaybutton.setAttribute("src" , "pl2.png");
// opacity : 0.4;
playImage_as_PLaybutton.style.cssText=`
    height : 80px;
    width : 80px;
    position : fixed;
    
    
    
    `;
    
playImage_as_PLaybutton.classList ="playclass"; //firsttime adding name no need to use add () function/behaviour of classlist
audio_parent_div_retrieved.append(playImage_as_PLaybutton);


// pausebutton

// opacity : 0.4;
let pauseImage_as_Pausebutton = document.createElement("img");
pauseImage_as_Pausebutton.setAttribute ("src" ,"ps1.png");
pauseImage_as_Pausebutton.style.cssText=`
height : 80px;
    width : 80px;
    position : fixed;

    
    `;
    
pauseImage_as_Pausebutton.classList ="pauseclass"; //firsttime adding name no need to use add () function/behaviour of classlist

console.log("pauseImage_as_Pausebutton :" , pauseImage_as_Pausebutton);


// audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);


console.log("audio_parent_div_retrieved  : " , audio_parent_div_retrieved)



// async code :~> event loop me jayega and based on event he chalega

//jb pause button pe click hua to pause hogya but -> play button aajayega
pauseImage_as_Pausebutton.addEventListener("click" , function(event){


    console.log("track_Music_Position_counter  in pause event listener to play" , track_Music_Position_counter);
    audio_parent_div_retrieved.removeChild(pauseImage_as_Pausebutton);
    audio_parent_div_retrieved.append(playImage_as_PLaybutton);
    array_of_all_array[track_Music_Position_counter].pause();
    Music_State=false;


});

// async code :~> event loop me jayega and based on event he chalega

//jb play button pe click hua to play but -> pause button aajayega
playImage_as_PLaybutton.addEventListener("click",function(event){
    console.log("track_Music_Position_counter  in play event listenr to pause" , track_Music_Position_counter);
    audio_parent_div_retrieved.removeChild(playImage_as_PLaybutton);
    audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
    array_of_all_array[track_Music_Position_counter].play();
    Music_State=true;


  
});


for (let i = 0; i < array_of_all_array.length; i++) {
    array_of_all_array[i].addEventListener('ended', function() {
        // console.log("Song ended.");
        Music_State = false;
        if (audio_parent_div_retrieved.contains(pauseImage_as_Pausebutton)) {
            audio_parent_div_retrieved.removeChild(pauseImage_as_Pausebutton);
            audio_parent_div_retrieved.appendChild(playImage_as_PLaybutton);

            alert("song ended");
        }
    });
     
}

// nextbutton



let nextImage_as_PLaybutton=document.querySelector(".next_button");

console.log(nextImage_as_PLaybutton);

// console.log("hiii.......");



// if ( (track_Music_Position_counter) == array_of_all_array.length-1 )
//     {
//         console.log("wdnekjbds");
//     }
// else
// {    
    let checkbool = false;
    let checkboolsec = false;

    nextImage_as_PLaybutton.addEventListener("click" , function(event){
    
    if ( (track_Music_Position_counter) == array_of_all_array.length-1 )
        {

            // so next click pr dubara delete na ho pause one time delete needed
            if (checkbool == false && !audio_parent_div_retrieved.paused)
            {
                // if ( pauseImage_as_Pausebutton in audio_parent_div_retrieved.childNodes   )
                    
                //     {
                        console.log("dewjbhhhhhhhhhhhhhhhhh");                        
                        array_of_all_array[track_Music_Position_counter].pause();
                        audio_parent_div_retrieved.removeChild(pauseImage_as_Pausebutton);
                        audio_parent_div_retrieved.append(playImage_as_PLaybutton);
                        checkbool=true; //means removed pause
                        Music_State=false;
                    // }
                // else
                // {

                //     checkbool = true;
                //     Music_State=false;
                //     array_of_all_array[track_Music_Position_counter].pause();

                // }

            }
            else //after 1st remove pause
            {
                array_of_all_array[track_Music_Position_counter].pause();
                checkbool = true;

            }
            
            
            // else
            // {
                // array_of_all_array[track_Music_Position_counter].pause();
                // track_Music_Position_counter= array_of_all_array.length - 1;
            
            // console.log("Inside first if v of trackMusicPositionCounter :  ",track_Music_Position_counter);
            // console.log(audio_parent_div_retrieved);
            
                // array_of_all_array[track_Music_Position_counter].pause();
                
                // checkbool=false;
                

                // track_Music_Position_counter= array_of_all_array.length - 1;
            // }
            
        }
    
    else if (Music_State == true && !array_of_all_array[track_Music_Position_counter].paused && (track_Music_Position_counter) <=  (array_of_all_array.length )   )
    {
        console.log("else if  second..........");
        array_of_all_array[track_Music_Position_counter].pause();
        
        
        
        if  ( (track_Music_Position_counter) < array_of_all_array.length -1 )   
                {           
                    track_Music_Position_counter+=1;

                    array_of_all_array[track_Music_Position_counter].currentTime = 0;

                     

                    array_of_all_array[track_Music_Position_counter].play();
                
                    Music_State=true;
                    console.log("track_Music_Position_counter : " , track_Music_Position_counter);

                    }
                    
                
                else
                {
                    return ;
                }

      
            
    }


    // ye h play button ke leeye condition
    else if (Music_State == false && array_of_all_array[track_Music_Position_counter].paused   )

    {
        // audio_parent_div_retrieved[track_Music_Position_counter].pause();
        console.log("elseif third..........");
        console.log(playImage_as_PLaybutton);
        
        
        // if (parseInt (track_Music_Position_counter) <= parseInt (array_of_all_array.length ) )
        // {

        if ( (track_Music_Position_counter) == array_of_all_array.length -1 )
            {
                return;
            }
        else if  ( (track_Music_Position_counter) < array_of_all_array.length -1 )   
        {
            track_Music_Position_counter+=1;
            
            
            
            audio_parent_div_retrieved.removeChild(playImage_as_PLaybutton);
            audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
            
        array_of_all_array[track_Music_Position_counter].currentTime = 0;
        array_of_all_array[track_Music_Position_counter].play();
        Music_State=true;

        console.log("track_Music_Position_counter :: " , track_Music_Position_counter);

        }
    
            
    }

 

});

// }




let prevImage_as_PLaybutton=document.querySelector(".prev_button");

console.log(nextImage_as_PLaybutton);



// looking for behavior where before moving to the next or previous song, 
// the current song should be reset (i.e., its playback position should be set to the beginning) rather than playing from where it left off. This behavior can
//  be achieved by setting the currentTime property of the audio element 
//  to 0 before you move to another track

// console.log("TRACK MUSIC POSITION : ", track_Music_Position_counter);
prevImage_as_PLaybutton.addEventListener("click" , function(event){
    
    if ( (track_Music_Position_counter) == 0 && array_of_all_array[track_Music_Position_counter].paused )
        {
            // audio_parent_div_retrieved.append(playImage_as_PLaybutton);
            audio_parent_div_retrieved.removeChild(playImage_as_PLaybutton);
            audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
            array_of_all_array[track_Music_Position_counter].currentTime = 0;
            array_of_all_array[track_Music_Position_counter].play();
            Music_State=true;   
        } 
    else if ((track_Music_Position_counter) == 0 && !array_of_all_array[track_Music_Position_counter].paused )   //means play h 
    {   
        // audio_parent_div_retrieved.append(playImage_as_PLaybutton);
        // audio_parent_div_retrieved.removeChild(playImage_as_PLaybutton)
        // audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
        // // audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
        // // audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
        
        // array_of_all_array[track_Music_Position_counter].pause();
        
        // // audio_parent_div_retrieved.removeChild(playImage_as_PLaybutton);
        // // audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
        
        // array_of_all_array[track_Music_Position_counter].currentTime = 0;
        // array_of_all_array[track_Music_Position_counter].play(); 
        // Music_State=true;
        // predicate function
     

        // audio_parent_div_retrieved.append(playImage_as_PLaybutton);
        // audio_parent_div_retrieved.pause();
        console.log("dendnekdek");
        array_of_all_array[track_Music_Position_counter].pause();
        audio_parent_div_retrieved.removeChild(pauseImage_as_Pausebutton);
        audio_parent_div_retrieved.append(playImage_as_PLaybutton);
        // audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
        
        async function wait_play_to_pause_effect()
        { 
            let Pl_to_Pa = new Promise(function (resolve ,reject){
                setTimeout(function() {
                   ;
                    audio_parent_div_retrieved.append(playImage_as_PLaybutton);
                    audio_parent_div_retrieved.removeChild(playImage_as_PLaybutton)
                    audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
                    
                    array_of_all_array[track_Music_Position_counter].currentTime = 0;
                    array_of_all_array[track_Music_Position_counter].play(); 
                    Music_State=true;
                    resolve(true);
                },200);
                
            }); 

            effect_PL_to_PA=await Pl_to_Pa;
            return effect_PL_to_PA
        }
        wait_play_to_pause_effect();
        
        // audio_parent_div_retrieved.removeChild(pauseImage_as_Pausebutton);
        // audio_parent_div_retrieved.append(playImage_as_PLaybutton);
        
        // array_of_all_array[track_Music_Position_counter].currentTime = 0;
        // array_of_all_array[track_Music_Position_counter].play(); 
    }
        

         


    
   else if (Music_State == true && !array_of_all_array[track_Music_Position_counter].paused && track_Music_Position_counter > 0 )
    {
       
        console.log("if..........");
        array_of_all_array[track_Music_Position_counter].pause();
        

        if ( (track_Music_Position_counter) == -1 )
            {
                return;
            }

        else if    ( (track_Music_Position_counter) > 0 )
        {
            track_Music_Position_counter-=1;
            console.log("TRACK MUSIC POSITION : ", track_Music_Position_counter);
            array_of_all_array[track_Music_Position_counter].currentTime = 0;
            

                
                array_of_all_array[track_Music_Position_counter].play();
                
                Music_State=true;

                checkbool=false; /*bcoz agr maine true hone pr click keeya prev
                to playButton activated and usko remove krne ke leeye yhaa true in next if condition*/
        }
    }

    else if (Music_State == false && array_of_all_array[track_Music_Position_counter].paused  && track_Music_Position_counter > 0  )
    {
    
        console.log("elseif..........");
        console.log(playImage_as_PLaybutton);
        
      
        if ( (track_Music_Position_counter) == -1)
            {
                return;
            }
            else if    ( (track_Music_Position_counter) > 0 )    
            {
            track_Music_Position_counter-=1;
            console.log("TRACK MUSIC POSITION : ", track_Music_Position_counter);
            
            
            
                    audio_parent_div_retrieved.removeChild(playImage_as_PLaybutton);
                    audio_parent_div_retrieved.append(pauseImage_as_Pausebutton);
                    
                    array_of_all_array[track_Music_Position_counter].currentTime = 0;
                    array_of_all_array[track_Music_Position_counter].play();
                

                    
                Music_State=true;
                checkbool=true; /*bcoz agr maine false hone pr click keeya prev pr
                then playButton activated and usko remove krne ke leeye yhaa true in next if condition*/
            }
    }
});




let currentsongPLaying=array_of_all_array[track_Music_Position_counter];

// let aud = document.getElementById("myAudio");
// currentsongPLaying.onended = function() {
//   alert("The audio has ended");
// };
currentsongPLaying.addEventListener( "ended" , function(event){

    
    // if (audio_parent_div_retrieved.contains(pauseImage_as_Pausebutton) )
    // {
        console.log("yaaa..");
        audio_parent_div_retrieved.remove(pauseImage_as_Pausebutton);
        audio_parent_div_retrieved.append(playImage_as_PLaybutton);
    // }
});