var swObj = function(){
}

function callApi(swapi, callback) {
    $.ajax ({
          url: swapi,
          dataType:"Json",
          method:"get"
        }).then (function(answer){
            callback(answer);
        })
}
/*getPerson(id) // - Returns one person.*/

swObj.getPerson = function(id, callback){

    var swapi = "http://swapi.co/api/people/"+id;  /*change according to what I am looking*/
    callApi(swapi, callback);
};



/* getPeople([page]) // - Returns everyone, paged. Defaults to page 1. */
swObj.getPeople = function(page, callback){

    var swapi = "http://swapi.co/api/people/?page=" + page;  
    callApi(swapi, callback);
};


/*getFilm(id) // - Returns one film.*/

swObj.getFilm= function(id, callback){

    var swapi = "http://swapi.co/api/films/"+id;  /*change according to what I am looking*/
    callApi(swapi, callback);
};


/* getFilms([page]) // - Returns all films, paged. Defaults to page 1. */
swObj.getFilms = function(page, callback){

    var swapi = "http://swapi.co/api/films/?page=" + page;  
    callApi(swapi, callback);
};

/* getPlanet(id) // - Returns a planet. */
swObj.getPlanet = function(id, callback) {
    var swapi = "http://swapi.co/api/planets/" + id;  
    callApi(swapi, callback);
}


/* getPlanets([page]) // - Returns all plaents, paged. Defaults to page 1. */
swObj.getPlanets = function(page, callback) {
    var swapi = "http://swapi.co/api/planets/?page=" + page;  
    callApi(swapi, callback);
}
/*getSpecies(id) // - Returns one species.*/

swObj.getSpecies = function(id, callback) {
    var swapi = "http://swapi.co/api/species/" + id;  
    callApi(swapi, callback);
}

/*getAllSpecies([page]) // - Returns all species, paged. Defaults to page 1.*/
swObj.getAllSpecies = function(page, callback) {
    var swapi = "http://swapi.co/api/species/?page=" + page;  
    callApi(swapi, callback);

}

/*getStarship(id) // - Returns a starship.*/

swObj.getStarship = function(id, callback) {
    var swapi = "http://swapi.co/api/starships/" + id;  
    callApi(swapi, callback);
}


/*getStarships([page]) // - Returns all starships, paged. Defaults to page 1.*/

swObj.getStarships = function(page, callback) {
    var swapi = "http://swapi.co/api/starships/?page=" + page;  
    callApi(swapi, callback);

}

/*getVehicle(id) // - Returns a vehicle.*/

swObj.getVehicle = function(id, callback) {
    var swapi = "http://swapi.co/api/vehicles/" + id;  
    callApi(swapi, callback);
}


/*getVehicles([page]) // - Returns all vehicles, paged. Defaults to page 1*/

swObj.getVehicles = function(page, callback) {
    var swapi = "http://swapi.co/api/vehicles/?page=" + page;  
    callApi(swapi, callback);

}



swObj.getPerson(1, function(data){
    console.log(data);
})

swObj.getPeople(3, function(data){
    console.log(data);
})

swObj.getFilm(1,function(data){
    console.log(data);
})

swObj.getFilms(1,function(data){
    console.log(data);
})

swObj.getPlanet(1,function(data){
    console.log(data);
})

swObj.getPlanets(1,function(data){
    console.log(data);
})

swObj.getSpecies(1,function(data){
    console.log(data);
})

swObj.getAllSpecies(2,function(data){
    console.log(data);
})

swObj.getStarship(9,function(data){
    console.log(data);
})

swObj.getStarships(1,function(data){
    console.log(data);
})

swObj.getVehicle(4,function(data){
    console.log(data);
})

swObj.getVehicles(1,function(data){
    console.log(data);
})
