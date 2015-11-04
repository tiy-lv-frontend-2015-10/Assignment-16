
	var starWarsData = function(){

	}

	starWarsData.getPerson = function(id, callback){
		$.ajax({
			url: "https://swapi.co/api/people/" +id,
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}
	starWarsData.getPerson(22, function(person){
		console.log(person);
	})


	starWarsData.getPeople = function(callback){
		$.ajax({
			url: "https://swapi.co/api/people/",
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}
	starWarsData.getPeople(function(person){
		console.log(person);
	})


	starWarsData.getFilm = function(id, callback){
		$.ajax({
			url: "https://swapi.co/api/films/" +id,
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}
	starWarsData.getFilm(3, function(films){
		console.log(films);
	})
	

	starWarsData.getFilms = function(callback){
		$.ajax({
			url: "https://swapi.co/api/films/",
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}
	starWarsData.getFilms(function(films){
		console.log(films);
	})


	starWarsData.getPlanet = function(id, callback){
		$.ajax({
			url: "https://swapi.co/api/planets/" +id,
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}
	starWarsData.getPlanet(2, function(planets){
		console.log(planets);
	})


	starWarsData.allPlanets = function(callback){
		$.ajax({
			url: "https://swapi.co/api/planets/",
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}
	starWarsData.allPlanets(function(planets){
		console.log(planets);
	})


	starWarsData.getSpecies = function(id, callback){
		$.ajax({
			url: "https://swapi.co/api/species/" +id,
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}

	starWarsData.getSpecies(12, function(species){
		console.log(species);
	})


	starWarsData.allSpecies = function(callback){
		$.ajax({
			url: "https://swapi.co/api/species/",
			method: 'get',
			dataType: 'json',
		}).then(function (response){
			callback(response);
		});
	}

	starWarsData.allSpecies(function(species){
		console.log(species);
	})


	starWarsData.getStarship = function(id, callback){
		$.ajax({
			url: "https://swapi.co/api/starships/" +id,
			method: 'get',
			dataType: 'json',
		}).then(function(response){
			callback(response);
		});
	}

	starWarsData.getStarship(12, function(starships){
		console.log(starships);
	})


	starWarsData.allStarships = function(callback){
		$.ajax({
			url: "https://swapi.co/api/starships",
			method: 'get',
			dataType: 'json',
		}).then(function(response){
			callback(response);
		});
	}

	starWarsData.allStarships(function(starships){
		console.log(starships);
	})

	starWarsData.getVehicle = function(id, callback){
		$.ajax({
			url: "https://swapi.co/api/vehicles/" +id,
			method: 'get',
			dataType: 'json',
		}).then(function(response){
			callback(response);
		});
	}

	starWarsData.getVehicle(7, function(vehicles){
		console.log(vehicles);
	})

	starWarsData.allVehicles = function(callback){
		$.ajax({
			url: "https://swapi.co/api/vehicles/",
			method: 'get',
			dataType: 'json',
		}).then(function(response){
			callback(response);
		});
	}

	starWarsData.allVehicles(function(vehicles){
		console.log(vehicles);
	})