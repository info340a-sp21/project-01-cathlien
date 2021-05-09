'use strict';


const formElem = document.querySelector('form');
const tableBody = document.querySelector('tbody');
formElem.addEventListener('submit', function(event){
    event.preventDefault();
    loadData();
});

function loadData() {
    let promise = d3.csv("data/grad-students.csv").then(function(data) {
        for (let i = 0; i < data.length; i++) {
            let row = document.createElement('tr');
            row.appendChild(createRowNode(data[i].Major));
            row.appendChild(createRowNode(data[i].Grad_total));
            row.appendChild(createRowNode(data[i].Grad_employed));
            tableBody.appendChild(row);
        }
    })
    .catch(function(error){
        console.error(error);
    });
    return promise;
}

function createRowNode(text) {
    let node = document.createElement('td');
    node.textContent = text;
    return node;
}
