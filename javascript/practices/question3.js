// 3. Viết function tìm kiếm phần tử trong một mảng
var array = [1, 2, 5, 3, 6, 9, 7, 12, 10, 4, 13, 22, 15];
//search(6) -> a[4];

function search(arr, item){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === item) return i;
	}
	return -1;
}
//search(array, 6);
console.log("Searching for 6: array[" + search(array, 10) + "]");