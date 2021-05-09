'use strict';

function displayData() {
    d3.csv("data/grad-students.csv").then(function(data) {
        console.log(data); // [{"Hello": "world"}, …]
      });
}

displayData();