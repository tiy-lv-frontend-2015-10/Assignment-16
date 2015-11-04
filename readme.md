# 11/03/15

___This homework is due by 8am, on 11/04/2015___
Theoretically, it's been done for several Millenia--
...in a galaxy far, far away....

## Objectives

- Understand how to create objects with methods
	But huh...my methods didn't really create many objects...only casualties.
- Understand how to use Ajax with REST
	Representationally Transferred State to a galaxy far, far away....
- Understand pagination and how to use it
	...didn't really use it but ?page= worked. Too bad ?pageby= didn't. Or maybe?  ...no.

## Normal Mode

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

## Hard Mode

Cache the data using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) after the initial grab of whatever particular call was made.

## Deliverables

1. Fork this repository and create a pull request with your project.
