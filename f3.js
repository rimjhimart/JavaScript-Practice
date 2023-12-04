//1)program to print the marks of students using for loop in java script
let marks = {
    harry :   90,
    sunil :   78,
    akhsita :   56,
    monika :   80
}
for(let k =0; k<Object.keys(marks).length;k++){
    console.log("the marks of " + Object.keys(marks)[k] + " is " +  marks[Object.keys(marks) [k]])
}
//2using for in loop , program to print the marks if students
for(let key in marks){
    console.log("the marks of " + key + " is " +  marks[key])
} 

const prompt =require("prompt-sync")()

//3print try again until the user enters the correct number
cn = 54
let j
while(j !=cn){ 
    j = prompt("enter the number")
}
console.log("you have entered the correct number")


//4write a program for calculating mean of five numbers using function
function Mean(u,v,x,y,z){
    return (u+v+x+y+z)/5
}
let a =1
let b =2
let c =3
let d =4
let e =5
console.log("mean of five numbers = ",Mean(a,b,c,d,e))



