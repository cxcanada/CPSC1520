// Refactoring the code to make it "better"
// 1) Turned my function "variable" into a constant
// 2) Improve the "readability" of my code by choosing better names
// 3) Use let instead of var
// 4) Use local variables in functions where available =>> "outside" variable vs. local variable
//    Benefit of "isolation"
// 5) Limit the use of "temporary" global variables =>> "inline" the variable featureLink

const toggleImage = function(evt) {
    // Get the ID of the image tag from my <a data-img="..">
    let imgId = evt.target.dataset.img;
    /*
        My notes
        
        Dan used data-img in html to store additional info, which stores the linked img id.
        That is, using `let imgId = evt.target.dataset.img` will select target img id.

        Since there are three sets of <a><img> set, this method will build a relationship between this set, 
        and greatly reduce the code repetition by using this one general template. 

        data-* attribute docs: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes.
        See first example.

    */


    // Use that ID to find my image tag
    let featureImage = document.getElementById(imgId);

    // The if/else is part of what allows me to create the "logic" for toggling visibility
    if (featureImage.classList.contains('hidden')) {
        featureImage.src = evt.target.href;
        featureImage.classList.remove('hidden');
    } else {
        featureImage.src = '';
        featureImage.classList.add('hidden');
    }

    evt.preventDefault();
}

const assignListener = function(el) { // el is my parameter name for whatever HTMLElement is supplied
    // Setup the listener function for the click event

    el.addEventListener('click', toggleImage);
}

// forEach docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// 1 forEach with Callback function
// Callback function: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

/*
// Now, handling MORE <a class="feature"> elements!
document.querySelectorAll('a.feature') // .querySelectorAll() will produce an Array of elements
    .forEach(assignListener); // loop through the array and call assignListener for each element
*/


// 2. forEach with Arrow function

aLink.forEach(element => {
    assignListener(element)
});



// 3 
aLink = document.querySelectorAll('a.feature')

for (var i = 0; i <= aLink.length; i++) {
    assignListener(aLink[i])
}