const navs = [{
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

// Creates hamburger icon for mobile navigation

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


//Hide/Show images
const myHideButton = document.getElementById("hideButton");

let toggleImages = document.getElementsByClassName("hideImages");

function toggleImg() {
    for (let i=0; i < toggleImages.length; i++) {
        if (toggleImages[i].style.display === "none") {
            toggleImages[i].style.display = "block";
        } else {
            toggleImages[i].style.display = "none";
    }
    }
}

myHideButton.addEventListener('click', function() {
    toggleImg();
});