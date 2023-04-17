
// //write a function that takes in an array of numbers and return an array 
// //that has all elements multiplied by 2.
// //you can use map() to apply multiplication operation to each element

let r=[2,3,4,5,6,7]
let v=r.map(function(num){
    return num*2
})
console.log(v)



//use for-loop method

let q=[5,8,9,9]
let f=[]
q.forEach(function(u){
    f.push(u*4)
})
console.log(f)


//Write a function that takes a string as input and 
//returns a new string with the first letter of each word capitalized.
let s="i love javascript"
function gg(s){
let l=s.split(" ").map(([firstchar,...rest])=>firstchar.toUpperCase("")+rest.join("").toLowerCase("")).join(" ")
console.log(l)
}
gg(s)


//write a function that takes string as input and returns a new string 
//with all the vowels removed
let word="Akirachix"

function j(word){
    let a=word.replace( /[a,e,i,o,u]/gi,"" )//i is the first argument the function accepts
    console.log(a)                           //if i remove (i)it wiil retrurn Akrchx
 }                                        // gi is used to search for all occurences in a string
j(word)


// .push
// it adds a new item to  the end of an array and it changes the length of an array
let town1 = ["nakuru","meru","muranga","baringo"]
console.log(town1.push("kilifi","kakamega"))

// .tostring() it retrns an array values with a seperated commas
let names = ["caren","faith","mercy","cynthia"]
console.log(names.toString())


//sort the array
let value=[17,9,2,5,9]

value.sort(function(a,b){return a-b
})
console.log(value)

