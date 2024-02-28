// Differnece between let , Var & const variable:

var Owais = 45; // aik baar may nay variable ko declare or initialize bhi krdiya hay ]

// Keep in mind:
var Owais; // ye variable key declaration hay
Owais = 45; // ye variable ko value assign karna hay (It's an important concept , never mix these two things)

// Now let's look at the difference.

// ------------------------------------------------- Var -------------------------------------------

// Agar may same variable ko bana kar , usi ko dubara declare karna chahta hn , tab 'var' data type mjhy ye krnay day ga

// for example

// var Owais = 45;
// var Owais = 49; //it will allow me to redeclare the same variable . (jis ko uper bhi may nay declare kiya tha)

// ------------------------------------------------- let -------------------------------------------

let Owais = 45;
console.log(Owais); // will print 45

// let Owais = 45; // Identifier 'Owais' has already been declared , ye wala error day ga , or ye run time error hota hay , means k ye run krnay pay show hota hay aap k pass sirf
// console.log(Owais);

// agar may likhta hn k , Owais = 34 , tab error nahi aye ga , let mjhy value update karnay deta hay variable key , magar redeclare karnay say rokta or run time error deta hay

// Owais = 89;

// console.log(Owais); // will print 89

// ------------------------------------------------- cpnst -------------------------------------------

const a = 78;

console.log(a); // print 78

a = 89; // ye run time error day ga , because const variable ko dubara nhi update kiya jaa skta hay
console.log(a);
