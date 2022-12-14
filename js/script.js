/*
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.

Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro

**Bonus 1:**
Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
****
**Bonus 2:**
E se volessi un bottone per invertire la “direzione” del carosello?

*/

const items = [
    {
        title: 'Argentina',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perspiciatis',
        link: 'argentina.jpg'
    },
    {
        title: 'Chile',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
        link: 'chile.jpg'
    },
    {
        title: 'Colombia',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores',
        link: 'colombia.jpg'
    },
    {
        title: 'Peru',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing',
        link: 'peru.jpg'
    },
    {
        title: 'Sweden',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perspiciatis parole in latino',
        link: 'sweden.jpg'
    }
]

const images = document.querySelector('.images');
const thumbs = document.querySelector('.thumbs');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
let counter = 0;


addActiveToItems();
addActiveToThumbs();







function drawItems(){
    items.forEach((item) => {
        const image = `<div class="item">

        <img src="img/${item.link}" alt="${item.title}">

        <h2 class="title">
            ${item.title}
        </h2>

        <p class="desc">
            ${item.desc}
        </p>
        </div>`;
        images.innerHTML += image;
    })
}



function drawThumbs(){
    items.forEach((item) => {
        const thumb = `<img src="img/${item.link}" alt="${item.title}" class="thumb-item">`;
        thumbs.innerHTML += thumb;
        console.log('questa è drawThumbs');
    })
}



function addActiveToItems(){
    drawItems();
    const item = document.querySelector('.item');
    item.classList.add('active');
}


function addActiveToThumbs(){
    drawThumbs();
    const thumbitem = document.querySelector('.thumb-item');
    thumbitem.classList.add('thumb-active');
    console.log('questa è addactivetothumbs');
}


