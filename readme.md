# 11/03/15



Create a javascript object with the following methods (not just global functions). The data can be grabbed from http://swapi.co/.

```js
	getPerson(id) // - Returns one person.
	getPeople([page]) // - Returns everyone, paged. Defaults to page 1.
	getFilm(id) // - Returns one film.
	getFilms([page]) // - Returns all films, paged. Defaults to page 1.
	getPlanet(id) // - Returns a planet.
	getPlanets([page]) // - Returns all plaents, paged. Defaults to page 1.
	getSpecies(id) // - Returns one species.
	getAllSpecies([page]) // - Returns all species, paged. Defaults to page 1.
	getStarship(id) // - Returns a starship.
	getStarships([page]) // - Returns all starships, paged. Defaults to page 1.
	getVehicle(id) // - Returns a vehicle.
	getVehicles([page]) // - Returns all vehicles, paged. Defaults to page 1.
```



Cache the data using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) after the initial grab of whatever particular call was made.



1. Fork this repository and create a pull request with your project.
