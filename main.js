var starWarsObj = function() {
  this.getPerson = person;
  this.getPeople = people;
  this.getFilm = film;
  this.getFilms = films;
  this.getPlanet = planet;
  this.getPlanets = planets;
  this.getSpecies = species;
  this.getAllSpecies = allSpecies;
  this.getStarship = starship;
  this.GetStarships = starships;
  this.getVehicle = vehicle;
  this.getVehicles = vehicles;
}

starWarsObj.person = function (id, callback) {

  var personURL = "http://swapi.co/api/people/" + id;

  $.ajax({
    url: personURL,
    method: 'get',
    dataType: 'json'
  }).then (function(person) {
      callback(person);
    })
  };

starWarsObj.person(85, function(person) {
  console.log(person);
});

starWarsObj.people = function (pageNumber, callback) {

  var peopleURL = "http://swapi.co/api/people/?page=" + pageNumber;

  $.ajax({
    url: peopleURL,
    method: 'get',
    dataType: 'json'
  }).then (function(people) {
      callback(people);
    });
  };
starWarsObj.people(1, function(people) {
  console.log(people);
});

starWarsObj.film = function(id, callback) {

  var filmURL = "http://swapi.co/api/films/" + id;

  $.ajax({
    url: filmURL,
    method: 'get',
    dataType: 'json'
  }).then(function(film) {
      callback(film);
    });
  };
starWarsObj.film(2, function(film) {
  console.log(film);
});

starWarsObj.films = function(callback) {

  var filmsURL = "http://swapi.co/api/films/"

  $.ajax({
    url: filmsURL,
    method: 'get',
    dataType: 'json'
  }).then(function(films) {
    callback(films);
  });
};

starWarsObj.films(function(films) {
  console.log(films);
});

starWarsObj.planet = function(id, callback) {

  var planetURL = "http://swapi.co/api/planets/" + id;

  $.ajax({
    url: planetURL,
    method: 'get',
    dataType: 'json'
  }).then(function(planet) {
    callback(planet);
  });
};

starWarsObj.planet(3, function(planet) {
  console.log(planet);
});

starWarsObj.planets = function(pageNumber, callback) {

  var planetsURL = "http://swapi.co/api/planets/?page=" + pageNumber;

  $.ajax({
    url: planetsURL,
    method: 'get',
    dataType: 'json'
  }).then(function(planets) {
    callback(planets);
  });
};

starWarsObj.planets(1, function(planets) {
  console.log(planets);
});

starWarsObj.species = function(id, callback) {

  var speciesURL = "http://swapi.co/api/species/" + id;

  $.ajax ({
    url: speciesURL,
    method: 'get',
    dataType: 'json'
  }).then(function(species){
    callback(species);
  })
};

starWarsObj.species(1, function(species) {
  console.log(species);
});

starWarsObj.allSpecies = function(pageNumber, callback) {

  var allSpeciessURL = "http://swapi.co/api/species/?page=" + pageNumber;

  $.ajax({
    url: allSpeciesURL,
    method: 'get',
    dataType: 'json'
  }).then(function(allSpecies) {
    callback(allSpecies);
  });
};

starWarsObj.planets(1, function(allSpecies) {
  console.log(allSpecies);
});

starWarsObj.starship = function(id, callback) {

  var starshipURL = "http://swapi.co/api/starships/" + id;

  $.ajax ({
    url: starshipURL,
    method: 'get',
    dataType: 'json'
  }).then(function(starship) {
    callback(starship);
  });
};

starWarsObj.starship(3, function(starship) {
  console.log(starship);
});

starWarsObj.starships = function(pageNumber, callback) {

  var starshipsURL = "http://swapi.co/api/starships/?page=" + pageNumber;

  $.ajax ({
    url: starshipsURL,
    method: 'get',
    dataType: 'json'
  }).then(function(starships) {
    callback(starships)
  });
};

starWarsObj.starships(1, function(starships) {
  console.log(starships);
});

starWarsObj.vehicle = function(id, callback) {

  var vehicleURL = "http://swapi.co/api/vehicles/" + id;

  $.ajax ({
    url: vehicleURL,
    method: 'get',
    dataType: 'json'
  }).then(function(vehicle) {
    callback(vehicle);
  });
};

starWarsObj.vehicle(7, function(vehicle) {
  console.log(vehicle);
});

starWarsObj.vehicles = function(pageNumber, callback) {

  var vehiclesURL = "http://swapi.co/api/vehicles/?page=" + pageNumber;

  $.ajax ({
    url: vehiclesURL,
    method: 'get',
    dataType: 'json'
  }).then(function(vehicles) {
    callback(vehicles);
  });
};

starWarsObj.vehicles(1, function(vehicles) {
  console.log(vehicles);
});

