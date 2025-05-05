//Property in JavaScript


// console.dir(document)

// console.log(document.domain);
// console.log(document.title);
// console.log(document.url);
// console.log(document.URL);



// document.title=Event;
// console.log(document.title);

// console.log(document.all);
// document.all[10].textContent="hello";


// console.log(document.forms[0]);



// Common DOM Selectors


// | Selector                            | Description                                                  |
// | ----------------------------------- | ------------------------------------------------------------ |
// | `document.getElementById()`         | Selects one element by its **ID**                            |
// | `document.getElementsByClassName()` | Selects all elements with a given **class** (HTMLCollection) |
// | `document.getElementsByTagName()`   | Selects all elements with a given **tag** (HTMLCollection)   |




// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);




// 🔠Text and Content Properties


// | Property      | Description                                                              |
// | ------------- | ------------------------------------------------------------------------ |
// | `textContent` | Gets/sets **plain text** inside an element, regardless of hidden styles. |
// | `innerText`   | Gets/sets **visible text** only (respects CSS like `display: none`).     |
// | `innerHTML`   | Gets/sets **HTML content** inside the element (renders tags).            |
// | `outerHTML`   | Gets/sets the **element including itself** and its HTML.                 |

// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'goodbye';
// headerTitle.innerHTML = 'Hell Yeah';
// headerTitle.outerHTML = 'Not HEll';


// 🎨 Style and Appearance Properties


// | Property    | Description                                                                 |
// | ----------- | --------------------------------------------------------------------------- |
// | `style`     | Inline styles as a JavaScript object (e.g., `element.style.color = "red"`). |
// | `className` | Gets/sets the value of the `class` attribute (as a string).                 |
// | `classList` | A list of classes with methods like `add()`, `remove()`, `toggle()`.        |
// | `hidden`    | Boolean to hide/show the element (`true` hides it).                         |


// const header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 10px #000';




// let items = document.getElementsByClassName('list-group-item');

// items[0].textContent='hello';
// items[1].textContent='World';
// items[2].textContent='earth';

// for (let i = 0; i < items.length; i++) {
    //     items[i].style.backgroundColor = "yellow";
    // }
    
    // console.log(items);
    
    
    
    
    // let li = document.getElementsByTagName('li');
    
    // li[0].textContent = "Google";
    // li[1].textContent = "Youtube";
    // li[2].textContent = "Microsoft";
    // li[3].textContent = "Apple";
    
    
    
    // li[0].style.fontWeight = 'bold';
    // li[0].style.backgroundColor = 'grey';
    
    
    // | `document.querySelector()`          | Selects **first match** using **CSS selector**               |
    
    
    // // Select by ID (like getElementById)
    // document.querySelector('#my-id');
    
    // // Select by class (like getElementsByClassName, but only first match)
    // document.querySelector('.my-class');
    
    // // Select by tag name
    // document.querySelector('p');
    
    // // Select nested elements
    // document.querySelector('div.container > ul li.active');
    
    
    
    
    // | Property       | Works On                                      | Use For                             |
    // | -------------- | --------------------------------------------- | ----------------------------------- |
    // | `.textContent` | Most elements (`div`, `p`, `h1`, etc.)        | Sets/removes text inside an element |
    // | `.value`       | Form elements (`input`, `textarea`, `select`) | Sets the input's actual value       |
    
    
    // let header = document.querySelector('#main-header');
    // header.style.borderBottom = 'solid 4px #ccc';
    
    // let input = document.querySelector('input');
    // input.value = 'Hello world';
    
    
    // let submit = document.querySelector('input[type="submit"]');
    // submit.value="SEND";
    
    
    
    // let lastItem = document.querySelector('.list-group-item:last-child');
    // lastItem.style.color = 'red';
    
    
    
    
    
    // | `document.querySelectorAll()`       | Selects **all matches** using **CSS selector** (NodeList)    |

// let titles = document.querySelectorAll('.title')
// console.log(titles);

// titles[0].textContent="This Is 1st Title"
// titles[0].style.color="grey";



// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');


// for(let i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor="yellow";
//     even[i].style.backgroundColor="red";
// }




