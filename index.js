const button2 = document.getElementById("buton2");
let naszaliczba = prompt("wybierz liczbe")
const button = document.getElementById("buton1").addEventListener("click", wyswietlanie);

// button.preventDefault()
function wyswietlanie(){
    if(naszaliczba <= 12){
        console.log("To zbior mniejszy od 12")}
    else {
        console.log("To zbior mniejszy od 12")}
}

class Card {
    constructor(value, type) {
        this.value = value;
        this.type= type;
        this.drawCard();
    }
    drawCard(){
        const card = document.createElement("div");
        card.setAttribute("class", `card`);
        card.setAttribute("value", `${this.value} ${this.type}`);
        card.innerHTML = `${this.value} ${this.type}`;
        return card;
    }
}
const value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "D",
    "K",
]

const type = ["&clubs;" , "&diams;", 	"&hearts;" , "&spades;" ]


 class Deck{


    cards = [];
    constructor() {
        this.createDeck();
        this.schaffle();
        this.pickOne();
    }
    createDeck(){
        value.forEach(v => type.forEach( t => this.cards.push(new Card(v, t))));
    }
    schaffle(){
        for(let i = this.cards.length  -1 ; i >0 ; i--){
            const j = Math.floor(Math.random()*i)
            const wyjebana = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = wyjebana;
        }

    }
    pickOne(){
        console.log( this.cards.pop());
    }
}
const deckk = new Deck();
// deckk.pickOne()

button2.addEventListener("click", () => deckk.pickOne());