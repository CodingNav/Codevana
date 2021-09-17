const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');

// Search bar functionality
if (searchButton != null) {
    // click event listener
    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        const searchValue = searchInput.value;
        // changes url to go to search results page
        window.location.assign("/search?search=" + searchValue);
    });
};

// Search page more buttons functionality
if (window.location.pathname == "/search") {
    const moreBtns = document.querySelectorAll('.moreBtn');

    // loops through the array elements with the class of moreBtn
    moreBtns.forEach((moreBtn) => {
        // click event listener
        moreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // changes url to go to the specific sources page
            window.location.assign("/search/" + moreBtn.dataset.source + window.location.search);
        });
    });
};
