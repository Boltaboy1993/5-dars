"use strict";
const balance = document.querySelector('#balance');
const play = document.querySelector('#play');
const bet = document.querySelector('#bet');
const cards = document.querySelectorAll('.card');
let cash = 100;
let counter = 0;
// balans ni chiqarish
balance.innerText = `Balance: $${cash}`;
// onclick larni uladik
cards.forEach(card => {
    card.onclick = () => {
        // agar kartochka ochilgan bolsa, ochmaymiz
        if (card.classList.contains('is-flipped')) {
            return;
        }
        // agar uch marta ochilmagan bolsa
        if (counter < 3) {
            // kartochkani ochamiz
            card.classList.add('is-flipped');
            counter++;
            // teksharamiz, ichida $ bormi
            let number = card.querySelector('.number');
            if (number.innerHTML === '$') {
                // stavkani olib balansga qoshamiz
                let amount = +bet.value;
                cash += amount * 1.5;
                balance.innerText = `Balance: $${cash}`;
                // agar $ bolsa alert yuboramiz
                setTimeout(() => {
                    alert('You Got!');
                }, 1000);
                // oyinni toxtatamiz
                counter = 4;
            }
            // yutqizgan xolat
            else if (counter === 3) {
                let amount = +bet.value;
                cash -= amount;
                balance.innerText = `Balance: $${cash}`;
                setTimeout(() => {
                    alert('You Lose');
                }, 1000);
            }
        }
    };
});
//  x ga aylantirish
cards.forEach(card => {
    let number = card.querySelector('.number');
    number.innerHTML = 'X';
});
// random card olib unga $ berish
let r = random(0, 8);
console.log(r);
let card = cards[r];
let number = card.querySelector('.number');
number.innerHTML = '$';
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
