const TextField = document.getElementById("TextField");
const container = document.getElementById("checkboxcontainer");
const emptymessage = document.getElementById("emptymessage")
function AddNote() {
    

    const editField = document.getElementById("editFieldContainer")
    const input = document.createElement('input')
    input.type = 'checkbox'

    const label = document.createElement('label')
    label.textContent = TextField.value



    //Boton de editar
    const editButton = document.createElement('button')
    editButton.id = "editButton"
    editButton.textContent = " Edit "

    editButton.onclick = function createTextField () {
        editField.innerHTML =  ` <input type="text" id="TextField"><br><br>`
      }
    //Boton de eliminar
    const deleteButton = document.createElement('button')
    deleteButton.id = "deleteButton"
    deleteButton.textContent = " Delete "

    deleteButton.onclick = function () {
        container.removeChild(label)
       }

    

    label.appendChild(input);
    label.appendChild(editButton)
    label.appendChild(deleteButton)

    if (TextField.value === "") {
        alert("The text field is empty")
        document.removeChild(label)
    }
    
  
    
    container.appendChild(label);
    TextField.value = ""


}
