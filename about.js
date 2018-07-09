var aboutStrings = {
  heading: "This portfolio site is in early development",
  content:
    "I'm producing this vanilla javascript site to showcase other projects. The end-goal is to create an easy to use template for anyone to use under the MIT licence."
};

var aboutHeading = document.createElement("h1");
aboutHeading.innerHTML = aboutStrings.heading;

var aboutContent = document.createElement("p");
aboutContent.innerHTML = aboutStrings.content;

//
for (key in template.home) {
  console.log(template.home[key]);
  aboutContent.style[key] = template.home[key];
}
//content.style["text-align"] = "center";
//
const content = document.getElementById("content");

function renderAbout() {
  content.innerHTML = "";
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.appendChild(aboutHeading);
  content.appendChild(aboutContent);
}

function renderProjects() {
  content.innerHTML = "";
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function renderContact() {
  content.innerHTML = "";
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
