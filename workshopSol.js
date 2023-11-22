
function higherOrLower(num1, num2){
  if(num1 === num2){
    return "equal";
  } 
  if(num1 > num2){
    return "higher";
  } else {
    return "lower";
  }
};

/////////////////////////////////////////////////////////

function exclaim(str){
    //Using template literal
    return `${str}!`

    //Using string concatination
    /**
     * return str + "!"
     */

    //Using concat method
    /**
     * return str.concat("!")
     */

  }

/////////////////////////////////////////////////////////

  function esrever(arr){
    const result = []

    //Looping backward and using push
    for(let i = arr.length-1; i >= 0; i--){
        result.push(arr[i])
    }

    //Looping forward and using unshift
    /**
     * for(let i = 0; i < arr.length; i++){
     *     result.unshift(arr[i])
     * }
     */
    
    return result
  }

/////////////////////////////////////////////////////////

  function buildNArray(n) {
  
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

/////////////////////////////////////////////////////////

  function findLongestString(strings) {
    if (strings.length === 0) return "";
  
    let longest = strings[0];
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > longest.length) {
        longest = strings[i];
      }
    }
    return longest;
  }

/////////////////////////////////////////////////////////

  function evenAndOdd(nums) {

    //Starting out with two arrays
    const evens = []
    const odds = []
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        evens.push(nums[i])
      } else {
        odds.push(nums[i])
      }
    }
    const result = []
    result.push(evens)
    result.push(odds)

    return result



    //Starting out with one 2d Array
    /*
    // const result = [[], []];
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] % 2 === 0) {
    //     result[0].push(nums[i]);
    //   } else {
    //     result[1].push(nums[i]);
    //   }
    // }
    // return result;
    */
  }

/////////////////////////////////////////////////////////

  const coinMachine = (num)=> {
    //we want to return change in the end.
    //this is where our results will be stored
    let change = {}

    //since our parameter is already in cents, we can work in integers
    //divide by 25 to see how many quarters we can get
    const quarters = Math.floor(num / 25);
    //subtract the value of all our quarters from num
    num -= 25 * quarters

    //now divide by 10 to see how many dimes we get from what is left
    const dimes = Math.floor(num / 10);
    //subtract the value of all our dimes from num
    num -= 10 * dimes

    //now divide by 5 to see how many nickels we get from what is left
    const nickels = Math.floor(num / 5);
    //subtract the value of all our nickels from num
    num -= 5 * nickels

    //whatever we have left will have to be in pennies
    const pennies = Math.floor(num)

    //store all the information we just calculated into the variable we wanted to return
    //note that the keys and the values we use have the same name and that is okay
    //for example: 
    /**
     * quarters: quarters
     * 
     * the first quarters (the left one) gives this object a key called quarters
     * the second quarters (the right one) sets the value of the key to be the value of the variable quarters from line 121
     */
    change = {quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies}
    return change
  }

  


