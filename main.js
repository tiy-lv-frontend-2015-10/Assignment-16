var StarWarsObject = function () {};

    function ajaxCallId (path, id, callback) {
    var url = "http://www.swapi.co/api/";
    url = url + path + "/" + id;
       
    $.ajax({
         url: url,
        method:'get',
        dataType: 'JSON'
    }).then(function(response){
        callback(response);
    });
    console.log(url);
    };

ajaxCallId("people", 1, function(people){
    console.log(people);
});
ajaxCallId("films", 1, function(films) {
    console.log(films);
});
ajaxCallId("planets", 1, function(planets) {
    console.log(planets);
});
ajaxCallId("species", 1, function(species) {
    console.log(species);
});




 function ajaxCallPath (path, callback) {
    var url = "http://www.swapi.co/api/";
    url = url + path + "/";
       

    $.ajax({
         url: url,
        method:'get',
        dataType: 'JSON'
    }).then(function(response){
        callback(response);
    });
    console.log(url);
    };
  
ajaxCallPath("people", function(people) {
    console.log(people);
});
ajaxCallPath("films", function(films) {
    console.log(films);
});
ajaxCallPath("planets", function(planets) {
    console.log(planets);
});
ajaxCallPath("species", function(species) {
    console.log(species);
});



//ajaxCall.person (function(person){
  //  console.log(person);
//});
   
//this.getPerson = function() {
  //$.ajax(person);  

//this.getPeople = function () {
//};

/*var person = new StarWarsObject();
    StarWarsObject.getPerson(1, function(person) {
    callback(person);
   console.log(person); 
});*/

