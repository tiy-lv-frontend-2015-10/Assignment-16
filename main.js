var swapiObj = function() {

}

//getPerson(id) // - Returns one person.

swapiObj.getPerson = function(id,callback) {
	var swapiData = "http://swapi.co/api/people/"+id;
	$.ajax({
			url: swapiData,
			method: 'get',
			dataType: 'json'
	}).then(function(response) {
		callback(response);
	})
};

	swapiObj.getPerson(1, function(person) {
		console.log(person);
	})

//getPeople([page]) // - Returns everyone, paged. Defaults to page 1.

swapiObj.getPeople = function(callback) {
	var swapiData = "http://swapi.co/api/people/";
	$.ajax({
			url: swapiData,
			method: 'get',
			dataType: 'json'
	}).then(function(response) {
		callback(response);
	})
};

swapiObj.getPeople(function(people) {
		console.log(people);
	})


//getFilm(id) // - Returns one film.

swapiObj.getFilms = function(films,callback) {
	var swapiData = "http://swapi.co/api/films/"+films;
	$.ajax({
			url: swapiData,
			method: 'get',
			dataType: 'json'
	}).then(function(response) {
		callback(response);
	})
};

	swapiObj.getFilms(1, function(films) {
		console.log(films);
	})


//getFilms([page]) // - Returns all films, paged. Defaults to page 1.


//getPlanet(id) // - Returns a planet.


//getPlanets([page]) // - Returns all plaents, paged. Defaults to page 1.


//getSpecies(id) // - Returns one species.


//getAllSpecies([page]) // - Returns all species, paged. Defaults to page 1.


//getStarship(id) // - Returns a starship.


//getStarships([page]) // - Returns all starships, paged. Defaults to page 1.


//getVehicle(id) // - Returns a vehicle.


//getVehicles([page]) // - Returns all vehicles, paged. Defaults to page 1.




//      "name": "Luke Skywalker",
//      "height": "1.72 m",
//      "mass": "77 Kg",
//     "hair_color": "Blond",
//      "skin_color": "Caucasian",
//      "eye_color": "Blue",
//      "birth_year": "19 BBY",
//      "gender": "Male",
//      "homeworld": "http://swapi.co/api/planets/1/",
//      "films": [
//          "http://swapi.co/api/films/1/",
//          "http://swapi.co/api/films/2/",
//          "http://swapi.co/api/films/3/"
//     ],
//      "species": [
//          "http://swapi.co/api/species/1/"
//      ],
//      "vehicles": [
//          "http://swapi.co/api/vehicles/14/",
//          "http://swapi.co/api/vehicles/30/"
//      ],
//      "starships": [
//          "http://swapi.co/api/starships/12/",
//          "http://swapi.co/api/starships/22/"
//      ],
//      "created": "2014-12-09T13:50:51.644000Z",
//      "edited": "2014-12-10T13:52:43.172000Z",
//      "url": "http://swapi.co/api/people/1/"
//}