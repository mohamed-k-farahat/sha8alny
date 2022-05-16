const skillscontainer = document.querySelector('.skills-container');
const skillsinput = document.querySelector('.skills input');

var skillstags = [];

function createTag(label) {
  const skillsdiv = document.createElement('div');
  skillsdiv.setAttribute('class', 'tag');
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

function clearTags() {
  document.querySelectorAll('.tag').forEach(function(tag) {
    tag.parentElement.removeChild(tag);
  })
}

function addTags() {
  clearTags();
  skillstags.slice().reverse().forEach(function(tag){
      const skillsinput = createTag(tag)
      skillscontainer.prepend(skillsinput);
  })
}

skillsinput.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
      skillstags.push(skillsinput.value); 
        addTags();
        skillsinput.value = ''; 
    }
})
document.addEventListener('click', function(e){ 
  if (e.target.tagName === 'I') {
    const skillsvalue = e.target.getAttribute('data-item');
    const skillsindex = skillstags.indexOf(skillsvalue);
    skillstags = [...skillstags.slice(0, skillsindex), ...skillstags.slice(skillsindex+1)];
    console.log(skillstags)
    addTags();    
  }
})