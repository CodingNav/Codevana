
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');

if (searchButton != null) {
    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        const searchValue = searchInput.value;
        window.location.assign("/search?search=" + searchValue);
    });
};

if (window.location.pathname == "/search") {
    const moreBtns = document.querySelectorAll('.moreBtn');

    moreBtns.forEach((moreBtn) => {
        moreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.assign("/search/" + moreBtn.dataset.source + window.location.search);
        });
    });
};
