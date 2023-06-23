
// let promise = new Promise((resolve, reject) => {
//     let person = [
//         { name: "pankaj", lname: "patel", age: 5, add: "surat" },
//         { name: "raj", lname: "patel", age: 10, add: "vadodara" },
//         { name: "darshn", lname: "shah", age: 5, add: "ahmedabad" },
//         { name: "viral", lname: "patel", age: 20, add: "surat" },
//     ];
//     resolve(person)
//     reject("wrong")
// });

// promise
//     .then((res) => {
//         console.log("add:", res[2].add)
//         console.log("name is:", res[1].name + " " + res[1].lname)
//     })
//     .catch((err) => {
//         console.log("err:", err)
//     })





// let arr1 = [1, 2, 3, 4]
// console.log(arr1)

// // let reverseItem = arr1.toReversed();
// console.log(arr1.toReversed());

// let arr = [12, 18, 10, 5]
// console.log(arr)

// let arrSorted = arr.toSorted()
// console.log(arrSorted)



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// //filter function
// let filterArr = arr.filter((e) => e > 5)
// console.log(filterArr)

// //reverse function
// let revArr = arr.reverse((e) => e)
// console.log(revArr)

// //splice function
// let spliceArr = arr.splice(2)
// console.log(spliceArr)

// let arr1 = ['january', 'february', 'march', 'april', 'may']
// let splicearr1 = arr1.splice(2, 1)
// console.log(splicearr1)

// hosting
// function myfun() {
//     // let v
//     {
//         // var v;
//         // let v;
//         v = "rest"
//     }
//     return v;
// }
// console.log("myFunction:", myfun())


// let myfun = () => {
//     // let v;
//     {
//         var v;
//         v = "rest"
//     }
//     return v
// }
// console.log("myfun:", myfun())

// reduse using adition //

// let arr = [1, 2, 3, 4, 5, 6]

// let total = arr.reduce((lastEle, ele) => {
//     console.log("LastElement is :", lastEle);
//     console.log("Element is :", ele);

//     return lastEle + ele;

// })

// console.log("reduce :", total);

// distructureing //

// let find = ["aryan", 23, "dobariya"]


// let x = find[0];
// let y = find[1];
// let z = find[2];

// console.log(x);
// console.log(y);
// console.log(z);



function aar(a,b){
   let c = a+b
   console.log(c)
}