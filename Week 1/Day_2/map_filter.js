let arr = []
for(i = 1;i <= 20;i++){
    arr.push(i)
}
console.log("Array of length 20:",arr)

let new_arr = arr.map(arr => arr*2);
console.log("Updated Array using map:",new_arr);

let filtered = arr.filter(arr => arr%4==0);
console.log("Number divisible by 4:",filtered);