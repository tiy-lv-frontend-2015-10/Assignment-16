var swObj= function() {
	this.getPerson=person;
	this.getPeople=people;
	this.getFilm=film;
	this.getFilms=films;
	this.getPlanet=planet;
	this.getPlanets=planets;
	this.getSpecie=specie;
	this.getSpecies=species;
	this.getStarship=starship;
	this.getStarships=starships;
	this.getVehicle=vehicle;
	this.getVehicles=vehicles;
}

swObj.person = function (id,callback) {
	
	var getPersonHtml="http://swapi.co/api/people/"+id;

	$.ajax({
		url: getPersonHtml,
		method:'get',
		dataType:'json',

	}).then(function(people){
		callback(people);
	});
};


swObj.person(1, function(person){
	console.log(person);
});

swObj.people = function(id,callback) {

	var getPeopleHtml="http://swapi.co/api/people/?page="+id;

	$.ajax({
		url: getPeopleHtml,
		method:'get',
		dataType:'json'
	}).then(function(people) {
		callback(people);
	});

};

swObj.people(1,function(people){
	console.log(people);
});


swObj.film = function(id,callback) {

	var getFilmHtml="http://swapi.co/api/films/"+id;

	$.ajax({
		url: getFilmHtml,
		method:'get',
		dataType:'json'
	}).then(function(film){
		callback(film);
	});

};

swObj.film(1,function(film){
	console.log(film);
})




swObj.films = function(callback) {

	var getFilmsHtml="http://swapi.co/api/films/";

	$.ajax({
		url: getFilmsHtml,
		method:'get',
		dataType:'json'
	}).then(function(films){
		callback(films);
	});

};

swObj.films(function(films){
	console.log(films);
});

swObj.planets = function(page,callback) {
	var getPlanetsHtml="http://swapi.co/api/planets/?page="+page;

	$.ajax({
		url:getPlanetsHtml,
		method:'get',
		dataType:'json'
	}).then(function(planets){
		callback(planets);
	});
};

swObj.planets(1,function(planets){
	console.log(planets);
});

swObj.planet = function(id,callback) {
	var getPlanetHtml="http://swapi.co/api/planets/"+id;

	$.ajax({
		url:getPlanetHtml,
		method:'get',
		dataType:'json'
	}).then(function(planet){
		callback(planet);
	});
};

swObj.planet(1,function(planet){
	console.log(planet);
});


swObj.specie = function(id,callback) {
	var getSpecieHtml="http://swapi.co/api/species/"+id;

	$.ajax({
		url:getSpecieHtml,
		method:'get',
		dataType:'json',
	}).then(function(specie){
		callback(specie);
	});
};

swObj.specie(1,function(species){
	console.log(species);
});

swObj.species = function(page,callback) {
	var getSpeciesHtml="http://swapi.co/api/species/?page="+page;

	$.ajax({
		url:getSpeciesHtml,
		method:'get',
		dataType:'json',
	}).then(function(species){
		callback(species);
	});
};

swObj.species(1,function(species){
	console.log(species);
});

swObj.starship = function(id,callback) {
	var getStarshipHtml="http://swapi.co/api/starships/"+id;

		$.ajax({
		url:getStarshipHtml,
		method:'get',
		dataType:'json',
	}).then(function(starship){
		callback(starship);
	});
};

swObj.starship(3,function(starship){
	console.log(starship);
});

swObj.starships = function(page,callback) {
	var getStarshipsHtml="http://swapi.co/api/starships/?page="+page;

		$.ajax({
		url:getStarshipsHtml,
		method:'get',
		dataType:'json',
	}).then(function(starships){
		callback(starships);
	});
};

swObj.starships(1,function(starship){
	console.log(starship);
});


swObj.vehicle = function(id,callback) {
	var getVehicleHtml="http://swapi.co/api/vehicles/"+id;

		$.ajax({
		url:getVehicleHtml,
		method:'get',
		dataType:'json',
	}).then(function(vehicle){
		callback(vehicle);
	});
};

swObj.vehicle(7, function(vehicle){
	console.log(vehicle);
});

swObj.vehicles = function(page,callback) {
	var getVehiclesHtml="http://swapi.co/api/vehicles/?page="+page;

		$.ajax({
		url:getVehiclesHtml,
		method:'get',
		dataType:'json',
	}).then(function(vehicles){
		callback(vehicles);
	});
};

swObj.vehicles(1, function(vehicles){
	console.log(vehicles);
});





// getPerson(id) // - Returns one person.
// getPeople([page]) // - Returns everyone, paged. Defaults to page 1.
// getFilm(id) // - Returns one film.
// getFilms([page]) // - Returns all films, paged. Defaults to page 1.
// getPlanet(id) // - Returns a planet.
// getPlanets([page]) // - Returns all plaents, paged. Defaults to page 1.
// getSpecies(id) // - Returns one species.
// getAllSpecies([page]) // - Returns all species, paged. Defaults to page 1.
// getStarship(id) // - Returns a starship.
// getStarships([page]) // - Returns all starships, paged. Defaults to page 1.
// getVehicle(id) // - Returns a vehicle.
// getVehicles([page]) // - Returns all vehicles, paged. Defaults to page 1.



