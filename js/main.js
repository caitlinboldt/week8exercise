document.getElementsByClassName("class2")[0].style.backgroundColor = "turquoise";

// #7 Create a div and give it an ID.
var div = document.createElement("div");

div.id = "div1"
// #8 Create an h1 tag and add some text to it using the textContent

var h1 = document.createElement("h1");

h1.id = "firsth1"

h1.textContent = "Hello World"
// #9 Add that h1 to the div

div.appendChild(h1);

// #10 Create another div and give it an ID.

var divTwo = document.createElement("div");

divTwo.id = "div2"

// #11 

const h1Two = document.createElement("h1");


h1Two.textContent = "hello!"


divTwo.appendChild(h1Two);
document.body.appendChild(divTwo)

// #12 Create an image and a button tag.

const image = document.createElement("img");
const btn = document.createElement("button");

btn.className = "btn btn-info"

image.src = "https://www.pinmart.com/assets/1/19/DimRegular/2401.jpg?9484"
image.alt = "Peace sign"

btn.textContent = "Submit"

document.body.appendChild(image);
document.body.appendChild(btn);


// #13 Create a function that changes the image source and alt attributes when you click on that button.

btn.onclick = function onClick() {
    image.src = "https://www.askideas.com/media/79/Infinity-Sign-With-Heart-Tattoo-Drawing.jpg"
    image.alt = "Infinity Heart"
}













