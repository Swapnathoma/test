// create variables and access to root elemet
let mainbody = document.querySelector("body");
mainbody.style.cssText = "margin:0px";
let root = document.getElementById("root");
let header = document.createElement("div");
let body = document.createElement("div");
let title = document.createElement("h2");
let heroText = document.createElement("h3");
let subText = document.createElement("h4");
let button = document.createElement("button");
let item1 = document.createElement("div");
let item2 = document.createElement("div");
let item3 = document.createElement("div");
let item4 = document.createElement("div");
let navItemContainer = document.createElement("div");

//add content to the elements
title.textContent = "HTML DOM";
heroText.textContent = "To study HTML DOM,This is a tutorial";
subText.textContent = "Practice";
button.textContent = "Get Started";
item1.textContent = "Learn";
item2.textContent = "About";
item3.textContent = "Previous";
item4.textContent = "Next";

//add styling before append
header.style.cssText =
  "display:flex; align-items:center; justify-content:space-between";
navItemContainer.style.cssText = "display:flex";
item1.style.cssText = "margin-left:1em";
item2.style.cssText = "margin-left:1em";
item3.style.cssText = "margin-left:1em";
item4.style.cssText = "margin-left:1em";
button.style.cssText =
  "background-color:pink; border-radius:0.5em; border:none";
body.style.cssText =
  "background-image:url('https://images.indianexpress.com/2020/04/books_1200.jpg'); height:100vh";
root.style.cssText = "display:flex; flex-direction:column;";
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
