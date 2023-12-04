const prompt =require("prompt-sync")()


let age = prompt("what's your age?")
age = Number.parseInt(age)
if(age>10 && age<20){
    console.log("your age lies between 10 and 20")
}
else{
    console.log("your age is invalid")
}



