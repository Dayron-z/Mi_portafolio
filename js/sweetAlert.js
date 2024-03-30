const copy = document.querySelector(".copy"); 


copy.addEventListener("click", (e) => {
  if (e.target) {
    Swal.fire({
        title: 'Confirm',
        text: 'Email copied successfully',
        icon: 'success',
        confirmButtonText: 'Cool',
        position: "bottom-end"
      })
  }
})
 


