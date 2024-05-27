const today = new Date();

let fullYear = document.querySelector('#currentYear');
let lastModified = document.querySelector('#lastModified');

let currentYear = today.getFullYear();
let lastModifiedDate = document.lastModified;

fullYear.innerHTML = `${currentYear} Eduardo Calle | Trujillo - Peru`;
lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`;


const button = document.querySelector('#nav-menu');
const menu = document.querySelector('.navigator');

button.addEventListener('click', () => {
    console.log('Heme aqui')
    menu.classList.toggle('open');
    button.classList.toggle('open');
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
        templeName: "Cochabamba Bolivia",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 43298,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/e012ebb4075dc7976a314471fc0a3b3058e37c1a/full/320%2C/0/default" 
    },
    {
        templeName: "Trujillo Peru",
        location: "Trujillo, Peru",
        dedicated: "2015, June, 21",
        area: 37465,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/9943a99ff243f011c0533e3633cf9ecee0829628/full/320%2C/0/default"    },
    {
        templeName: "Los Olivos Lima Perú",
        location: "Los Olivos, Lima, Perú",
        dedicated: "2024, January, 14",
        area: 44985,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/3f3327a93b9f11eeb2f0eeeeac1e45f6554046d6/full/320%2C/0/default"
    }
];


createTemplateCard(temples);
  
function createTemplateCard(filteredTemples) {
    document.querySelector('.cards').innerHTML = '';
    filteredTemples.forEach(temple => {
        let cardSection = document.createElement('section');
        let cardName = document.createElement('h3');
        let cardLocation = document.createElement('a');
        let cardDedicated = document.createElement('p');
        let cardArea = document.createElement('p');
        let cardImageUrl = document.createElement('img');
  
        cardName.textContent = temple.templeName;
        cardLocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        cardDedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        cardArea.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        cardImageUrl.setAttribute('src', temple.imageUrl);
        cardImageUrl.setAttribute('alt', `${temple.templeName} Temple`);
        cardImageUrl.setAttribute('loading', 'lazy');
  
        cardSection.appendChild(cardName);
        cardSection.appendChild(cardLocation);
        cardSection.appendChild(cardDedicated);
        cardSection.appendChild(cardArea);
        cardSection.appendChild(cardImageUrl);
        cardSection.setAttribute('class', 'col-3');
      
        document.querySelector('.cards')
            .appendChild(cardSection);
    });




    let itemMenu = document.querySelectorAll('.link');

    itemMenu.forEach( button => {
        button.addEventListener( 'click', function(){
        let menuRel = button.getAttribute('id');
        let filteredData;
        if( menuRel == 'old' || menuRel == 'new' )
        {
            if (menuRel === 'new') {
                filteredData = temples.filter(temple => checkOldNew(temple.dedicated));
            }
            else if (menuRel == 'old'){
                filteredData = temples.filter(temple => !checkOldNew(temple.dedicated) && new Date(temple.dedicated).getFullYear() < 1900);
            }
        }
        else if(menuRel == 'large' || menuRel == 'small'){
            if( menuRel == 'large') {
            filteredData = temples.filter( temple => temple.area>90000);
            }
            else {
            filteredData = temples.filter( temple =>temple.area<10000);
            }
    
        }
        else {
            filteredData = temples.filter( temple => temple !== undefined );
        }
        
        createTemplateCard(filteredData);
        });
    });
    
    function checkOldNew(dateOldNew) {
        const date = new Date(dateOldNew).getFullYear();
        return date > 1999;
    }
}