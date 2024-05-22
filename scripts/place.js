document.addEventListener('DOMContentLoaded', () => {
    // Get today's date and the last modified date
    const today = new Date();
    const currentYear = today.getFullYear();
    const lastModifiedDate = document.lastModified;

    // Update the current year in the footer
    const fullYear = document.querySelector('#currentYear');
    fullYear.innerHTML = `${currentYear} Eduardo Calle | Trujillo - Peru`;

    // Update the last modified date in the footer
    const lastModified = document.querySelector('#lastModified');
    lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`;

    // Static weather data
    const temperature = 8; // Celsius
    const windSpeed = 15; // km/h

    // Calculate wind chill
    function calculateWindChill(temp, wind) {
        return (temp <= 10 && wind > 4.8) ? 
            (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) : 
            'N/A';
    }

    // Display wind chill
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = `${windChill}°C`;
});