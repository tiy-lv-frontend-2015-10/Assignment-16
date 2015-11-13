function ajaxOne(path, id, callback) {
	var url="http://www.swapi.co/api/"+path+"/"+id;	



	$.ajax({
		url: url,
		method:'get',
		dataType:'json'
	}).then(function(response){
		callback(response);
	});



}
ajaxOne('people',1,function(x){
	console.log(x);
})

ajaxOne('people',"",function(x){
	console.log(x);
})
ajaxOne('films',1,function(x){
	console.log(x);
})

ajaxOne('films',"",function(x){
	console.log(x);
})
ajaxOne('planets',1,function(x){
	console.log(x);
})

ajaxOne('planets',"",function(x){
	console.log(x);
})

ajaxOne('species',1,function(x){
	console.log(x);
})

ajaxOne('species',"",function(x){
	console.log(x);
})

ajaxOne('starships',2,function(x){
	console.log(x);
})

ajaxOne('starships',"",function(x){
	console.log(x);
})

ajaxOne('vehicles',"",function(x){
	console.log(x);
});

ajaxOne('vehicles',7,function(x){
	console.log(x);
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



