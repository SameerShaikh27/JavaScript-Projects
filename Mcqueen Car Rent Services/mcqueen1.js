// McQueen Car Services 
// Creating a "Validation Form" with the help of Regular Expression in JavaScript.
console.log("McQueen Car Services");

// Fetching the inputs and the textarea present in the form of a dom by their (id's).
const namer = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const locationy = document.getElementById("location");

// For validation purpose. The variables will become (true) if (namer, email, mobile, and locationy) input area contains inputs according to the regualr expression given. 
let validNamer = false;
let validEmail = false;
let validMobile = false;
let validLocationy = false;

// Adding a "blur" Event Listener to the (namer) input tag.
namer.addEventListener("blur", () => {

    // Below, we are validating the input tag "namer" with the help of regular expression.
    let regex = /^[a-zA-Z]([a-zA-Z\ ]){2,20}$/;
    // Fetching the name that user have written in the "namer" input area.
    let str = namer.value;

    // If input matches with the validation code we have given in the regex varaible then it will be a match.
    if (regex.test(str)) {
        // Removing the "is-invalid" class from the "namer" input tag after it succeed to meet the regular expression varaible requirement.
        namer.classList.remove("is-invalid");

        // Turning the "validNamer" variable (true) because it has matched the conditions of regular expression.
        validNamer = true;
    }
    else {
        // Below, we are adding the "is-invalid" class in the "namer" input tag after it fails to meet the regex varaible requirement. 
        namer.classList.add("is-invalid");
        // Turning "validNamer" variable to (false) because it has not matched the conditions of regular expression.
        validNamer = false;
    }
})

// Adding a "blur" Event Listener to the (email) input tag.
email.addEventListener("blur", () => {
    // Below, we are validating the input tag "email" with the help of regular expression.
    let regex = /^([_\-\.0-9a-z]+)@([_\-\.0-9a-z]+)\.([a-z]){2,5}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else {
        email.classList.add("is-invalid");
        validEmail = false;
    }
})

// Adding a "blur" Event Listener to the (mobile) input tag.
mobile.addEventListener("blur", () => {
    // Below, we are validating the input tag "mobile" with the help of regular expression.
    let regex = /^[0-9]{10}$/;
    let str = mobile.value;
    if (regex.test(str)) {
        mobile.classList.remove("is-invalid");
        validMobile = true;

    }
    else {
        mobile.classList.add("is-invalid");
        validMobile = false;
    }
})

// Adding a "blur" Event Listener to the (locationy) input tag.
locationy.addEventListener("blur", () => {
    // Below, we are validating the input tag "locationy" with the help of regular expression.
    let regex = /^([a-zA-Z0-9\&\*\,\/\.\(\)\_\$\;\:\ \-]){2,200}$/;
    let str = locationy.value;
    if (regex.test(str)) {
        locationy.classList.remove("is-invalid");
        validLocationy = true;
    }
    else {
        locationy.classList.add("is-invalid");
        validLocationy = false;
    }
})

// Fetching the (submit button) with the help of "submit" id.
let submit = document.getElementById("submit");

// If user clicks on the (submit button) then run the following function.
submit.addEventListener("click", (e) => {

    // Addig a "preventDefault()" function to stop the reloading of the page after we clicks the (submit button). 
    e.preventDefault();

    // If all these (validNamer, validEmail, validMobile, validLocationy) variables are "true" then run the following function.
    if (validNamer && validEmail && validMobile && validLocationy) {
        // Fetching the div container with the help of "msgAlerts" id. 
        let success = document.getElementById("msgAlerts");
        // Adding the html of (Sucess alert) into the fetched empty container.
        success.innerHTML = `<div class="alert alert-success alert-dismissible fade show" id="success" role="alert">
                                <strong>Success!</strong> Your car request has been sucessfully submited.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
    }
    else {
        // Fetching the div container with the help of "msgAlerts" id and  storing it into the "faliure" varaible.
        let faliure = document.getElementById("msgAlerts");
        // Adding the html of (Faliure alert) into the fetched empty container.
        faliure.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" id="success" role="alert">
                                <strong>Faliure!</strong> Your car request has been rejected. Please fill the form wisely.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
    }
    
    // Emptying the input area after user have clicked the (submit button). 
    namer.value = "";
    email.value = "";
    mobile.value = "";
    locationy.value = "";
})