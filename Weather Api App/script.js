let weatherApp = {
    "apiKey": "d8bc81ffb3fac2a00b394829e8311f8c",

    // Creating a function to fetch the weather data with the help of (API Key).
    // Below we have also given "city" as a parameter beacuse later we will be inserting the name of the city that user have written onto the "search" bar and placing inside the function as an argument.
    fetchWeatherInfo: function (city) {
        // Below is the url to fetch the data.
        // Below we are also inserting the "city" and "apiKey" into the url.
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        // With the help of "fetch" we are fetching the data with the help of url.
        // ".then" asking for the response to be in a json format.
        // ".then" storing or giving all the data to the "displayWeatherInfo" function as an argument to display the fetched weather related information onto the screen.
        fetch(url).then((response) => response.json())
            .then((data) => this.displayWeatherInfo(data));
    },

    // Below funcion is to display the data that we have fetched from the url onto the screen.
    // Below we are also using the "data" that we have fetched above as a parameter in a below function.
    displayWeatherInfo: function (data) {
        // Below are the variables in which we are storing the data from various section.
        // If u don't understand this part then search the above "url" and look for the (weather, main, wind) section.
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, pressure, humidity } = data.main;
        const { speed } = data.wind;
        const { visibility } = data

        // Below we are converting the range of visibility from (meter into kilometer).
        visib = visibility * parseFloat(0.001)

        // Creating variables to fetch the html elements from the dom.
        let city = document.getElementById("city");
        let cityTemp = document.getElementById("temp");
        let cityWeatherIcon = document.getElementById("weatherIcon");
        let cityDescription = document.getElementById("description");
        let cityHumidity = document.getElementById("humidity");
        let cityPressure = document.getElementById("pressure");
        let cityVisibility = document.getElementById("visibility");
        let cityWindSpeed = document.getElementById("windSpeed");

        // Inserting the text that we have stored into the above variables into the various html elements.
        city.innerText = `Weather in ${name}`;
        cityTemp.innerText = `${temp} °C`;
        cityWeatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
        cityDescription.innerText = description;
        cityHumidity.innerText = `Humidity: ${humidity}%`;
        cityPressure.innerText = `Pressure: ${pressure} hPa`;
        cityVisibility.innerText = `Visibility: ${visib} km`;
        cityWindSpeed.innerText = `Wind Speed: ${speed} km/hr`;
        
        // Changing the background image according to the name of the city written by user.
        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`
    },

    // Below we are creating a function to fetch the users given city and use it as an argument for the "fetchWeatherInfo" function.
    searchCities: function() {
        let searchInput = document.getElementById("searchInput");
        // Below we are fetching the users given city (value) of search bar and using it as an argument for "fetchWeatherInfo" function.
        this.fetchWeatherInfo(searchInput.value);
    }
}

// Below we are adding a function to a "click" event listener.
let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
    // Below we are running the "searchCities()" function whenever user clicks on the search button.  
    weatherApp.searchCities();
    // Also removing the city from the search bar after searching for the weather of that city to clean up the space.
    searchInput.value = "";
});

// Below we are adding a function to a "keyup" event listener means whenever user clicks on any key on the keyboard the function will get trigger.
searchInput.addEventListener("keyup", (e)=>{
    // If user clicks on the "Enter" button then run the following function.
    if (e.key == "Enter"){
         // Below we are running the "searchCities()" function whenever user clicks on the search button.
        weatherApp.searchCities();
        // Also removing the city from the search bar after searching for the weather of that city to clean up the space.
        searchInput.value = "";
    }
});

// Running the "fetchWeatherInfo" function also giving the "Mumbai" city as an argument so that whenever we open the site we will get to see the weather of "Mumbai" City.
weatherApp.fetchWeatherInfo("Mumbai");