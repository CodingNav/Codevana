/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

// Search bar functionality
if (searchForm != null) {
    // click event listener
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchValue = searchInput.value;
        if (searchValue != "") {
            // changes url to go to search results page
            window.location.assign("/search?search=" + searchValue);
        }
    });
}

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
}

if (window.location.pathname.indexOf("/search") > -1 || window.location.pathname == "/favorites") {
    const favoriteBtns = document.querySelectorAll('.fa-star');

    favoriteBtns.forEach((favoriteBtn) => {
        const source = favoriteBtn.dataset.source;
        const title = favoriteBtn.dataset.title;
        const url = favoriteBtn.dataset.url;
        const image = favoriteBtn.dataset.image;
        const channel = favoriteBtn.dataset.channel;
        const likes = favoriteBtn.dataset.likes;

        favoriteBtn.addEventListener('click', async function (e) {
            e.preventDefault();
            if (favoriteBtn.classList.contains('far')) {
                const response = await fetch("/api/favorite", {
                    method: "POST",
                    body: JSON.stringify({ source, title, url, image, channel, likes }),
                    headers: { "Content-Type": "application/json" },
                });
                if (response.ok) {
                    const data = await response.json();
                    favoriteBtn.setAttribute("data-favid", data.id);
                    favoriteBtn.classList.remove('far');
                    favoriteBtn.classList.add('fas');
                }
                else {
                    console.log("Could not add to favorites");
                }
            }
            else {
                const id = favoriteBtn.dataset.favid;
                const response = await fetch("/api/favorite/" + id, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                });
                if (response.ok) {
                    if (window.location.pathname == "/favorites") {
                        favoriteBtn.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                    }
                    favoriteBtn.classList.remove('fas');
                    favoriteBtn.classList.add('far');
                }
                else {
                    console.log("Could not delete favorite");
                }
            }
        });
    });
}
// Following is to run the code-editor
if (window.location.pathname == "/code-editor") {
    // Initial data
    const HTML_CODE = (
        `<!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
              background-color: #141414;
            }
            h1 {
                color: red;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello World</h1>
    
    <script>
    </script>
    </body>
    </html>
    `);
    const CSS_LINKS = [`https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css`];

    // Elements
    const editorCode = document.getElementById("editorCode");
    const editorPreview = document.getElementById('editorPreview').contentWindow.document;
    const editorCopyButton = document.getElementById('editorCopyClipboard');

    // <iframe> inject CSS
    CSS_LINKS.forEach(linkURL => {
        const link = document.createElement('link');
        link.href = linkURL;
        link.rel = "stylesheet";
        editorPreview.head.appendChild(link);
    })

    // Monaco loader
    require.config({
        paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor/min/vs" }
    });

    window.MonacoEnvironment = {
        getWorkerUrl: function () {
            return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
            self.MonacoEnvironment = {
              baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min/'
            };
            importScripts('https://cdn.jsdelivr.net/npm/monaco-editor/min/vs/base/worker/workerMain.js');`)}`;
        }
    };

    // Monaco init
    require(["vs/editor/editor.main"], function () {
        createEditor(editorCode);
    });

    function createEditor(editorContainer) {
        let editor = monaco.editor.create(editorContainer, {
            value: HTML_CODE,
            language: "html",
            minimap: { enabled: false },
            automaticLayout: true,
            theme: 'vs-dark',
            fontSize: 12,
            scrollbar: {
                useShadows: false,
                vertical: "visible",
                horizontal: "visible",
                horizontalScrollbarSize: 12,
                verticalScrollbarSize: 12
            }
        });

        editorPreview.body.innerHTML = HTML_CODE;

        editor.onDidChangeModelContent(() => {
            editorPreview.body.innerHTML = editor.getValue();
        });

        editorCopyButton.onclick = () => {
            copyToClipboard(editor.getValue());
            const editorCopyButtonText = editorCopyButton.innerHTML;
            editorCopyButton.innerHTML = "Copied!";
            editorCopyButton.disabled = true;
            setTimeout(() => {
                editorCopyButton.disabled = false;
                editorCopyButton.innerHTML = editorCopyButtonText
            }, 500);
        }
    }

    function copyToClipboard(str) {
        const el = document.createElement("textarea");
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }
}