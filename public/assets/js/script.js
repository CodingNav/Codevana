
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    const searchValue = searchInput.value;
    window.location.assign("/search?search=" + searchValue);
});

if (window.location.pathname == "/search") {
    const youtubeMoreBtn = document.querySelector('#youtube-more');
    const stackMoreBtn = document.querySelector('#stack-more');
    const redditMoreBtn = document.querySelector('#reddit-more');

    youtubeMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.assign("/search/youtube" + window.location.search);
    });

    stackMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.assign("/search/stackoverflow" + window.location.search);
    });

    redditMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.assign("/search/reddit" + window.location.search);
    });
};