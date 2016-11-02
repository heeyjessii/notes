Notes on 10/17/16

//this is a comment
/* this is a block comment difference between block and regular  oomment 
 block comment can be rows and rows of comment (block) */

 var myName = "Jess";
 /* this is a string*/
 var myAge = "15";
 /*this is a integer*/

 //boolean type
 var booleanExample = true;

//unassigned variable
undefined

NaN
 //not a number

//array
var myArray = ["one", 2,'seven' , 'batman', true]
//objects

var camelCase 
//doesn't have spaces all one lowercase first letter, uppercase second letter

/* Do NOT begin variable name with number, Use specific symbols or mathmatical operations, have spaces in variable names*/

console.log ()
// reading your code behind the scenes

!== 
//not equal

slides.com/ifang/javascri[tbasics/]

//function is an execute statement
//annonymous function
function () {

}

function nameOfFunction () {
  console.log('wattup')
}

//invoking a function
nameOfFunction();
 
//comes out to 
wattup

//paraments
function hello (a, b) {
  console.log(a + b);
}

hello(10, 11);

function createGreeting (name, age){
  if (age < 32) {
    console.log('hello' + name);
    return 'hello' + name;
  }else{
    console.log('hello Mr.' + name);
  }
}

createGreeting('Tan', 18);

//if can't be a variable.
