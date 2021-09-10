// create variables and access to root elemet
let mainbody = document.querySelector("body");
mainbody.style.cssText = "color:white; margin:0px";
let root = document.getElementById("root");
let header = document.createElement("div");
let body = document.createElement("div");
let title = document.createElement("h2");
let heroText = document.createElement("h3");
let subText = document.createElement("p");
let button = document.createElement("button");
let item1 = document.createElement("div");
let item2 = document.createElement("div");
let item3 = document.createElement("div");
let item4 = document.createElement("div");
let navItemContainer = document.createElement("div");

//add content to the elements
title.textContent = "HTML DOM";
heroText.textContent = "This is a tutorial";
subText.textContent = "Practice";
button.textContent = "Get Started";
item1.textContent = "LEARN";
item2.textContent = "ABOUT";
item3.textContent = "PREVIOUS";
item4.textContent = "NEXT";

//add styling before append
header.style.cssText =
  "display:flex; align-items:center; background-color:black;justify-content:space-between;padding:0px 10px;";
navItemContainer.style.cssText = "display:flex";
item1.style.cssText = "margin-left:1em";
item2.style.cssText = "margin-left:1em";
item3.style.cssText = "margin-left:1em";
item4.style.cssText = "margin-left:1em";
button.style.cssText = `background-color:green;
 color:white;
   font-size:1em; 
   border-radius:60px;
    border:none;
    width:110px;
     height:45px;
      margin-top:20px;`;
body.style.cssText = `padding:0px 10px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  background-image:url('https://images.indianexpress.com/2020/04/books_1200.jpg');
  height: 91vh;`;
root.style.cssText = "display:flex; flex-direction:column;";
subText.style.cssText =
  " font-weight:20px;font-size:2em;font-family:fangsong, serif;padding:0px 0px;margin:0px 0px;";
heroText.style.cssText =
  "font-weight:bold;font-size:2em;font-family:Georgia, serif; margin:0";

//adding events
function handleClick(event) {
  alert("this is clicked");
  let buttontext = document.createElement("p");
  buttontext.textContent = "proceed";
  body.appendChild(buttontext);
}
button.addEventListener("click", handleClick);

//append the elements to structure
root.appendChild(header);
root.appendChild(body);

header.appendChild(title);
header.appendChild(navItemContainer);
navItemContainer.appendChild(item1);
navItemContainer.appendChild(item2);
navItemContainer.appendChild(item3);
navItemContainer.appendChild(item4);

body.appendChild(heroText);
body.appendChild(subText);
body.appendChild(button);
