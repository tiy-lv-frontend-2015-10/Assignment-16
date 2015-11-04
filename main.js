$(document).ready(function() {

var store_num = 0;

  function SW() {

    function useTheForce(dataURL, cb) {
      $.ajax({
        url: dataURL,
        method: 'get',
        dataType: 'json',
      }).then (function (resultData) {
          cb(resultData);
          store_num += 1;
          var stor_str = store_num.toString();
          var storKey = "store" + stor_str;
          localStorage.setItem(storKey, resultData);
          console.log(storKey, resultData);
          console.log(localStorage.getItem(storKey));
      });

    }
    var apiCall = "http://swapi.co/api/";

     	this.getPerson = function(id, cb) {
          var luke = apiCall + "people/" + id;
          useTheForce(luke, cb);
    	 }; // - Returns one person.

      this.getPeople = function(pg, cb) {
        var page = pg ? pg : 1;
        var ewoks = apiCall + "people/?page=" + page;
        useTheForce(ewoks, cb);
      }; // - Returns everyone, paged. Defaults to page 1.

      this.getFilm = function(id, cb) {
        var movieFan = apiCall + "films/" + id;
        useTheForce(movieFan, cb);
       };// - Returns one film.

       this.getFilms = function(cb) {
         var newFan = apiCall + "films/";
         useTheForce(newFan, cb);
       }; // - Returns all films, paged. Defaults to page 1.

       this.getPlanet = function(id, cb) {
         var world = apiCall + "planets/" + id;
         useTheForce(world, cb);
       };// - Returns a planet.

       this.getPlanets = function(pg, cb) {
         var page = pg ? pg : 1;
         var worlds = apiCall + "planets/?page=" + page;
         useTheForce(worlds, cb);
       }; // - Returns all planets, paged. Defaults to page 1.

       this.getSpecies = function(id, cb) {
         var alien = apiCall + "species/" + id;
         useTheForce(alien, cb);
       }; // - Returns one species.

       this.getAllSpecies = function(pg, cb) {
         var page = pg ? pg : 1;
         var aliens = apiCall + "species/?page=" + page;
         useTheForce(aliens, cb);
       };// - Returns all species, paged. Defaults to page 1.

       this.getStarship = function (id, cb) {
         var ship = apiCall + "starships/" + id;
         useTheForce(ship, cb);
       };// - Returns a starship.

       this.getStarships = function (pg, cb) {
         var page = pg ? pg : 1;
         var ships = apiCall + "starships/?page=" + page;
         useTheForce(ships, cb);
       }; // - Returns all starships, paged. Defaults to page 1.

       this.getVehicle = function (id, cb) {
         var car = apiCall + "vehicles/" + id;
         useTheForce(car, cb);
       };// - Returns a vehicle.

       this.getVehicles = function (pg, cb) {
         var page = pg ? pg : 1;
         var cars = apiCall + "vehicles/?page=" + page;
         useTheForce(cars, cb);
       };// - Returns all vehicles, paged. Defaults to page 1.


}

    var character = new SW();
    character.getPerson(56, function(person){
      console.log(person);
    });
    var characters = new SW();
    characters.getPeople(3, function(people){
      console.log(people);
    });
    var movie = new SW();
    movie.getFilm(1, function(episode){
      console.log(episode);
    });
    var movies = new SW();
    movies.getFilms(function(episode){
      console.log(episode);
    });
    var world = new SW();
    world.getPlanet(2, function(rock){
      console.log(rock);
    });
    var worlds = new SW();
    worlds.getPlanets(2, function(rocks){
      console.log(rocks);
    });
    var creature = new SW();
    creature.getSpecies(2, function(bug){
      console.log(bug);
    });
    var creatures = new SW();
    creatures.getAllSpecies(2, function(bugs){
      console.log(bugs);
    });
    var spacebuggy = new SW();
    spacebuggy.getStarship(10, function(pod){
      console.log(pod);
    });
    var spacebuggies = new SW();
    spacebuggies.getStarships(3, function(pods){
      console.log(pods);
    });
    var ride = new SW();
    ride.getVehicle(24, function(jalopy){
      console.log(jalopy);
    });
    var rides = new SW();
    rides.getVehicles(3, function(jalopies){
      console.log(jalopies);
    });

});
