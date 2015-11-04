
	
	var swObj = function(){
	}

	swObj.getPerson = function(id, cb) {
		var onePerson = "http://swapi.co/api/people/" + id;
		$.ajax({
			url: onePerson,
			method: 'get',
			dataType: 'json'
		}).then(function(person1) {
			cb(person1);
		});
	}

	swObj.allPersons = function(page, cb) {
		var everyone = "http://swapi.co/api/people/?page=" + page;
		$.ajax({
			url: everyone,
			method: 'get',
			dataType: 'json'
		}).then(function(allPeople) {
			cb(allPeople);
		});
	}


	swObj.getFilm = function(id, cb) {
		var oneFilm = "http://swapi.co/api/films/" + id;
		$.ajax({
			url: oneFilm,
			method: 'get',
			dataType: 'json'
		}).then(function(film1) {
			cb(film1);
		});
	}

	swObj.allFilms = function(page, cb) {
		var allMovies = "http://swapi.co/api/films/?page=" + page;
		$.ajax({
			url: allMovies,
			method: 'get',
			dataType: 'json'
		}).then(function(allFilms) {
			cb(allFilms);
		});
	}

	swObj.getPlanet = function(id, cb) {
		var onePlanet = "http://swapi.co/api/planets/" + id;
		$.ajax({
			url: onePlanet,
			method: 'get',
			dataType: 'json'
		}).then(function(planet1) {
			cb(planet1);
		});
	}

	swObj.allPlanets = function(page, cb) {
		var everyPlanet = "http://swapi.co/api/planets/" + page;
		$.ajax({
			url: everyPlanet,
			method: 'get',
			dataType: 'json'
		}).then(function(thePlanets) {
			cb(thePlanets);
		});
	}

	swObj.getSpecies = function(id, cb) {
		var oneSpecies = "http://swapi.co/api/species/" + id;
		$.ajax({
			url: oneSpecies,
			method: 'get',
			dataType: 'json'
		}).then(function(species1) {
			cb(species1);
		});
	}

	swObj.allSpecies = function(page, cb) {
		var everySpecies = "http://swapi.co/api/species/" + page;
		$.ajax({
			url: everySpecies,
			method: 'get',
			dataType: 'json'
		}).then(function(theSpecies){
			cb(theSpecies);
		});
	}

	swObj.getStarships = function(id, cb) {
		var oneStarships = "http://swapi.co/api/starships/" + id;
		$.ajax({
			url: oneStarships,
			method: 'get',
			dataType: 'json'
		}).then(function(starships1) {
			cb(starships1);
		});
	}

	swObj.allStarships = function(page, cb){
		var everyStarship = "http://swapi.co/api/starships/" + page;
		$.ajax({
			url: everyStarship,
			method: 'get',
			dataType: 'json'
		}).then(function(theStarships){
			cb(theStarships);
		});
	}

	swObj.getVehicle = function(id, cb) {
		var oneVehicle = "http://swapi.co/api/vehicles/" + id;
		$.ajax({
			url: oneVehicle,
			method: 'get',
			dataType: 'json'
		}).then(function(vehicle1) {
			cb(vehicle1);
		});
	}

	swObj.allVehicle = function(page, cb){
		var everyVehicle = "http://swapi.co/api/vehicles/" + page;
		$.ajax({
			url: everyVehicle,
			method: 'get',
			dataType: 'json'
		}).then(function(theVehicles){
			cb(theVehicles)
		});
	}

	swObj.getPerson(3,function(person1){
				console.log(person1);
	});
	swObj.getPerson(1,function(allPeople){
				console.log(allPeople);
	});
	swObj.getFilm(1,function(film1){
				console.log(film1);
	});
	swObj.getFilm(1,function(allFilms){
				console.log(allFilms);
	});
	swObj.getPlanet(1,function(planet1){
				console.log(planet1);
	});
	swObj.getPlanet(1,function(thePlanets){
				console.log(thePlanets);
	});
	swObj.getSpecies(1,function(species1){
				console.log(species1);
	});
	swObj.allSpecies(1, function(theSpecies){
				console.log(theSpecies);
	})
	swObj.getStarships(3, function(starships1){
				console.log(starships1);
	});
	swObj.allStarships(3, function(theStarships){
				console.log(theStarships)
	});
	swObj.getVehicle(4,function(vehicle1){
				console.log(vehicle1);
	});
	swObj.allVehicle(4,function(theVehicles){
				console.log(theVehicles);
	});
