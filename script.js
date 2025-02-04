const TextField = document.getElementById("TextField");
const container = document.getElementById("checkboxcontainer");
const emptymessage = document.getElementById("emptymessage")
function AddNote() {
    const tasks = JSON.parse(localStorage.getItem("Tasks")) || []
    
    const editFieldContainer = document.getElementById("editFieldContainer")
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.id = 'checkbox'
    const label = document.createElement('label')
    label.value = TextField.value
    label.textContent = TextField.value


    //Boton de editar
    const editButton = document.createElement('button')
    editButton.id = "editButton"

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
        //Funcion de confirmar edicion
        confirmButton.onclick = function () {
            if (confirm("Are you sure?")) {
                alert("Action confirmed")
            
            localStorage.setItem( label.textContent = textField.value)
            }else{
                alert("Action Denied")

            }
       }
        
      }

    //Boton de eliminar
    const deleteButton = document.createElement('button')
    deleteButton.id = "deleteButton"
    deleteButton.textContent = ""
    
    //Funcion de confirmar eliminacion
    deleteButton.onclick = function () {
        if (confirm("Are you sure?")) {
            alert("Action confirmed")
            container.removeChild(input)
            container.removeChild(label)
            container.removeChild(editButton)
            container.removeChild(deleteButton)
        }else{
            alert("Action Denied")

        }
       
       }
    //Limpiar campo de texto 
    if (TextField.value === "") {
        alert("The text field is empty")
        return
    }
    const Tasks = [ label,
    input,
     editButton,
     deleteButton] 
     
  localStorage.setItem("Tasks", JSON.stringify(Tasks))
 const task = JSON.parse(localStorage.getItem("Tasks"))

    task.forEach(element => {
        const container = document.getElementById("checkboxcontainer")
        container.appendChild(element)
    });
}

