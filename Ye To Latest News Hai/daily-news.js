// Basic - Daily Bulletin News WebApp
// Creating a website for daily updated news called "Daily Bulletin".

// Below, we have stored the valuable information that we have got from the "newsapi" website.
let apiKey = "5175d32d3d30416798d5060c6c644457";
let category = "business";
let country = "in";

// Fetching the (Accordion Div) from the DOM, so that we can store the news in it.
let newsAccordion = document.getElementById("newsAccordion");

// Creating a variable "xhr" and storing the browser built-in "XMLHttpRequest()" so that we can fetch the data with the help of it.
const xhr = new XMLHttpRequest();

// Below, we are giving the three arguments
// 1) GET - To fetch the data || 2) The location where data is present in the form of api || 3) Allowing the function to run Asynchronusly.
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, true);

// Creating a function to get the "responseText" also to display it onto the DOM.
xhr.onload = function () {
    if (this.status === 200) {
        // Below, we are parsing the "responseText" into json and storing it into the "jsonify" varaible.
        let jsonify = JSON.parse(this.responseText);
        // Below, we are fetching the "articles" which is an object which contains all the news related thing. 
        let articles = jsonify.articles;
        // console.log(jsonify);
        // console.log(articles);

        // Creating a null variable so that we can add the (HTMl Code) in it multiple times with the help of looping
        let newsHtml = "";
        // Looping through news inside the "articles" object.
        articles.forEach((element, index) => {
            newsHtml += `<div class="accordion-item" style="border:2px solid #0c63e4;">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>News ${index+1} </b>:  ${element["title"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body" style="font-size:15px;">
                                    <strong>${element["description"]}</strong> ${element["content"]} <br><a href="${element["url"]}" target="_blank">Read More about this topic</a>
                                </div>
                            </div>
                        </div><br>`
        });
        // Inserting all the HTML code which present inside the "newsHtml" into "newsAccordion" of the DOM.
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Sorry! Some Error Ocurred!")
    }
}

// Sending the request to fetch the data.
xhr.send();