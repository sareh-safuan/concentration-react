"use strict";

/*
* ----------- Load the deck ----------------
*/
function loadDeck() {
    
    let cards = [
                    { id: 'Bond', path: 'img/Bond.png'},
                    { id: 'Dann', path: 'img/Dann.png'},
                    { id: 'David', path: 'img/David.png'},
                    { id: 'Frank', path: 'img/Frank.png'},
                    { id: 'James', path: 'img/James.png'},
                    { id: 'Jane', path: 'img/Jane.png'},
                    { id: 'Jerry', path: 'img/Jerry.png'},
                    { id: 'Joan', path: 'img/Joan.png'},
                    { id: 'Bond', path: 'img/Bond.png'},
                    { id: 'Dann', path: 'img/Dann.png'},
                    { id: 'David', path: 'img/David.png'},
                    { id: 'Frank', path: 'img/Frank.png'},
                    { id: 'James', path: 'img/James.png'},
                    { id: 'Jane', path: 'img/Jane.png'},
                    { id: 'Jerry', path: 'img/Jerry.png'},
                    { id: 'Joan', path: 'img/Joan.png'},  
//                    { id: 'John', path: 'img/John.png'},
//                    { id: 'Kid', path: 'img/Kid.png'},
//                    { id: 'Lisa', path: 'img/Lisa.png'},
//                    { id: 'Marie', path: 'img/Marie.png'},
//                    { id: 'Maya', path: 'img/Maya.png'},
//                    { id: 'Stern', path: 'img/Stern.png'},
//                    { id: 'Terry', path: 'img/Terry.png'},
//                    { id: 'Truck', path: 'img/Truck.png'},                    
                ]

    cards = shuffleCards(cards);
    
    let deck = document.getElementById('deck');
    let index = 0;
    
    for(let i = 0; i < 4; i++) {
        let count = 0;
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        for(let key = index; key < cards.length; key++) {
            let div =  document.createElement('div');
            let frame = document.createElement('div');
            let album = document.createElement('div');
            let img = document.createElement('img');

            div.setAttribute('class', 'col s3');
            frame.setAttribute('class', 'card');
            album.setAttribute('class', 'card-image');
            img.setAttribute('src', 'img/frame.png');
            img.setAttribute('id', cards[key].path);
            img.addEventListener('click', clicked);
            
            album.appendChild(img);
            frame.appendChild(album);
            div.appendChild(frame);
            row.append(div);
            count++;
            index++;
            
            if(count == 4) {
                break;
            }
            
        }
        
        deck.appendChild(row);
    }

}

/*
* -------------- shuffle the card ----------------
*/
function shuffleCards(cards) {
    for(let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    
    return cards;
}

let count = 0;
let selectedCards = []

function clicked(event) {
    selectedCards[count] = event.target;
    
    flip(selectedCards);
    
    if(selectedCards.length == 2) {
        findDuplicate(selectedCards);
        console.log('2');
    }
    
    count++;
    if(count > 1) {
        count = 0;
        selectedCards.length = 0;
    }
}

/*
* --------------- Flip the card --------------- 
*/
function flip(cards) {       
    for(let card of cards) {
        card.setAttribute('src', card.id);
    }
}

/*
* --------------- Find the duplicate card ---------------
*/
function findDuplicate(cards) {   
    if(cards[0].id == cards[1].id){
        //alert('Yes'); // TODO: ???
        let fCard = cards[0];
        let sCard = cards[1];
        setTimeout(() => {removeCards(fCard, sCard)}, 500);
    }
    else {
        //alert('Booo'); // TODO: ???
        let firstCard = cards[0];
        let secondCard = cards[1];
        setTimeout(function(){ unFlip(firstCard, secondCard) }, 500);
    }
}

/*
* --------------- Remove the card from the deck ----------------
*/
function removeCards(x, y) {
    x.style.display = 'none';
    y.style.display = 'none';
}

/*
* --------------- Unflip the card back --------------
*/
function unFlip(x, y) {
    x.setAttribute('src', 'img/frame.png');
    y.setAttribute('src', 'img/frame.png');
}


























