// Validando campos del formulario
$(document).ready(function() {
    $('#nombre').on('focusout',function(){
        var texto = $(this).val();
        if(texto.length > 0) {
            $('#nombre').removeClass('is-invalid');
            $('#nombre').addClass('is-valid');
        }
        else {
            $('#nombre').removeClass('is-valid');
            $('#nombre').addClass('is-invalid');
        }
    });

    $('#apellido').on('focusout',function(){
        var texto = $(this).val();
        if(texto.length > 0) {
            $('#apellido').removeClass('is-invalid');
            $('#apellido').addClass('is-valid');
        }
        else {
            $('#apellido').removeClass('is-valid');
            $('#apellido').addClass('is-invalid');
        }
    });

    $('#email').on('focusout',function(){
        var texto = $(this).val();
        if(texto.length > 0) {
            $('#email').removeClass('is-invalid');
            $('#email').addClass('is-valid');
        }
        else {
            $('#email').removeClass('is-valid');
            $('#email').addClass('is-invalid');
        }
    });

    $('#comentario').on('focusout',function(){
        var texto = $(this).val();
        if(texto.length > 0) {
            $('#comentario').removeClass('is-invalid');
            $('#comentario').addClass('is-valid');
        }
        else {
            $('#comentario').removeClass('is-valid');
            $('#comentario').addClass('is-invalid');
        }
    });
});