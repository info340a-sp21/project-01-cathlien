'use strict';
/* global d3 */
let formElem = document.querySelector('form');
let tableBody = document.querySelector('tbody');

/* When the button is clicked, displays the data */
formElem.addEventListener('submit', function(event){
    event.preventDefault();
    loadData();
    let button = document.querySelector('button');
    button.disabled = true;
    toggleLoading();
});

/* Shows that the data is loading, then displays the data in a table. If there is an error, displays an error message. */
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

/* Creates the header for the table */
function createTableHeader() {
    let table = document.querySelector('thead');
    table.appendChild(createHeader("Major"));
    table.appendChild(createHeader("Total Graduates"));
    table.appendChild(createHeader("Total Graduates Employed"));
    table.appendChild(createHeader("Graduates Median Wages ($)"))
}

/* Creates the header with the given text */
function createHeader(text) {
    let header = document.createElement('th');
    header.setAttribute("scope", "col");
    header.textContent = text;
    return header;
}

/* Creates and returns a data cell with the given text inside the cell */
function createRowNode(text) {
    let node = document.createElement('td');
    node.textContent = text;
    return node;
}

/* Displays or hides the loading data message */
function toggleLoading() {
    let load = document.querySelector('.alert');
    if (load.classList.contains("d-none")) {
        load.classList.remove("d-none");
    } else {
        load.classList.add("d-none");
    }
}

/* Displays an error message */
function renderError(error) {
    let message = document.createElement('div');
    message.classList.add("alert", "alert-danger");
    message.textContent = error.message;
    document.querySelector(".table").appendChild(message);
}