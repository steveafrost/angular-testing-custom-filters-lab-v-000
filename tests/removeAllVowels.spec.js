describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
    removeAllVowels = $filter('removeAllVowels');
	}));

  it('removes all vowels from a given string', function() {
    var filteredString = removeAllVowels('hello');

    expect(filteredString).not.toMatch(/[aeiou]/gi);
    expect(filteredString.length).toBe(3);
  });

});
