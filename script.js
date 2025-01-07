const TextField = document.getElementById("TextField");
const container = document.getElementById("checkboxcontainer");
const emptymessage = document.getElementById("emptymessage")
function AddNote() {
    

    const editFieldContainer = document.getElementById("editFieldContainer")
    const input = document.createElement('input')
    input.type = 'checkbox'

    const label = document.createElement('label')
    label.value = TextField.value
    label.textContent = TextField.value


    //Boton de editar
    const editButton = document.createElement('button')
    editButton.id = "editButton"
    editButton.textContent = " Edit "

    editButton.onclick = function () {

        //Campo de texto 
        const textField = document.createElement('input')
        textField.type = "text"
        textField.value = label.value

        //Boton de Confirmar
        const confirmButton = document.createElement('button')
        confirmButton.id = "confirmButton"
        confirmButton.textContent = " Confirm "
        
        textField.appendChild(confirmButton)
        
        editFieldContainer.appendChild(textField)
        editFieldContainer.appendChild(confirmButton)

        confirmButton.onclick = function () {

            label.textContent = textField.value
       }
        
      }

    //Boton de eliminar
    const deleteButton = document.createElement('button')
    deleteButton.id = "deleteButton"
    deleteButton.textContent = " Delete "
    
    //Funcion de eliminar nota
    deleteButton.onclick = function () {
        container.removeChild(label)
        label.removeChild(editButton)
       }

 
    if (TextField.value === "") {
        alert("The text field is empty")
        document.removeChild(label)
    }

    container.appendChild(input)
    container.appendChild(label);
    container.appendChild(editButton)
    container.appendChild(deleteButton)
    TextField.value = ""



}
