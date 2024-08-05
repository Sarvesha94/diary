



const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes()
{
    notesContainer.innerHTML= localStorage.getItem("notes");
   
}

showNotes();

function updateStorage(){

    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    // Create a new note element
    let inputBox = document.createElement("p");
    inputBox.className = "input-box"; // Ensure correct class name
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("placeholder", "Type your note here..."); // Optional: Placeholder text for clarity

    // Create and append the image
    let img = document.createElement("img");
    img.src = "dd.png";
    inputBox.appendChild(img);

    // Append the new note to the notes container
    notesContainer.appendChild(inputBox);

    // Optional: Focus the newly created input box
    inputBox.focus();
});


notesContainer.addEventListener("click", function(e)
{
    if(e.target.tagName== "IMG")
    {
        e.target.parentElement.remove();
        updateStorage();

    }
    else if(e.target.tagName === "p")
    {
        note = document.querySelectorAll(".input-box");
        notesContainer.forEach(int=>
        {
            nt.onkey=function()
            {
                updateStorage();
            }
        }
        )
    }
})


document.addEventListener("keydown", event =>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})