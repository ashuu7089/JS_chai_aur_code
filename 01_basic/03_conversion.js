let score = 33; 
 
let checkNumber = "33abc"
// const { scored } = req.body;
// console.log(typeof checkNumber); // number

let valueInNumber = Number(checkNumber)
// console.log( typeof valueInNumber, " 2 check Number"); // number
// console.log(valueInNumber, " "); // NaN

// console.log(typeof score); // string
// console.log("*************************** Null *********************************");

let data = null
//console.log(data ,"ghfgfdg");
// console.log(typeof data); //Object


let valueForData = Number(data)
// console.log( typeof valueForData, " check Number"); // number
// console.log(valueForData, " "); // 0
// console.log("====================================Undefined=====================");
let checkForUndefined = undefined;


// console.log(checkForUndefined);
// console.log(typeof checkForUndefined); //undefined


let valueForcheckForUndefined = Number(checkForUndefined)
// console.log( typeof valueForcheckForUndefined, " check Number"); // number
// console.log(valueForcheckForUndefined, " "); //NaN



/*  "33" = 33
    "33abc" = NaN
    true = 1
*/

// console.log("################## Boolean #########################");
let isLoggedIn = " ";
let booleanIsLoggedIn  = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//  1 =>  true; 0 => false
//  "" => false
    // "hitesh" => true


    // *********************************** Operations *************************************
    let value = 3;
    let negValue = -value
    console.log(negValue);
    console.log(1 + "2");  // 12
    console.log("2" + 3);  // 23
    console.log("2" - 1);  //  1
    console.log(1 + 2 + "2"); // 32
    console.log("1" + 2  + "3"); // 123
    console.log("2" * 2); //4
    console.log("5" + null); // 5null
    console.log(null + "5"); //  null5
    console.log(null + 5); // 5