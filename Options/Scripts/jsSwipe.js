let swipeR = document.querySelector('.swipeR')
let swipeL = document.querySelector('.swipeL')

//SWIPE
swipeR.addEventListener('mouseover', swipeRover)
swipeR.addEventListener('mouseout', swipeRout)

function swipeRover(){
    swipeR.className = 'swipeR1'
};
function swipeRout(){
    swipeR.className = 'swipeR'
};

swipeL.addEventListener('mouseover', swipeLover)
swipeL.addEventListener('mouseout', swipeLout)

function swipeLover(){
    swipeL.className = 'swipeL1'
};
function swipeLout(){
    swipeL.className = 'swipeL'
};




