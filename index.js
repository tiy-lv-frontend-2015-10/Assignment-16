var swObj= function() {}



swObj.people = function(page , callback){
$.ajax({
  url:"https://swapi.co/api/people/" + page,
  method:'get',
  dataType:'json',
}).then(function(resp) {
	callback(resp);
})
}

swObj.person = function(id , callback){
	var luke = "https://swapi.co/api/people/" + id;
	$.ajax({
  url:luke,
  method:'get',
  dataType:'json',
	}).then(function(resp) {
	callback(resp);
	})
	}

swObj.films = function(id , callback){
	$.ajax({
	url:"https://swapi.co/api/films/" + id,
	method:'get',
	dataType:'json',
}).then(function(resp){
	callback(resp);
})
}

swObj.films = function(page,callback){
	$.ajax({
		url:"https:swapi.co/api/films/" + page,
		method:'get',
		dataType:'json',
	}).then(function(resp) {
		callback(resp);
	})
	}

	swObj.planets = function(page , callback){
		$.ajax({
			url:"https://swapi.co/api/planets/" + page,
			method:'get',
			dataType:'json',
		}).then(function(resp) {
			callback(resp);
		})
	}

	swObj.planets = function(id ,callback){
		$.ajax({
			url:"https://swapi.co/api/planets/" + id,
			method:'get',
			dataType:'json',
		}).then(function(resp){
			callback(resp)
		})
	}

swObj.species = function(page, callback){
	$.ajax({
		url:"https://swapi.co/api/species/" + page,
		method:'get',
		dataType:'json',
	}).then(function(resp){
		callback(resp);
	})
}

swObj.species = function(id ,callback){
	$.ajax({
		url:"https://swapi.co/api/species/" + id,
		method:'get',
		dataType:'json',
	}).then(function(resp){
		callback(resp);
	})
}

swObj.starships = function(id, callback){
	$.ajax({
		url:"https://swapi.co/api/starships/" + id,
		method:'get',
		dataType:'json',
	}).then(function(resp){
		callback(resp);
	})
}


swObj.starships = function(page, callback){
	$.ajax({
		url:"https://swapi.co/api/starships/",
		method:'get',
		dataType:'json',
	}).then(function(resp){
		callback(resp);
	})
}

swObj.vehicles = function( page, callback){
	$.ajax({
		url:"https://swapi.co/api/vehicles/",
		method:'get', 
		dataType:'json',
	}).then(function(resp){
		callback(resp);
	})
}


swObj.vehicles = function(id,callback){
	$.ajax({
		url:"https://swapi.co/api/vehicles/" + id,
		method:'get',
		dataType:'json',
	}).then(function(resp){
		callback(resp);
	})
}

swObj.people( 1, function(person){
	console.log(person);
})

swObj.person(2,function(person){
	console.log(person);
})

swObj.films(2,function(films){
	console.log(films)
})

swObj.films(1, function(films){
	console.log(films);
})

swObj.planets(1, function(planets){
	console.log(planets)
})

swObj.planets(2, function(planets){
	console.log(planets)
})

swObj.species(1,function(species){
	console.log(species)
})

swObj.species(2,function(species){
	console.log(species)
})

swObj.starships(3,function(starships){
	console.log(starships)
})

swObj.starships(1,function(starships){
	console.log(starships)
})

swObj.vehicles(6,function(vehicles){
	console.log(vehicles)
})

swObj.vehicles(6,function(vehicles){
		console.log(vehicles)
})
//getVehicle(id) // - Returns a vehicle.
//getVehicles([page]) // - Returns all vehicles, paged. Defaults to page 1.