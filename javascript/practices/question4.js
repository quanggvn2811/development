//Closure một chức năng có quyền truy cập vào phạm vi cha, ngay cả sau khi phạm vi đã đóng
//Viết function mô tả được closure trong js.
function multiplier(first) {
 let a = first;
 return function(b) {
 return a * b;
 };
}

let multiplyBy2 = multiplier(2);
console.info(multiplyBy2(4));
console.info(multiplyBy2(5));