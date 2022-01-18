var Array =[1,2,3,4,5,6,7,8]


const tailOfArray = Array.slice(4);
console.log(tailOfArray);
Array.slice(4).forEach(item => {
    console.log( "Whoops, I just spent O(n) time and space!")
  });