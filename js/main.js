let elList = document.querySelector('.js-list');

// ---------------- RENDER FUNCTION ------------------ 


let renderFunc = (array, node) => {
    node.innerHTML = "";
    array.articles.forEach(el => {
        node.innerHTML += `
        <li class="content-list-item">
        <div class="info-div">
            <h3 class="content-list-item-title">
            ${el.author}
            </h3>
            <p class="content-list-item-text">
            ${el.content}
            </p>
            <p class="time"><time datetime="${el.publishedAt}">${el.publishedAt}</time></p>
        </div>
        <img class="content-list-item-img" src="${el.urlToImage}"
            alt="About this img"
            width="359" height="165">
    </li>
        `;
    });
}

// -------------- FETCHING ---------------------

fetch("https://newsapi.org/v2/everything?q=apple&from=2022-10-21&to=2022-10-21&sortBy=popularity&apiKey=dda9463b5a444c54af8cfb388dd641b2")
    .then(res => res.json())
    .then(data => renderFunc?.(data, elList));





