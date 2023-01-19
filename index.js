var skillsEl = document.getElementById("Skills-list");

var Skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 4 },
  { name: "JS", endorcements: 3 },
  { name: "DRIVE", endorcements: 2 },
];

var SkillsHTML = "";

for (var i = 0; i < Skills.length; ) {
  SkillsHTML +=
    " <li>" + Skills[i].name + " - " + Skills[i].endorcements + "</li>";
  i++;
}

console.info(SkillsHTML);
skillsEl.innerHTML = SkillsHTML;

var pagesIds = ["home", "skills", "languages", "projects", "rubik"];

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    console.warn("inside pages.forEach", page.id);
  });
  pagesIds.forEach(function (pageId) {
    hide(pageId);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  console.warn("init menu");
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        console.warn("click", id, e.target);
        displayPage(id);
      }
    });
}
displayPage("home");
initMenu();
