document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 'fc-1888', name: 'Flux capacitor', avg_rating: 4.5 },
        { id: 'fc-2050', name: 'Power laces', avg_rating: 4.7 },
        { id: 'fs-1987', name: 'Time circuits', avg_rating: 3.5 },
        { id: 'ac-2000', name: 'Low voltage reactor', avg_rating: 3.9 },
        { id: 'jj-1969', name: 'Warp equalizer', avg_rating: 5.0 }
    ];

    const productSelect = document.getElementById('product-name');
    const avgRatingDisplay = document.getElementById('avg-rating');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        option.dataset.avgRating = product.avg_rating;
        productSelect.appendChild(option);
    });

    productSelect.addEventListener('change', () => {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const avgRating = selectedOption.dataset.avgRating;
        avgRatingDisplay.textContent = avgRating ? `Average Rating: ${avgRating}` : '';
    });

    const today = new Date();
    const currentYear = today.getFullYear();
    const lastModifiedDate = document.lastModified;

    document.getElementById('currentYear').innerText = currentYear;
    document.getElementById('lastModified').innerText = `Last Modification: ${lastModifiedDate}`;

    document.getElementById('reviewForm').addEventListener('submit', (e) => {
        e.preventDefault();
        updateReviewCounter();
        window.location.href = 'review.html';
    });
});

function updateReviewCounter() {
    if (localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', Number(localStorage.getItem('reviewCount')) + 1);
    } else {
        localStorage.setItem('reviewCount', 1);
    }
    console.log(`Number of reviews submitted: ${localStorage.getItem('reviewCount')}`);
}

if (window.location.pathname.includes('review.html')) {
    updateReviewCounter();
}
