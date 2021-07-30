var obj = {
a: "hello world",
b: 42,
c: true
};
obj.a; // "hello world"
obj.b; // 42
obj.c; // true

Values & Types | 31

obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"];

var arr = [
"hello world",
42,
true
];
arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true
arr.length; // 3
typeof arr; // "object"

var a = "hello world";
var b = 3.14159;
a.length; // 11
a.toUpperCase(); // "HELLO WORLD"
b.toFixed(4);

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a == c; // true
b == c; // true
a == b; // false

var a = 42;
var b = "foo";
a < b; // false
a > b; // false
a == b; // false