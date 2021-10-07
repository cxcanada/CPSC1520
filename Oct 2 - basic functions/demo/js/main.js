console.log('Connected!')

document.querySelector('h1').setAttribute('class', 'highlight')
//document.querySelector('h1').classList.add('highlight')


// select html elements
image = document.querySelector('img.unsplash')
lgBtn = document.querySelector('.btn-lg')
mdBtn = document.querySelector('.btn-md')
smBtn = document.querySelector('.btn-sm')
//finish the reset

// add eventListener to buttons
lgBtn.addEventListener('click', function(evt){
    image.classList.add('lg');
    image.classList.remove('sm')
    image.classList.remove('md')
    evt.preventDefault();
})

mdBtn.addEventListener('click', function(evt){
    image.classList.remove('lg');
    image.classList.remove('sm')
    image.classList.add('md')
    evt.preventDefault();
})

smBtn.addEventListener('click', function(evt){
    image.classList.remove('lg');
    image.classList.add('sm')
    image.classList.remove('md')
    evt.preventDefault();
})

/*
    Reset button eventListener
*/



// More eventListener Types

// select html elements
h1 = document.querySelector('h1')

// event handler
h1.addEventListener('mouseover', function(evt){
    evt.target.innerHTML = "GOODBYE"
})


h1.addEventListener('mouseout', mouseoutHandler)


function mouseoutHandler(evt){
    document.querySelector('h1').innerHTML = "Welcome"
    evt.preventDefault()
}
