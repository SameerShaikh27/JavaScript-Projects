// Modified Version 2 - Daily Bulletin News WebApp (With Mutiple Choice of News Genre and Changed HTML)
// Created with the help of Object Oriented Programming.
// Creating a website for daily updated news called "Daily Bulletin". 

// Class which holds all the object and function which are require to run this "Daily Bulletin News WebApp".
class DigitalAkhbaar {
    constructor(apiKey, category, country) {
        // Creating objects so that we can use them later.
        this.apiKey = apiKey;
        this.category = category;
        this.country = country;
    }

    // Function to fetch news from the api and to display onto the screen.
    fetchNews() {
        // Instantiating or creating an xhr Object and also storing the browser built-in "XMLHttpRequest()" so that we can fetch the data with the help of it.
        const xhr = new XMLHttpRequest();

        // Below, we are giving the three arguments:
        // 1) GET - Request to fetch the data || 2) The location where data is located || 3) True - Allowing the function to run Asynchronusly.
        xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`, true);

        // Creating a function to get the "responseText" from the api and also to display it onto the DOM.
        xhr.onload = function () {
            if (this.status === 200) {
                // Fetching the (Accordion Div) from the DOM, so that we can store the news in it.
                let newsAccordion = document.getElementById("newsAccordion");

                // Below, we are parsing the "responseText" into json and storing it into the "jsonify" varaible.
                let jsonify = JSON.parse(this.responseText);
                // Below, we are fetching the "articles" which is an object which contains all the news related thing. 
                let articles = jsonify.articles;
                // console.log(jsonify);
                // console.log(articles);

                // Creating a null variable so that we can add the (HTMl Code) in it multiple times with the help of looping
                let newsHtml = "";
                // Looping through the news inside the "articles" object.
                articles.forEach((element, index) => {
                    newsHtml += `
                                <div class="card">
                                    <img src="${element["urlToImage"]}" class="card-img-top" alt="Unable to load image ">
                                    <div class="card-body">
                                        <h5 class="card-title">${element["title"].substring(0, 80)}....</h5>
                                        <p class="card-text" style="font-size: 14px;">${element["content"]}</p>
                                        <a href="${element["url"]}" class="btn btn-danger" target="_blank">Read More</a>
                                    </div>
                                </div>
                                `
                });
                // Inserting all the HTML code which present inside the "newsHtml" into "newsAccordion" of the DOM.
                newsAccordion.innerHTML = newsHtml;
            }
            else {
                console.log("Sorry! Some Error Ocurred!")
            }
        }
        xhr.send();
    }
}

// Fetching the badge from the (HTML Code) so that we can chage the text inside it whenever we change the genre of news.
let badger = document.getElementById("badger");

// We have created the "apiValue" variable outside the "addEventListener" as well because whenever user opens the website then news related to (business) will be on the screen. 
let apiValue = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "business", "in");
apiValue.fetchNews();

// Below, we are fetching the "business" anchor tag from the dropdown menu in the header to show the users news related to business whenever they clicks on the "business" text in the dropdown menu.
let business1 = document.getElementById("business");
business1.addEventListener("click", function () {
    // Below we are changing the Text inside the badge as well by equating it with present inside the anchor tag of "business" in the dropdown menu of header. 
    badger.innerText = business1.innerText
    // Creating a new constructor and adding the values to the variables that we have created above as an object.
    let apiValue = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "business", "in");
    apiValue.fetchNews();
})

let entertainment1 = document.getElementById("entertainment");
entertainment1.addEventListener("click", function () {
    badger.innerText = entertainment1.innerText
    let apiValue1 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "entertainment", "in");
    apiValue1.fetchNews();
})

let health1 = document.getElementById("health");
health1.addEventListener("click", function () {
    badger.innerText = health1.innerText
    let apiValue2 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "health", "in");
    apiValue2.fetchNews();
})

let science1 = document.getElementById("science");
science1.addEventListener("click", function () {
    badger.innerText = science1.innerText
    let apiValue3 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "science", "in");
    apiValue3.fetchNews();
})

let sports1 = document.getElementById("sports");
sports1.addEventListener("click", function () {
    badger.innerText = sports1.innerText
    let apiValue4 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "sports", "in");
    apiValue4.fetchNews();
})

let technology1 = document.getElementById("technology");
technology1.addEventListener("click", function () {
    badger.innerText = technology1.innerText
    let apiValue5 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "technology", "in");
    apiValue5.fetchNews();
})
