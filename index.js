const root = document.getElementById("root");
let mainbody = document.querySelector("body");
mainbody.style.cssText = "margin:0px";

//Create elements
let header = document.createElement("div");
let body = document.createElement("div");
let footer = document.createElement("div");

//Add content to elements
header.textContent = "This is a header";
body.textContent = "this is the body";
footer.textContent = "this is the footer";

//Add Styling
root.style.cssText =
  "display:flex;flex-direction:column; justify-content:space-between;";
header.style.cssText = "height:60px;margin-bottom:0;";
body.style.cssText = `height:450px; 
background-image:url('bg6.jpeg');
background-repeat:no-repeat;
background-size:cover;
border-top:5px solid orange;`;
footer.style.cssText = "height:100px;margin-top:0;";

//Append elements
root.appendChild(header);
root.appendChild(body);
root.appendChild(footer);
