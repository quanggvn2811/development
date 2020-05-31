var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function(a, b){
	return a.localeCompare(b);
})
console.log('Array sorted: ', items);
//expected: Array sorted:  [ 'adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé' ]