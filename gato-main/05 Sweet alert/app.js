const Uno=()=>{
    Swal.fire({
        title: 'Estas segur@?',
        text: "No podrás retornar esto.!",
        icon: 'Advertencia',
        showCancelButton: true,
        confirmButtonColor: '#3085d7',
        cancelButtonColor: '#d33',
        confirmButtonText: 'sí,elimínalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Emliminado!',
            'Se eliminó',
            'success'
          )
        }
      })
}

const Dos=()=>{
    Swal.fire({
        title: '¿Quieres continuar?',
        icon: 'pregunta',
        iconHtml: '؟',
        confirmButtonText: 'si',
        cancelButtonText: 'no',
        showCancelButton: true,
        showCloseButton: true
      })
}

const Tres=()=>{
    Swal.fire({
        title: 'Error!',
        text: 'Deseas continuar?',
        icon: 'error',
        confirmButtonText: 'Genial'
      })
}
const Cuatro=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estás segur@?',
        text: "No puedes retornar esto!",
        icon: 'advetencia',
        showCancelButton: true,
        confirmButtonText: 'Si,elimínalo',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'La línea está eliminada',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu archivo cool esta seguro 🥰',
            'error'
          )
        }
      })
    }

const Cinco=()=>{
    let timerInterval
Swal.fire({
  title: 'Cerrando',
  html: 'Se cerrará en <b></b> millisegundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}