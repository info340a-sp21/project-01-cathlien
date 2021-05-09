'use strict';


const formElem = document.querySelector('form');
formElem.addEventListener('submit', function(event){
    event.preventDefault();
    d3.csv("data/grad-students.csv").then(function(data) {
        console.log(data);
    })
    .catch(function(error){
        console.error(error);
    });
});
