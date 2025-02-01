
//topic5 fetch Api---> i know Api nd interface from abovetopic2 thats pre required!!!!



async function kushbhardwaj_API()
{
    // 1 name of object
    let kushobj={
        
        // 1.1)
        method : "POST",
        
        // 1.2
        body : JSON.stringify({

            fname:"kush",
            lname:"sharma",
            occup:"SDE",
        }),
        
                headers: { /*//YE LEARN KRNA HOGA*/
                    'Content-type':'application/json ;charset=UTF-8'
                    // 'Content-type': 'application/json; charset=UTF-8',
                },

    }
        // 1.3


        
    let fetchKAPI=await fetch("https://jsonplaceholder.typicode.com/posts",kushobj); //YE LEARN KRNA HOGA fetch ke andr url m kyaa
    //or ku aata h

// let kAPI=await fetch("https://jsonplaceholder.typicode.com/posts",details);
    let finalop = await fetchKAPI.json();
    return finalop;

}
async function kush()
{
    let k = kushbhardwaj_API();
    console.log(k)
}
kush();
// console.log( kushbhardwaj_API() );