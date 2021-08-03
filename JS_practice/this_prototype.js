function foo() {
console.log( this.bar );
}
var bar = "global";
var obj1 = {
bar: "obj1",
foo: foo
};
var obj2 = {
bar: "obj2"
};
// --------
foo(); // "global"
obj1.foo(); // "obj1"
foo.call( obj2 ); // "obj2"
new foo(); // undefined

var foo = {
a: 42
};
// create `bar` and link it to `foo`
var bar = Object.create( foo );
bar.b = "hello world";
bar.b; // "hello world"
bar.a; // 42 <-- delegated to `foo`