const today = new Date();

let fullYear = document.querySelector('#currentYear');
let lastModified = document.querySelector('#lastModified');

let currentYear = today.getFullYear();
let lastModifiedDate = document.lastModified;

fullYear.innerHTML = `${currentYear} Eduardo Calle | Trujillo - Peru`;
lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`;


document.addEventListener('DOMContentLoaded', () => {
    let visitas = localStorage.getItem('appointments');

    if (!visitas) {
        visitas = 0;
    } else {
        visitas = parseInt(visitas);
    }

    visitas++;
    localStorage.setItem('appointments', visitas);
});