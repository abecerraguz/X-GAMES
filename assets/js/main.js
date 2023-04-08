$(function () {

  
      // Variables globales
      let mensajeAlertaNombre = $('.alertaNombre'),
        mensajeAlertaApellido = $('.alertaApellido'),
        mensajeAlertaEdad = $('.alertaEdad'),
        mensajeAlertaEmail = $('.alertaMail'),
        formulario = $('#formulario'),
        firstName = $('#nombre'),
        lastName = $('#apellido'),
        age = $('#edad'),
        email = $('#email'),
        mensaje = $('#infoMensaje')

        mensajeAlertaNombre.hide();
        mensajeAlertaApellido.hide();
        mensajeAlertaEdad.hide();
        mensajeAlertaEmail.hide();

        // Funcion que  Valida los input de cadena de texto
        function functionValidateString(cadena) {
          console.log('Salida de la cadena', cadena.length)
          if (/[a-zA-z]+$/.test(cadena) && cadena.length >= 0) {
            return true
          }
          return false
        }

        function functionValidateNum(num){
          if( num >= 10 ){
            return true
          }
          return false
        }

        function checkEmail(val) {
          if(!val.match(/\S+@\S+\.\S+/)){
              return false;
          }
          if( val.indexOf(' ') != -1 || val.indexOf('..') != -1){
              return false;
          }
          return true;
        }

        // Evento de input del nombre cuando el usuario ingresa datos en jquery
        firstName.on('input', function (e) {
          let validateName = functionValidateString(e.target.value)
          if (validateName) {
            mensajeAlertaNombre.hide()
          } else {
            mensajeAlertaNombre.show()
            mensajeAlertaNombre.addClass('border-bottom border-danger')
            mensajeAlertaNombre.text(`* Debe ingresar el nombre y sólo letras !`)
          }
        });

        // Evento de input del Apellido cuando el usuario ingresa datos en jquery
        lastName.on('input', function (e) {
          let validateLastName = functionValidateString(e.target.value)
          if (validateLastName) {
            mensajeAlertaApellido.hide()
          } else {
            mensajeAlertaApellido.show()
            mensajeAlertaApellido.addClass('border-bottom border-danger')
            mensajeAlertaApellido.text(`* Debe ingresar el apellido y sólo letras !`)
          }
        });
      
        // Evento de input del Apellido cuando el usuario ingresa datos en jquery
        age.on('input', function (e) {
          let validateAge = functionValidateNum(e.target.value)
          if (validateAge) {
            mensajeAlertaEdad.hide()
          } else {
            mensajeAlertaEdad.show()
            mensajeAlertaEdad.addClass('border-bottom border-danger')
            mensajeAlertaEdad.text(`* La edad permitida debe ser mayor o igual a 10 años !`)
          }
        });
        
        // Evento de input del Apellido cuando el usuario ingresa datos en jquery
        email.on('input', function (e) {
            let validateAge = checkEmail(e.target.value)
            if (validateAge) {
              mensajeAlertaEmail.hide()
            } else {
              mensajeAlertaEmail.show()
              mensajeAlertaEdad.addClass('border-bottom border-danger')
              mensajeAlertaEmail.text(`* Debe ingresar un email valido !`)
            }
        }); 

        // Evento de formulario
        formulario.submit(function (e) {

          e.preventDefault();

          // Declaramos nuestras variables
          let getValueFirsName = $('#nombre').val(),
            getValueLastName = $('#apellido').val(),
            getValueAge = $('#edad').val(),
            getValueEmail = $('#email').val()


          let validateFirstName = functionValidateString(getValueFirsName)
          let validateLastName = functionValidateString(getValueLastName)

          if (validateFirstName && validateLastName && getValueAge && getValueEmail ) {
            $('#ventanaModal').modal('toggle');
            mensaje.addClass('d-flex flex-column justify-content-center align-items-center');
            mensaje.html(`<i class="fa-regular fa-face-smile fa-3x mb-3"></i><p class="text-center text-uppercase">Su inscripción a sido enviada va a recibir un correo !!<p>`)
          } else {
            $('#ventanaModal').modal('toggle');
            mensaje.addClass('d-flex flex-column justify-content-center align-items-center');
            mensaje.html(`<i class="fa-solid fa-circle-exclamation fa-3x mb-3"></i><p class="text-center text-uppercase">Usted debe llenar todos los campos !!<p>`)
          }

        });

        // $('[data-fancybox]').fancybox({
        //   youtube: {
        //     controls: 0,
        //     showinfo: 0
        //   },
        //   vimeo: {
        //     color: 'red'
        //   }
        // });

        // Configuracion de Datatable
        $('#example').DataTable(
          {
            "language": {
              "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
            },
            dom: 'Bfrtip',
            bFilter: false,
            buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
            ]
          }
        );

});


