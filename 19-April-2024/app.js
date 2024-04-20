// Array Methods key thori see baat ho jaye aaaj JavaScript k andar !!!

// arr = [4, 9, 2, 8, 5]; // ye aik array hay

// ------------------------------ 1 --------------------------------------

// console.log(arr.toString()); // achanak may nay chaha k , kya may array ko string may nahi badal sakta hn ? tab documentation kholi . To ye maloom hua , k is tareeqay say aik array ko string may badla jaa sakta hay

// ------------------------------ 2 --------------------------------------

// str = "Saylani Mass IT Training"; // ye aik string hay

// console.log(str.split(" ")); // may nay chaha k is string ko aik array k andar badal deta hn , tab ye method yaad aya arr.split(" ") ye jo commas k andar gap aya hay , isko boltay hain k jab string may gap aye , tab usko aik array may daalo or comma daal k separate krdo dusri string say

// ------------------------------ 3 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];
// arr2 = [6, 3, 2, 8, 7, 9];

// console.log(arr1.join("  ` OWAIS ` ")); // yahan jo bhi join k andar likhun ga , wo her aik array elements k sath jud jaye ga , ye matlb hay is join method of array ka

// ------------------------------ 4 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];
// arr2 = ["dusra", 6, 3, 2, 8, 7, 9];
// arr3 = ["teesra", 4, 9, 6, 6, 4];

// console.log(arr1.concat(arr2, arr3)); // arr1 k andar arr2 and arr3 ko jod diya hay may nay

// ------------------------------ 5 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];
// console.log(arr1.indexOf(7)); // -------------------------> ye yaad rakhain ye bht improtant interview ka question hay , array method (indexOf("number")) ye check karta hay agar wo likha hua number array may mojud hay , tab ye answer may us array ka index deta hay , otherwise (-1) answer deta hay <---------------- (Most Improtant Interview Question).

// ------------------------------ 6 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];

// console.log(arr1.lastIndexOf(9)); // ye array ka wo method hay jo meri madad karta hay check karwanay may k array ka jo last (number) hay wo kis index pay hay . Or agar wo mojud he na ho last index pay as it is number , tab wo humain -1 return kr rha hota hay

// ------------------------------ 7 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];

// // popping an element from array ka matlb hota hay k aakhir say aik array ka element bahar nikaal dena

// console.log(arr1.pop()); // konsa number pop hua hay ye print hoga

// console.log(arr1); // number pop honay k baad result aya hay

// ------------------------------ 8 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];

// // // pushing an element to an array ka matlb hota hay k aakhir may aik array k element ko andar daalna.

// console.log(arr1.push(239)); // 239 number push hua hay ye print hoga , or aakhir may nazar aye ga array k

// console.log(arr1); // number psuh honay k baad result aya hay

// ------------------------------ 9 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];

// // Unshift method ka matlb hota hay array k andar shuru may koi number daal dena

// console.log(arr1.unshift(239)); // 239 number push hua hay ye print hoga , or suru may nazar aye ga array k , because of using unshift array method

// console.log(arr1); // number psuh honay k baad result aya hay

// ------------------------------ 10 --------------------------------------

// arr1 = [6, 3, 2, 8, 7, 9];

// // Shift method ka matlb hota hay array k andar say pehla element number nikaal dena

// console.log(arr1.shift()); // 239 number push hua hay ye print hoga , or suru may nazar aye ga array k , because of using unshift array method

// console.log(arr1); // number psuh honay k baad result aya hay (6 has been removed from the start of our array)
