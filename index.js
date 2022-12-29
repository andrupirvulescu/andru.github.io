var skillsEl = document.getElementById("Skills-list");

//skillsEl.style.display = "none";
//document.getElementById("Skills-list").style.display ="none";

//var oldText = skillsEl.innerHTML;
//skillsEl.innerHTML = oldText + "<li>js</li>";

//skillsEl.innerHTML = skillsEl.innerHTML + "<li>js</li>";

//skillsEl.innerHTML += "<li>js</li>";

//skillsEl.innerHTML += '<li style="color: yellow">html</li>';
//skillsEl.innerHTML += '<li style="color: yellow; font-weight: bold">css</li>';
//skillsEl.innerHTML += " <li>java</li>";

var Skills = ["HTML", "CSS", "JS", "DRIVE"];
//skillsEl.innerHTML += " <li>" + Skills[0] + " </li>";
//skillsEl.innerHTML += " <li>" + Skills[1] + " </li>";
//skillsEl.innerHTML += " <li>" + Skills[2] + " </li>";

var SkillsHTML = "";
//var i = 0;

//SkillsHTML += " <li>" + Skills[i] + " </li>";
//i++;
//SkillsHTML += " <li>" + Skills[i] + " </li>";
//i++;
//SkillsHTML += " <li>" + Skills[i] + " </li>";
//i++;

for (var i = 0; i < Skills.length; ) {
  SkillsHTML += " <li>" + Skills[i] + " </li>";
  i++;
}

console.info(SkillsHTML);
skillsEl.innerHTML = SkillsHTML;
