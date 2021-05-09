'use strict';

let formElem = document.querySelector('form');
let tableBody = document.querySelector('tbody');

formElem.addEventListener('submit', function(event){
    event.preventDefault();
    loadData();
    let button = document.querySelector('button');
    button.disabled = true;
    toggleLoading();
});

function loadData() {
    let promise = d3.csv("data/grad-students.csv").then(function(data) {
        toggleLoading();
        createTableHeader();
        for (let i = 0; i < data.length; i++) {
            let row = document.createElement('tr');
            row.appendChild(createRowNode(data[i].Major));
            row.appendChild(createRowNode(data[i].Grad_total));
            row.appendChild(createRowNode(data[i].Grad_employed));
            row.appendChild(createRowNode(data[i].Grad_median));
            tableBody.appendChild(row);
        }
    })
    .catch(function(error){
        renderError(error);
    });
    return promise;
    
}

function createTableHeader() {
    let table = document.querySelector('thead');
    table.appendChild(createHeader("Major"));
    table.appendChild(createHeader("Total Graduates"));
    table.appendChild(createHeader("Total Graduates Employed"));
    table.appendChild(createHeader("Graduates Median Wages ($)"))
}

function createHeader(text) {
    let header = document.createElement('th');
    header.setAttribute("scope", "col");
    header.textContent = text;
    return header;
}

function createRowNode(text) {
    let node = document.createElement('td');
    node.textContent = text;
    return node;
}

function toggleLoading() {
    let load = document.querySelector('.alert');
    if (load.classList.contains("d-none")) {
        load.classList.remove("d-none");
    } else {
        load.classList.add("d-none");
    }
    
}

function renderError(error) {
    let message = document.createElement('div');
    message.classList.add("alert", "alert-danger");
    message.textContent = error.message;
    document.querySelector(".table").appendChild(message);
  }