
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav ul');
    
    menuIcon.addEventListener('click', function() {
        if (nav.style.display === 'none') {
            nav.style.display = 'block';
            menuIcon.innerHTML = 'X'
        } else {
            nav.style.display = 'none';
            menuIcon.innerHTML = '&#9776;';
        }
    });

    renderTempleCards(temples)
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Trujillo Peru",
        location: "Trujillo, Peru",
        dedicated: "2015, June, 21",
        area: 28200,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/trujillo-peru/1280x800/trujillo-peru-temple-exterior-1449769-wallpaper.jpg"
    },
    {
        templeName: "Quito Ecuador",
        location: "Quito, Ecuador",
        dedicated: "2022, November, 20",
        area: 36780,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/1280x800/quito_ecuador_temple.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg" 
    }
    // Add more temple objects here...
  ];

const templeCardsContainer = document.querySelector('.gallery');

function renderTempleCards(temples) {

    temples.map((temple) => {
        
        const card = document.createElement('div');
        
        const cardContent = `
        <h2>${temple.templeName}</h2>
        <figure>
            <img src=${temple.imageUrl} alt=${temple.templeName} loading='lazy'>
            <figcaption>LOCATION: ${temple.location}</figcaption>
            <figcaption>DEDICATED: ${temple.dedicated}</figcaption> 
            <figcaption>SIZE: ${temple.area}</figcaption> 
        </figure>
        `;

        card.innerHTML = cardContent;

        templeCardsContainer.appendChild(card);

    });

}

const homeNavButton = document.getElementById('home');
const oldNavButton = document.getElementById('old');
const newNavButton = document.getElementById('new')
const largeNavButton = document.getElementById('large')
const smallNavButton = document.getElementById('small')

const heading = document.querySelector('.heading');

homeNavButton.addEventListener('click', function(e) {
    templeCardsContainer.innerHTML = ''
    heading.innerHTML = e.target.innerHTML
    renderTempleCards(temples)
})

oldNavButton.addEventListener('click', function(e) {
    templeCardsContainer.innerHTML = ''
    heading.innerHTML = e.target.innerHTML
    const filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) < 1900)
    renderTempleCards(filteredTemples)
});

newNavButton.addEventListener('click', function(e) {
    templeCardsContainer.innerHTML = ''
    heading.innerHTML = e.target.innerHTML
    const filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) > 2000)  
    renderTempleCards(filteredTemples)
});

largeNavButton.addEventListener('click', function(e) {
    templeCardsContainer.innerHTML = ''
    heading.innerHTML = e.target.innerHTML
    const filteredTemples = temples.filter(temple => temple.area > 90000)  
    renderTempleCards(filteredTemples)
});

smallNavButton.addEventListener('click', function(e) {
    templeCardsContainer.innerHTML = ''
    heading.innerHTML = e.target.innerHTML
    const filteredTemples = temples.filter(temple => temple.area < 10000)  
    renderTempleCards(filteredTemples)
});