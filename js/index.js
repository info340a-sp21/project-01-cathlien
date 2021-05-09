'use strict';

let form = document.querySelector('form');
form.addEventListener('change', function() {
    filterMajors();
});

function filterMajors() {
    let menu = document.querySelector('select');
    let selected = menu.options[menu.selectedIndex].text;
    let cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("d-none")) {
            cards[i].classList.remove("d-none");
        }
    }
    if (selected !== "No filter") {
        if (selected === "Bachelor of Sciences") {
            for (let i = 0; i < cards.length; i++) {
                if (!cards[i].classList.contains("bs")) {
                    cards[i].classList.add("d-none");
                }
            }
        }
        else if (selected === "Bachelor of Arts") {
            for (let i = 0; i < cards.length; i++) {
                if (!cards[i].classList.contains("ba")) {
                    cards[i].classList.add("d-none");
                }
            }
        }
        else if (selected === "Capacity-contrained major") {
            for (let i = 0; i < cards.length; i++) {
                if (!cards[i].classList.contains("cap")) {
                    cards[i].classList.add("d-none");
                }
            }
        }
        else if (selected === "Minimum major") {
            for (let i = 0; i < cards.length; i++) {
                if (!cards[i].classList.contains("min")) {
                    cards[i].classList.add("d-none");
                }
            }
        }
        else if (selected === "Open major") {
            for (let i = 0; i < cards.length; i++) {
                if (!cards[i].classList.contains("open")) {
                    cards[i].classList.add("d-none");
                }
            }
        }
    }
    
}