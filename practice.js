//add two numbers
//add(2,5) --> 7
function add(num1, num2){
    const num3 = num1+num2  
    return  num3
    //return num1+num2
}

//take in a name greet that person
//if i dont have a name, give a general greeting
//greet("Tony") --> "Hello Tony. Good to meet you".
//greet("Heather") --> "Hello Heather. Good to meet you."
//greet() --> "Hello"
function greeting(name){
   //let result = ""
    if(name === undefined){
        //result = "Hello"
        return "Hello"
    }else{
        //result = "Hello " + name + ". Good to meet you."
        return `Hello ${name}. Good to meet you`
    }
    //return result
}

//take in a number and check if the number is positive
//isPositive(5) --> true
//isPositive(-5) --> false
function isPositive(number){
    if(number >= 0){
        return true
    }
        
    return false
    
}


//i have a list of numbers and i want the sum of all numbers
//sum([1,2,3,4,5]) --> 15
//sum([1,2,3]) --> 6
//sum([3]) --> 3
function sum(array) {
    /*let total = 0
    for(let i = 0; i< array.length; i++){
        total = total + array[i]
    }
    
    return total*/

    ///////////////////////////////////////////////

    // const total = array.reduce((acc, num) => {
    //     return acc += num
    // },0)
    // return total

    ///////////////////////////////////////////////

    let arr = 0
    array.forEach((a) => {
        //console.log(a)
        //arr = a + arr
        arr += a
    })

    return arr
}

//take in 3 numbers as parameters. find the least out of the three
//findLeast(1,2,3) --> 1
//findLeast(3,2,1) --> 1
//findLeast(4213,345,22) --> 22
function findLeast(num1, num2, num3) {
    // if(num1 <= num2 && num1 <= num3){
    //     return num1
    // }else if(num2 <= num1 && num2 <= num3){
    //     return num2
    // }else{
    //     return num3
    // }

    const numArr = [num1,num2,num3]

    // const smallest = numArr.reduce((acc, curr) => {
    //     if(curr < acc){
    //         acc = curr
    //     }
    //     return acc
    // })
    // return smallest

    numArr.sort((a,b) => {
        return a-b
    })
    return numArr[0]
}

//given a string,  alternate between lower and uppercase
//altCaps("hello") --> "hElLo"
//altCaps("Morgan") --> "mOrGaN"
//012345
//mOrGaN
function altCaps(str){
    let result = ""
    for(let i= 0; i < str.length; i++){
        if(i%2 === 0){
            result += str[i].toLowerCase()
        }else{
            result += str[i].toUpperCase()
        }
    }
    return result
}
console.log(altCaps("Morgan"))