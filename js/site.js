//Hamburger Menu
const navs = [
    {
        Text: 'Home',
        Url: 'index.html',
        Class: 'home',
        Alt: 'Click here to visit home'
    },
    {
        Text: 'Fluid Art',
        Url: 'fluidArt.html',
        Class: 'fluidArt',
        Alt: 'Click here to visit Fluid Art'
    },
    {
        Text: 'String Art',
        Url: 'stringArt.html',
        Class: 'stringArt',
        Alt: 'Click here to visit String Art'
    },
    {
        Text: 'Alcohol Ink',
        Url: 'alcoholInk.html',
        Class: 'alcoholInk',
        Alt: 'Click here to visit Alcohol Ink'
    }
];

// Loop that places list items to create the navBar. 
const navBarMarkup = `
${navs.map(nav => `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join(' ')}</li>
`;

document.querySelector('ul').innerHTML = navBarMarkup;

// Select HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav(){
burger.classList.toggle('fa-bars');
burger.classList.toggle('fa-times');
nav.classList.toggle('nav-close');
nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});


//Close nav menu with window resize
window.addEventListener('resize', function(){
     if (window.innerWidth > 550) {
        nav.classList.replace('nav-active', 'nav-close');
        burger.classList.replace('fa-times', 'fa-bars');
    }
});


//Hide/Show images
const myHideButton = document.getElementById("hideButton");

let toggleImages = document.getElementsByClassName("hideImages");

function toggleImg() {
    for (let i=0; i < toggleImages.length; i++) {
        if (toggleImages[i].style.display === "none") {
            toggleImages[i].style.display = "block";
            document.getElementById("hideButton").innerHTML = "Hide images";
        } else {
            toggleImages[i].style.display = "none";
            document.getElementById("hideButton").innerHTML = "Show images";
    }
    }
}

myHideButton.addEventListener('click', function() {
    toggleImg();
});


//Form Validation

const form = document.getElementById("form");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get values from the inputs
    const userNameValue = userName.value.trim();
    const userEmailValue = userEmail.value.trim();

    if(userNameValue === '') {
        //show error
        //add error class
        setErrorFor(userName, 'Name cannot be blank');
    } else {
        //add success class
        setSuccessFor(userName);
    }

    if(userEmailValue === '') {
        setErrorFor(userEmail, 'Please enter a valid email address');
    } else if(!isEmail(userEmailValue)) {
        setErrorFor(userEmail, 'Email is not valid');
    } else {
        setSuccessFor(userEmail);
    }

    window.alert("Thanks for subscribing " + userNameValue + "!");
    document.getElementById("form").reset();
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small 
    small.innerText = message;

    //add error class
    formControl.className = 'inputs error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'inputs success'
}

function isEmail(userEmail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail);
}