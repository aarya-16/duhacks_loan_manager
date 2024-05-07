// const notesContainer=document.querySelector(".notes-container");
// const notesBtn=document.querySelector(".btn");
// let notes=document.querySelectorAll(".input-box");

// createBtn.addEventListener("click",()=>{
//     let inputBox=document.createElelemnt("p");
//     let img=document.createElement("img");
//     inputBox.classsName="input-box";
//     inputBox.setAttribute("contenteditable","true");
//     img.src="notes-app-img/images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })
// const notesBtn = document.querySelector(".btn");
// const notesContainer = document.querySelector(".notes-container");

// notesBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "notes-app-img/images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// });
// const notesBtn = document.querySelector(".btn");
// const notesContainer = document.querySelector(".notes-container");
// let inputBox = document.createElement("p");


// notesBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
    
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");

//     img.src = "notes-app-img/images/delete.png";

//     inputBox.appendChild(img);
//     notesContainer.appendChild(inputBox);
// });

// const createBtn = document.querySelector(".btn");
// const notesContainer = document.querySelector(".notes-container");
// let notes = document.querySelectorAll(".input-box");
// notesBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "notes-app-img/images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// });


// const notesContainer=document.querySelector(".notes-container");
// const notesBtn=document.querySelector(".btn");
// let notes=document.querySelectorAll(".input-box");

// createBtn.addEventListener("click",()=>{
//     let inputBox=document.createElelemnt("p");
//     let img=document.createElement("img");
//     inputBox.classsName="input-box";
//     inputBox.setAttribute("contenteditable","true");
//     img.src="notes-app-img/images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })
// const notesBtn = document.querySelector(".btn");
// const notesContainer = document.querySelector(".notes-container");

// notesBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");

//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");

//     // Add some text content to the inputBox for better visibility
//     inputBox.textContent = "Type your note here";

//     img.src = "notes-app-img/images/delete.png";

//     // Append the text box and the delete icon to the notesContainer
//     notesContainer.appendChild(inputBox);
//     inputBox.appendChild(img);
// });

const notesBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");

notesBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    // Add some text content to the inputBox for better visibility
    inputBox.textContent = "Type your note here";

    // Set the background color to white
    inputBox.style.backgroundColor = "white";

    img.src = "notes-app-img/images/delete.png";

    // Append the text box and the delete icon to the notesContainer
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);
});
