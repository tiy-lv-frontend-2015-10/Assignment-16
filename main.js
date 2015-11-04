swObj= function() {

};


function ajaxCall(path, id, callback) {
	var url="http://www.swapi.co/api/";

	url=url+path+"/"+id;

	$.ajax({
		url: url,
		method:'get',
		dataType:'json'
	}).then(function(response){
		callback(response);
	});



}

ajaxCall('people',1,function(x){
	console.log(x);
});
ajaxCall('films',1,function(x){
	console.log(x);
});
ajaxCall('planets',1,function(x){
	console.log(x);
});
ajaxCall('species',1,function(x){
	console.log(x);
});
ajaxCall('starships',2,function(x){
	console.log(x);
});
ajaxCall('vehicles',7,function(x){
	console.log(x);
});







function ajaxGen(path,callback) {
	var url="http://www.swapi.co/api/";

	url=url+path;

	$.ajax({
		url: url,
		method:'get',
		dataType:'json'
	}).then(function(response){
		callback(response);
	});



}

ajaxGen('people',function(x){
	console.log(x);
});
ajaxGen('films',function(x){
	console.log(x);
});
ajaxGen('planets',function(x){
	console.log(x);
});
ajaxGen('species',function(x){
	console.log(x);
});
ajaxGen('starships',function(x){
	console.log(x);
});
ajaxGen('vehicles',function(x){
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



