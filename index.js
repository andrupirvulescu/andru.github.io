var skillsEl = document.getElementById("Skills-list");

var Skills = ["HTML", "CSS", "JS", "DRIVE"];

var SkillsHTML = "";

for (var i = 0; i < Skills.length; ) {
  SkillsHTML += " <li>" + Skills[i] + " </li>";
  i++;
}

console.info(SkillsHTML);
skillsEl.innerHTML = SkillsHTML;

var pagesIds = ["home", "skills", "languages", "projects"];

function hideAllPages() {
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

displayPage("home");
