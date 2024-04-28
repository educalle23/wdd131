const today = new Date();

let fullYear = document.querySelector('#currentYear');
let lastModified = document.querySelector('#lastModified');

let currentYear = today.getFullYear();
let lastModifiedDate = document.lastModified;

fullYear.innerHTML = `${currentYear} Eduardo Calle | Trujillo - Peru`;
lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`;
