let swipeL = document.querySelector('.swipeL')

//SWIPE
swipeL.addEventListener('mouseover', swipeLover)
swipeL.addEventListener('mouseout', swipeLout)

function swipeLover(){
    swipeL.className = 'swipeL1'
};
function swipeLout(){
    swipeL.className = 'swipeL'
};