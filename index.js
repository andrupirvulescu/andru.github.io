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

function hidePage(id) {
  console.warn("Hide", id, i);
  hide(id);
}

function hideAllPages() {
  pagesIds.forEach(hidePage);
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayHome() {
  hideAllPages();
  show("home");
}
function displaySkills() {
  hideAllPages();
  show("skills");
}
function displayLanguages() {
  hideAllPages();
  show("languages");
}
function displayProjects() {
  hideAllPages();
  show("projects");
}

displayhome();
