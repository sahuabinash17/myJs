//ForOf loop is used in Array
const arr1 = [ "Youtube","Amazone","Netflix","Facebook"];
for( const n of arr1){
    console.log(n);
}

//Forin loop is used for Object

const arr2 = {
    Yt:"Youtube",
    Fb:"Facebook",
    Nf:"Netflix",
    Az:"Amazone"
}
 for (const x in arr2){
    console.log(`Key is: ${x} and Value is:${arr2[x]}`)
 }