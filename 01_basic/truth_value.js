// falsy_value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthly value
"0",  'false', " ", [], {}, function(){}


let arr = []
if(arr.length === 0){
    console.log("array is empty");
}
const obje = {}
if(Object.keys(obje).length === 0){
    console.log("object is empty");
}

false == 0  //op => true
false == '' //op => true
0 == false  //op => true