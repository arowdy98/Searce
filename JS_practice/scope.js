function one() {
// this `a` only belongs to the `one()` function
var a = 1;
console.log( a );
}
function two() {
// this `a` only belongs to the `two()` function
var a = 2;
console.log( a );
}
one(); // 1
two();

function outer() {
var a = 1;
function inner() {
var b = 2;
// we can access both `a` and `b` here
console.log( a + b ); // 3
}
inner();
// we can only access `a` here
console.log( a ); // 1
}
outer();

function foo() {
var a = 1;
if (a >= 1) {
let b = 2;
while (b < 5) {
let c = b * 2;
b++;
console.log( a + c );
}
}
}
foo();
// 5 7 9
//Because of using let instead of var, b will belong only to the if
//statement and thus not to the whole foo() function’s scope. Simi‐
//Slarly, c belongs only to the while loop.
//larly, c belongs only to the while loop.

//Hoisting

var a = 2;
foo(); // works because `foo()`
// declaration is "hoisted"
function foo() {
a = 3;
console.log( a ); // 3
var a; // declaration is "hoisted"
// to the top of `foo()`
}
console.log( a ); // 2

var a = 2;
foo(); // works because `foo()`
// declaration is "hoisted"
function foo() {
a = 3;
console.log( a ); // 3
var a; // declaration is "hoisted"
// to the top of `foo()`
}
console.log( a ); // 2