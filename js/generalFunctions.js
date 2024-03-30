function copyToClipboard() {
    // Selecciona el texto de la dirección de correo electrónico
    const emailText = document.getElementById("correo").innerText;

    // Crea un elemento de entrada de texto temporal
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", emailText);
    document.body.appendChild(tempInput);

    // Selecciona y copia el texto dentro del campo de entrada
    tempInput.select();
    document.execCommand("copy");

    // Elimina el campo de entrada temporal
    document.body.removeChild(tempInput);

    // Alerta al usuario de que se ha copiado la dirección de correo electrónico
    Swal.fire({
        title: 'Confirm',
        text: 'Email copied successfully',
        icon: 'success',
        confirmButtonText: 'Cool',
        position: "bottom-end"
      })
}
