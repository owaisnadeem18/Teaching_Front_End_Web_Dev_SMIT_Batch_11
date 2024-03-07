// Chapter 06 (Smarter Way to Learn JS)

// Maths Unfamiliar Operators:
// Ye wo tamam operators hain jo hum aam zindagi may thora sa km use krtay hain
// These operators are: (variable++) , (++variable) , (variable--) , (--variable)

// ==================================================================== 1 =================================================================

// 2. (variable++) (ye dekhain , ye bolta hay k add to may kar dn ga variable may , magar jab tum print krwao gay pehli baar . Us waqt may pehlay print krun ga baad may print krwaun ga' )

// let num = 5;

// console.log(num); // 5 print hoga
// // num++; // yahan dekhain , value actually update ho gaye hay because {num++ ka mtlb hay (num = num+1)} jabhi num ab update hogya hay  , ab num ko print krwaun , tab result 6 aye ga , magar , may agar num++ karwaun , tab value still 5 he hogi ( becasue pehlay print krwata hay baad may update hota hay )
// console.log(num++); // 5  he print hoga , ye bolay ga k 'may [pehlay print  krun ga , baad may update krun ga]'

// Another example:

// {
//   a = 89;
//   a++; // it means a = a + 1
//   console.log(a); // jabhi ab 'a' update hogya hay

// lekin agar console.log(a++) karwaun ga , tab meray pass result 89 he aye ga

// }

// console.log(num); // ab yahan 6 aya hay , kyun k update hogya tha , magar print abhi hua hay updated result

// num++ ( PEHLAY PRINT KARDO, BAAD MAY INCREMENT KARANA MJHY ) This is called post increment (baad may increment hona)

// let num = 5;

// num++;

// console.log(num); num++ ka mtlb hay num = num + 1

// ==================================================================== 2 =================================================================

// ++num ( PEHLAY Update KARDO, BAAD MAY PRINT KARANA MJHY ) This is called pre increment (pehlay increment hona)

// let num = 45;
// ++num;
// console.log(num); // (Aray , ye kya hua . Yahi kaam to meray pass variable++) karta tha , tab itni mehnat ka faaida ??

// ======================================= Difference between variable++ and ++variable ================================

// let post_incre = 8;
// console.log(post_incre++); // print 08 he karwa rha hay wo , magar actually update hogya hay mera (post_incre variable) ab jab post_incre print krwaun ga (instead of) post_incre++ , then result '9' aye ga update ho kar

// // magar ab agar may ++ variable key baat krun , tab kya hoga meray pass ?
// let pre_increm = 9;
// console.log(++pre_increm); // ab pehlay update hoga variable , or baad may 'print' ( ye basic faraq hay pre and post increment may )

// ==================================================================== 3 =================================================================

// Post Decrement (a--)

// let num = 45;
// num--; // (num = num -1) backend pay ye kaam hua hay compiler may
// console.log(num); // '45' nhi aye ga , update ho janay k baad ab aye ga '46'

// ==================================================================== 4 =================================================================

// Pre Decrement (--a)

// let num = 45;
// --num; // (num = num -1) backend pay ye kaam hua hay compiler may, magar farq phir whi hay k , agar print krwaun ga may (--num) ko, tab result aye ga (44) . Ye (pehlay decrement kray ga , baad may apnay aap ko print kray ga)
// console.log(num); // '45' nhi aye ga , update ho janay k baad ab aye ga '46'

// X=============== Chapter 06 Maths Unfamiliar Operators has been completely discussed ================X

// ================================================================================

// Math Expressions , eliminating ambiguity (Chapter 07)

// Maths Algebra k arithmetic operations ko JS ksi trah tackle krti hay , is chapter may ye dekhna hay.

// 2 points yaad rakhain:

// 1. JS left say right chlti hay arithemtic operations krwatay huay
// 2. JS sab say pehlay division ko , phir multiply ko , phir '+' ko and last may '-' ko tackle krti hay

// console.log(14 / 7 + 9 - 8 * 4);
// 2 + 9 - 8 * 4; // left say right may , pelay / dekha , uska kaam utaar diya is nay
// 2 + 9 - 8 * 4; // left say right may , pelay + dekha chor diya , - dekha chor diya , because search kiya k kya * mojud hay ? , uska kaam utaar diya is nay jesay he * nazar aya

// 2 + 9(-8 * 4); // ab ye hua tha (yahan -32 aya )

// because
// + + = +
// + - = -
// - + = -
// - - = -
// (ye tamam tb apply hon gay , jb multiplication ho rhi hoti hay).

// Agar addition ka operation perform karun ga may , tab hamesha baday walay number ka sign lagta hay or (multiplication walay rule k mutabiq addition ya subtraction ho jati)

// jabhi jawab yahan tak aya
// 2 + 9 - 32; // ab dubara pehlay + ko pkday ga ye left say right may chltay huay
// 11 - 32 // ab ye last operation perform kray ga , which is - , jawab aapka -21 total aye ga

// now check it
// console.log(14 / 7 + 9 - 8 * 4);

// X=============== Chapter 07 Maths Eliminating Ambiguity has been completely discussed ================X

// ================================================================================

// Concatenating Strings and performing arithmetic operations on strings  (Chapter 08)

// let num1 = "6";
// let num2 = "9";

// ab dekhain , ye num1 or num2 , dono k dono strings hain meray pass , agar may in pay addition operation krwata hn , tab kya hoga ?

// console.log(num1 + num2); // ye pehlay or dusray number ko aapas may jod day ga , instead of performing the arithmetic operation of addition on it

// maagr khushi key baat ye hay k , ye msla just meray pass arithmetic addition may he ata hay , baqi tamam operations sahi perform hotay hain

// console.log(num1 - num2); // ye pehlay or dusray number ko aapas may arithmetic subtraction kar k day ga , bilkul aisay he jesay numbers pay operations perform hotay hain

// multiplication , division or modulus may bhi same kaam hoga aisay he

// console.log(num1 % num2); // modulus bhi sahi kaam karega

// console.log(num1 / num2); // division bhi sahi kaam karega

// console.log(num1 * num2); // multiplication bhi sahi kaam karega

// Note: sirf ye yaad rakhna hay k masla sirf arithmetic addition operation may ata hay jab number string hon

// Interview question:

// let firstName = "Owais";
// let lastName = "Nadeem";

// console.log(firstName + lastName); // dono strings ko jod dega ye , or yahi strategy arithmetic addition operation may bhi lagti hay

// // for example:
// console.log(firstName - lastName); // NaN ( output aye ga ) wo bolay ga bhai pagal ho kya tum ? kesay apnay pehlay naam ko dusray say + , - , modulus ya divide wagera karwa saktay ho ? Her aik aisi condition may NaN ata hay (This is an important interview question)
