/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const listElementsP = document.querySelectorAll('p');
console.log(listElementsP);
const firstDiv = document.querySelector('div');
console.log(firstDiv);
const jumbotron = document.querySelector('#jumbotron-text');
console.log(jumbotron);
const pInsidePrimaryContent = document.querySelectorAll('.primary-content p');
console.log(pInsidePrimaryContent);



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

// const alertButton = document.querySelector('#alertBtn');
// alertButton.addEventListener('click', () => {alert("Thanks for visiting Bikes for Refugees!")});


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// const changeBackgroundColor = document.querySelector("#bgrChangeBtn");
// changeBackgroundColor.addEventListener('click',() => {document.body.style.backgroundColor = 'lightblue'});



/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener('click', createNewP);

function createNewP(text){
    const newParagraph = document.createElement('p');
    newParagraph.innerText = text;

    const addParagraph = document.getElementById("mainArticles");
    addParagraph.appendChild(newParagraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinksButton = document.querySelector('#largerLinksBtn');
largerLinksButton.addEventListener('click',  biggerLinks);


function biggerLinks(){
    debugger;
    const allLinks = document.querySelectorAll("a");
    allLinks.forEach(el => el.style.fontSize = "x-large");
};

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const buttonAdd = document.querySelector('#addArticleBtn');
buttonAdd.addEventListener('click', getText);

function getText(){
    const inputField = document.querySelector(".form-control").value;
    createNewP(inputField);
    console.log(inputField.length);
    if (inputField.length > 0){
        document.querySelector(".form-control").value = " ";
    }

}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const fiveColors = ["blue", "green", "red", "pink", "lightblue"];

const changeBackgroundColor = document.querySelector("#bgrChangeBtn");
changeBackgroundColor.addEventListener('click', changeColor);

function changeColor(fiveColors){
    for (i = 0; i < fiveColors.length; i++) {
        document.body.style.backgroundColor = fiveColors[i];
    }
}



// () => {document.body.style.backgroundColor = 'lightblue'}
