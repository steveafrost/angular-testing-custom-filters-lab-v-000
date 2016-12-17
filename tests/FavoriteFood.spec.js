describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
    favoriteFood = $filter('favoriteFood');
	}));

  it('filters an array of people based on given favoriteFood argument', function() {
    var people = [
      {
        'name': 'Paul',
        'favoriteFood': 'Ice Cream'
      },
      {
        'name': 'Charlie',
        'favoriteFood': 'Nachos'
      },
      {
        'name': 'Sally',
        'favoriteFood': 'Pizza'
      }
    ];

    var filteredResults = favoriteFood(people, 'Nachos');
    expect(filteredResults.length).toBe(1);
    expect(filteredResults[0].name).toMatch('Charlie');
  });


});
