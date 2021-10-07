# JavaScript Functions
1. Function definition
2. Function Syntax
3. Keyword **`Return`**
4. Test with console.
5. DOM Malnipulation
6. Event Listener

## 1. **Function definitions**
Funtions are (*at their simplest form*) colletions of statements that may be run as a group at a later time. 

## 2.  **Syntax**
```js
//No parameter required
function simpleFunc(){
    console.log("hello");
    alert("EZ.")
}

//One parameter required
function updateH1 (content="hello") {
    document.querySelector("h1").innerHTML = content;
    //console.log(content);
}

//multiple parameters required
function updateHTML(selector="h1", content="hello"){
    document.querySelector(selector).innerHTML = content;
}

//other syntax
const myFunc = function(param){
    //execution
}

```
What's the main difference between the two function declaration syntax?



## parameter V.S argument.
```js
// Call the function
displayInput("Hello")
//       /This is a argument\
// The value gets passed into a function is an argument.


//Function declaration
function displayInput(parameter){
    console.log(parameter);
}
```


## 3. **`Return` keyword**
Return: Save the result
```js
let calculate
calculate = adder(1,2)
console.log(calculate)

function adder(num1, num2){
    let sum = num1 + num2;
// What happens if we comment out 'return sum'
    return sum
}
```

## **4. Test with Console Command**

Why?

How?

What?

## 5. **DOM Manipulation**
1. Select. 

Select HTML elements with JavaScript
```js
//FIRST. Connect JS file to your html.

//Select the first matching element according to the CSS selectors.
// h1, .feature, #title
document.querySelector('')


//Select all matching elements, store refereneces to them in an array-like object called ``NodeList``
document.quertSelectorAll('')


//Select an element by its id
document.selectElementById('')


//This returns an array-like object containing all the elements on the page of a given type, for example <p>s, <a>s. 
document.selectElementsByTagName('')

```

2. Manipulate
```js

document.querySelector('img.feature').src = //some value

document.querySelector('h1').setAttribute('class', 'highlight')

document.querySelector('p').innerHTML = 'This is manipulated.'
```

## **6. Event Listener**
1. What is event listener?

2. Some common steps. 
- Select element
- Declare event function (or use anonymous function)
- Use addEventListener(trigger, listnerFunc)

3. Common triggers

> [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

4. Thoughts
