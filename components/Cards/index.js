// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    
    const cardsContainer = document.querySelector(".cards-container");

    Object.entries(response.data.articles).forEach(topic => {
  
        topic[1].forEach(article => {
            const newArticle = Card(article);
            cardsContainer.appendChild(newArticle);
        })
    });
})
.catch(error => {
    console.log(error);
})

function Card(cardObject) {
    //create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //add classes
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');
    
    //add structure
    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(authorName);

    //add content
    headline.textContent = cardObject.headline;
    img.src = cardObject.authorPhoto;
    authorName.textContent = cardObject.authorName;

    return card;
}