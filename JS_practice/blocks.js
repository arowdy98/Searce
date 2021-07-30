const ACCESSORY_PRICE = 9.99;
var bank_balance = 302.13;
var amount = 99.99;
var numOfCustomers = 5;
amount = amount * 2;
// can we afford the extra purchase?
if ( amount < bank_balance ) {
console.log( "I'll take the accessory!" );
amount = amount + ACCESSORY_PRICE;
}
// otherwise:
else {
console.log( "No, thanks." );
}

while (numOfCustomers > 0) {
console.log( "How may I help you?" );
// help the customer...
numOfCustomers = numOfCustomers - 1;
}
// versus:
do {
console.log( "How may I help you?" );
// help the customer...
numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

for (var i = 0; i <= 9; i = i + 1) {
console.log( i );
}

function printAmount(amt) {
console.log( amt.toFixed( 2 ) );
}
function formatAmount() {
return "$" + amount.toFixed( 2 );
}
var amount = 99.99;
printAmount( amount * 2 ); // "199.98"
amount = formatAmount();
console.log( amount );