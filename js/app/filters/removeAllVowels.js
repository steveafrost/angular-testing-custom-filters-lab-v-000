function RemoveAllVowels() {
	return function (str) {
		return str.replace(/[aeiou]/gi, '');
	};
}

angular
	.module('app')
	.filter('removeAllVowels', RemoveAllVowels);