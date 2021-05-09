'use strict';

function displayData() {
    d3.csv("/data/grad-students.csv", function (data) {
        console.log(data);
    })
}

displayData();