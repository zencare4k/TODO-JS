function AddNote() {
    const textField = document.getElementById("TextField")
    const TextValue = textField.value
    document.getElementById("List").innerHTML = `
    <input type="checkbox" id="checkbox"> ${TextValue} `
}