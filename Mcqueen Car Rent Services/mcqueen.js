// McQueen Car Services 
// Creating a "Validation Form" with the help of Regular Expression in JavaScript.
console.log("McQueen Car Services");

// Fetching the inputs and the textarea present in the form of a dom by their (id's).
const namer = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const locationy = document.getElementById("location");

// For validation purpose. The variables will becomes (true) if (namer, email, mobile, and locationy) input area contains inputs according to the regualr expression given. 
let validNamer = false;
let validEmail = false;
let validMobile = false;
let validLocationy = false;

// console.log(namer, email, mobile, locationy); 

// Adding a "blur" Event Listener to the (namer) input tag.
// "blur" means after giving an input, if user clicks outside the input tag then the "blur" event will get fire.
namer.addEventListener("blur", () => {
    console.log("namer has been blurred.");

    // Below, we are validating the input tag "namer" with the help of regular expression.
    // Below, in the regex variable we are saying that user should starts with "[a-zA-Z]" and ends with "[a-zA-Z]" but it should contain at least (2 to 20) characters in it.
    let regex = /^[a-zA-Z]([a-zA-Z\ ]){2,20}$/;
    // Fetching the name that user have written in the "namer" input tag.
    let str = namer.value;
    console.log(regex, str);

    // Below we are saying that, if input matches with the validation code we have given in the regex varaible then it will be a match and also remove the "is-invalid" class from the classList of the "namer" input tag in the dom.
    if (regex.test(str)) {
        console.log("It is a match")
        // Below, we are removing the "is-invalid" class from the "namer" input tag after it succeed to meet the regex varaible requirement.
        namer.classList.remove("is-invalid");

        // Below, we are turning "validNamer" variable (true) because it has matched the conditions of regular expression.
        validNamer = true;
    }
    else {
        console.log("Sorry! It is not a match");
        // Below, we are adding the "is-invalid" class in the "namer" input tag after it fails to meet the regex varaible requirement. Thiss "is-invalid" class makes the input area border into red color (which means wrong input) and also make the instruction text to appear below the input area. 
        namer.classList.add("is-invalid");
        // Below, we are turning "validNamer" variable to (false) because it has not matched the conditions of regular expression.
        validNamer = false;
    }
})

// Adding a "blur" Event Listener to the (email) input tag.
email.addEventListener("blur", () => {
    console.log("email has been blurred.");

    // Below, we are validating the input tag "email" with the help of regular expression.
    // Below, in the regex variable we are saying that user should starts with "[_\-\.0-9a-z]+" with the (lowercase alphabets, numbers, dots, hyphens, and underscores as user wants) and also "+" sign means that the characters can present (one or more times) in the input area. Furthermore, input area should also contain "@" which is also followed by the chracters at the start. Input area should also contain "." and it should ends with "[a-z]" (lowercase alphabets which should be between 2 to 5 letters).  
    let regex = /^([_\-\.0-9a-z]+)@([_\-\.0-9a-z]+)\.([a-z]){2,5}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("It is a match")
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else {
        console.log("Sorry! It is not a match");
        email.classList.add("is-invalid");
        validEmail = false;
    }
})

// Adding a "blur" Event Listener to the (mobile) input tag.
mobile.addEventListener("blur", () => {
    console.log("mobile has been blurred.");

    // Below, we are validating the input tag "mobile" with the help of regular expression.
    // Below, in the regex variable we are saying that user should start and ends with "[0-9]{10}" means (Input area should contain exactly 10 numbers and only numbers in it.)
    let regex = /^[0-9]{10}$/;
    let str = mobile.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("It is a match")
        mobile.classList.remove("is-invalid");
        validMobile = true;

    }
    else {
        console.log("Sorry! It is not a match");
        mobile.classList.add("is-invalid");
        validMobile = false;
    }
})

// Adding a "blur" Event Listener to the (locationy) input tag.
locationy.addEventListener("blur", () => {
    console.log("locationy has been blurred.");

    // Below, we are validating the input tag "locationy" with the help of regular expression.
    // Below, in the regex variable we are saying that user should start and ends with "([a-zA-Z0-9\&\*\,\.\(\)\_\$\;\:\-]){2,50}" means that (Input area can contain lowercase and uppercase alphabets, followed by numbers. It can also consist symbols such as "&, *, comma, dot, round brackets, underscore, hyphens, $, colen, frnt slash, space and semi-colen".) The characters in the "locationy" input area must be between 2 to 50 characters.
    let regex = /^([a-zA-Z0-9\&\*\,\/\.\(\)\_\$\;\:\ \-]){2,200}$/;
    let str = locationy.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("It is a match")
        locationy.classList.remove("is-invalid");
        validLocationy = true;
    }
    else {
        console.log("Sorry! It is not a match");
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
    console.log("You have clicked the Submit button.");
    console.log(validNamer, validEmail, validMobile, validLocationy);

    // Below we are saying that if all these (validNamer && validEmail && validMobile && validLocationy) are "true" run the following function.
    if (validNamer && validEmail && validMobile && validLocationy) {
        console.log("Success! The name, email, mobile number and the location you have provided is valid.")

        // Fetching the div container with the help of "msgAlerts" id. 
        let success = document.getElementById("msgAlerts");
        // Adding the html of (Sucess alert) into the fetched empty container.
        success.innerHTML = `<div class="alert alert-success alert-dismissible fade show" id="success" role="alert">
                                <strong>Success!</strong> Your car request has been sucessfully submited.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
    }
    else {
        console.log("Faliure! Please check the name, email, mobile number and the location you have provided. The information you have given is invalid and therefore the form is not submitted.")

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