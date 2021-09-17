
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    const searchValue = searchInput.value;
    window.location.assign("/search?search=" + searchValue);
});
