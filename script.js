const TextField = document.getElementById("TextField");
const container = document.getElementById("checkboxcontainer");

function AddNote() {
    const TextValue = TextField.value;

    const input = document.createElement('input')
    input.type = 'checkbox'

    const label = document.createElement('label')
    label.textContent = TextValue + "\n"

    const editButton = document.createElement('button')
    editButton.id = "editButton"
    editButton.textContent = "Edit"
    
    label.appendChild(input);
    

    container.appendChild(label);


}
