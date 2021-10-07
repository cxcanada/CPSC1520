document.querySelector('form.login').addEventListener('submit', function(evt) {
    // The evt.target is the <form> element
    // A <form> HTML Element has a collection called elements
    // which hold values that will be submitted from the form.
    // Each <input> or other form element on the form
    // will have the control's id attribute as a "property"
    // (or, an index) on the elements collection.


    var user = evt.target.elements.username;
    var pass = evt.target.elements.password;
    var valid = true;

    console.log(evt.target);
    console.log(evt.target.elements);
    console.log(evt.target.elements.length);
    console.log(evt.target.elements.username);
    console.log(evt.target.elements.password);
    console.log("user ：" + user.value)
    console.log("pw: " + pass.value)

    // check the username, should be email
    if (user.value.indexOf('@') == -1) {
        valid = false;
        user.classList.add('error'); //add css class to <input>when it's error
    } else {
        user.classList.remove('error');
    }

    // check password, b/w 6 and 10 chars
    if (pass.value.length < 6 || pass.value.length > 10) {
        valid = false;
        pass.classList.add('error');
    } else {
        pass.classList.remove('error');
    }

    if (valid == false) {
        evt.preventDefault();
    }
});