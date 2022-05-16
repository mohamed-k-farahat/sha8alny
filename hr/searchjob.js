// Dropdown List
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
//





const skillscontainer = document.querySelector('.skills-container');
const skillsinput = document.querySelector('.skills input');

var skillstags = [];

function skillscreateTag(label) {
  const skillsdiv = document.createElement('div');
  skillsdiv.setAttribute('class', 'skillstag');
  const skillsspan = document.createElement('span');
  skillsspan.innerHTML = label;
  const closeIcon = document.createElement('i');
  closeIcon.setAttribute('class', 'material-icons');
  closeIcon.setAttribute('data-item', label);
  closeIcon.innerHTML = 'close';

  skillsdiv.appendChild(skillsspan);
  skillsdiv.appendChild(closeIcon);
  return skillsdiv; 
}

function skillsclearTags() {
  document.querySelectorAll('.skillstag').forEach(function(skillstag) {
    skillstag.parentElement.removeChild(skillstag);
  })
}

function skillsaddTags() {
  skillsclearTags();
  skillstags.slice().reverse().forEach(function(skillstag){
      const skillsinput = skillscreateTag(skillstag)
      skillscontainer.prepend(skillsinput);
  })
}

skillsinput.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
      skillstags.push(skillsinput.value); 
      skillsaddTags();
        skillsinput.value = ''; 
    }
})
document.addEventListener('click', function(e){ 
  if (e.target.tagName === 'I') {
    const skillsvalue = e.target.getAttribute('data-item');
    const skillsindex = skillstags.indexOf(skillsvalue);
    skillstags = [...skillstags.slice(0, skillsindex), ...skillstags.slice(skillsindex+1)];
    console.log(skillstags)
    skillsaddTags();    
  }
})









const experiencecontainer = document.querySelector('.experience-container');
const experienceinput = document.querySelector('.experience input');

var experiencetags = [];
 
function experiencecreateTag(label) {
  const experiencediv = document.createElement('div'); 
  experiencediv.setAttribute('class', 'experiencetag');
  const experiencespan = document.createElement('span');
  experiencespan.innerHTML = label;
  const closeIcon = document.createElement('i');
  closeIcon.setAttribute('class', 'material-icons');
  closeIcon.setAttribute('data-item', label);
  closeIcon.innerHTML = 'close';

  experiencediv.appendChild(experiencespan);
  experiencediv.appendChild(closeIcon);
  return experiencediv; 
}

function experienceclearTags() {
  document.querySelectorAll('.experiencetag').forEach(function(experiencetag) {
    experiencetag.parentElement.removeChild(experiencetag);
  })
}

function experienceaddTags() {
  experienceclearTags();
  experiencetags.slice().reverse().forEach(function(experiencetag){
      const experienceinput = experiencecreateTag(experiencetag)
      experiencecontainer.prepend(experienceinput);
  })
}

experienceinput.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
      experiencetags.push(experienceinput.value); 
      experienceaddTags();
        experienceinput.value = ''; 
    }
})
document.addEventListener('click', function(e){ 
  if (e.target.tagName === 'I') {
    const experiencevalue = e.target.getAttribute('data-item');
    const experienceindex = experiencetags.indexOf(experiencevalue);
    experiencetags = [...experiencetags.slice(0, experienceindex), ...experiencetags.slice(experienceindex+1)];
    console.log(experiencetags)
    experienceaddTags();    
  }
})

