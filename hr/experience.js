const experiencecontainer = document.querySelector('.experience-container');
const experienceinput = document.querySelector('.experience input');

var experiencetags = [];
 
function createTags(label) {
  const experiencediv = document.createElement('div'); 
  experiencediv.setAttribute('class', 'tagg');
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

function clearTagss() {
  document.querySelectorAll('.tagg').forEach(function(tagg) {
    tagg.parentElement.removeChild(tagg);
  })
}

function addTagss() {
  clearTagss();
  experiencetags.slice().reverse().forEach(function(tagg){
      const experienceinput = createTags(tagg)
      experiencecontainer.prepend(experienceinput);
  })
}

experienceinput.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
      experiencetags.push(experienceinput.value); 
        addTagss();
        experienceinput.value = ''; 
    }
})
document.addEventListener('click', function(e){ 
  if (e.target.tagName === 'I') {
    const experiencevalue = e.target.getAttribute('data-item');
    const experienceindex = experiencetags.indexOf(experiencevalue);
    experiencetags = [...experiencetags.slice(0, experienceindex), ...experiencetags.slice(experienceindex+1)];
    console.log(experiencetags)
    addTagss();    
  }
})
