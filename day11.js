var arr = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

var str1 = "vamsi";
var reversedStr = "";
for (var i = str1.length - 1; i >= 0; i--) {
  reversedStr += str1[i];
}
console.log(reversedStr);

var str2 = "sita";
var reversedStr = "";
for (var i = str2.length - 1; i >= 0; i--) {
  reversedStr += str2[i];
}
console.log(reversedStr);

const input = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
let age;
for (let i = 0; i < input.length; i++) {
  const item = input[i];
  if (typeof item === "object" && item !== null && "age" in item) {
    age = item.age;
    break;
  }
}
console.log(age);
