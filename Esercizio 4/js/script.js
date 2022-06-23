//------------------------ HAMBURGER MENU -----------------------------------

function hamburger() {
    let hamList = document.getElementById("hamburger");
    if (hamList.style.display === "block") {
      hamList.style.display = "none";
    } else {
      hamList.style.display = "block";
    }
} 

//--------------------------- TEXT ---------------------------------------

//variables
let text = document.querySelector('#text h2'),
    textStyle = getComputedStyle(text),
    caseBtn = document.querySelector('#case'),
    colorBtn = document.querySelector('#color'),
    sizeBtn = document.querySelector('#size'),
    animBtn = document.querySelector('#anim');

//onclick events
caseBtn.addEventListener('click', () => { //change case
    if (textStyle.textTransform != 'uppercase') {
        text.style.textTransform = 'uppercase';
    } else {
        text.style.textTransform = 'lowercase';
    }
});

colorBtn.addEventListener('click', () => { //random color
    text.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

sizeBtn.addEventListener('click', () => { //random size
    text.style.fontSize = `${Math.floor(Math.random()*100)}px`;
});

animBtn.addEventListener('click', () => { //animate 
    if (text.classList.contains('animate')) {
        text.classList.remove('animate');
    } else { 
        text.classList.add('animate');
    }
});

//------------------------ TODO LIST ------------------------------------

let list = document.querySelectorAll('#todo-list li');


list.forEach(li => {
    
    li.addEventListener('click', () => {
        if (li.classList.contains('flagged')) {
            li.classList.remove('flagged');
        } else { 
            li.classList.add('flagged');
        }
    });
});