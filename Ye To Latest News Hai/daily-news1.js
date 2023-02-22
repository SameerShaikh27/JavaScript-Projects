// Modified Version 1 - Daily Bulletin News WebApp (With Mutiple Choice of News Genre)
// Created with the help of Object Oriented Programming. 
// Creating a website for daily updated news called "Daily Bulletin". 

class DigitalAkhbaar{
    constructor(apiKey, category, country){
        this.apiKey = apiKey;
        this.category = category;
        this.country = country;
    }

    fetchNews(){
        const xhr = new XMLHttpRequest();

        xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`, true);
    
        xhr.onload = function () {
            if (this.status === 200) {
                let newsAccordion = document.getElementById("newsAccordion");
                let jsonify = JSON.parse(this.responseText);
                let articles = jsonify.articles;
                // console.log(jsonify);
                // console.log(articles);
                let newsHtml = "";
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
                newsAccordion.innerHTML = newsHtml;
            }
            else {
                console.log("Sorry! Some Error Ocurred!")
            }
        }

        xhr.send();
    }   
}

let badger = document.getElementById("badger");
let apiValue = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "business", "in");
apiValue.fetchNews();

let business1 = document.getElementById("business"); 
business1.addEventListener("click", function(){
    badger.innerText = business1.innerText
    let apiValue = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "business", "in");
    apiValue.fetchNews();
})

let entertainment1 = document.getElementById("entertainment"); 
entertainment1.addEventListener("click", function(){
    badger.innerText = entertainment1.innerText
    let apiValue1 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "entertainment", "in");
    apiValue1.fetchNews();
})

let health1 = document.getElementById("health"); 
health1.addEventListener("click", function(){
    badger.innerText = health1.innerText
    let apiValue2 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "health", "in");
    apiValue2.fetchNews();
})

let science1 = document.getElementById("science"); 
science1.addEventListener("click", function(){
    badger.innerText = science1.innerText
    let apiValue3 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "science", "in");
    apiValue3.fetchNews();
})

let sports1 = document.getElementById("sports"); 
sports1.addEventListener("click", function(){
    badger.innerText = sports1.innerText
    let apiValue4 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "sports", "in");
    apiValue4.fetchNews();
})

let technology1 = document.getElementById("technology"); 
technology1.addEventListener("click", function(){
    badger.innerText = technology1.innerText
    let apiValue5 = new DigitalAkhbaar("5175d32d3d30416798d5060c6c644457", "technology", "in");
    apiValue5.fetchNews();
})
