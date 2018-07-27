$(document).ready(function() {
    if($('#t1').length > 0){
    if ($('#t1').val().length == 9) {
           $('#msg-error-numero-movil, #error-numero-movil').hide();
            if ($('#t1').val() == $('#t2').val()) {
                $("#Envio").removeClass("disabled").removeAttr('disabled');
                $('#error-confirmacion-movil, #msg-error-confirmacion-movil').hide();
            }
    }

    if ($('#h1').val().length == 9) {
           $('#msg-error-numero-hogar, #error-numero-hogar').hide();
            if ($('#h1').val() == $('#h2').val()) {
                $("#Envio-hogar").removeClass("disabled").removeAttr('disabled');
                $('#error-confirmacion-hogar, #msg-error-confirmacion-hogar').hide();
            }
      }
    }

    $("#t1").keyup(function (e) {
         if ($('#t1').val().length == 9) {
           $('#msg-error-numero-movil, #error-numero-movil').hide();
            if ($('#t1').val() == $('#t2').val()) {
                $("#Envio").removeClass("disabled").removeAttr('disabled');
                $('#error-confirmacion-movil, #msg-error-confirmacion-movil').hide();
            }
        }
        else if ($('#t1').val().length < 9) {
           $('#msg-error-numero-movil').hide();
           $("#Envio").addClass("disabled").attr('disabled','disabled');
        }

    }).blur(function(){
        if ($('#t1').val().length < 9 && $('#t1').val() != ""){
             $('#error-numero-movil, #msg-error-numero-movil').show();
             $("#Envio").addClass("disabled").attr('disabled','disabled');
        }
        else{
            $('#error-numero-movil, #msg-error-numero-movil').hide();
            if ($('#t1').val() == $('#t2').val() && $('#t1').val() != "" && $('#t1').val().length == 9) {
              $("#Envio").removeClass("disabled").removeAttr('disabled');
            }
        }
    }).keydown(function(tecla) {
        permitirSoloNumero(tecla);
     });

    $("#t2").keyup(function() {
        if ($('#t1').val() == $('#t2').val() && $('#t1').val() != "" && $('#t1').val().length == 9) {
            $("#Envio").removeClass("disabled").removeAttr('disabled');
            $('#error-confirmacion-movil, #msg-error-confirmacion-movil').hide();
        }
        else if ($('#t1').val().length <= $('#t2').val().length) {
           $('#error-confirmacion-movil').show();
           $("#Envio").addClass("disabled").attr('disabled','disabled');
        }
        else{
            $('#msg-error-confirmacion-movil').hide();
           $("#Envio").addClass("disabled").attr('disabled','disabled'); 
        }; 
    }).blur(function() {
        if($('#t1').val().length <= $('#t2').val().length && $('#t1').val() != $('#t2').val() && $('#t1').val() != "" ){
            $("#msg-error-confirmacion-movil").show();
        }
        else if($('#t1').val().length > $('#t2').val().length && $('#t2').val() != ""){
            $('#error-confirmacion-movil, #msg-error-confirmacion-movil').show();
        }
        else{
            $('#error-confirmacion-movil, #msg-error-confirmacion-movil').hide();
            if ($('#t1').val() == $('#t2').val() && $('#t1').val() != "" && $('#t1').val().length == 9) {
              $("#Envio").removeClass("disabled").removeAttr('disabled');
            }
        }
    }).keydown(function(tecla) {
        permitirSoloNumero(tecla);
     });


    $("#h1").keyup(function (e) {
         if ($('#h1').val().length == 9) {
           $('#msg-error-numero-hogar, #error-numero-hogar').hide();
            if ($('#h1').val() == $('#h2').val()) {
                $("#Envio-hogar").removeClass("disabled").removeAttr('disabled');
                $('#error-confirmacion-hogar, #msg-error-confirmacion-hogar').hide();
            }
        }
        else if ($('#h1').val().length < 9) {
           $('#msg-error-numero-movil').hide();
           $("#Envio-hogar").addClass("disabled").attr('disabled','disabled');
        }
    }).blur(function(){
        if ($('#h1').val().length < 9 && $('#h1').val() != ""){
             $('#error-numero-hogar, #msg-error-numero-hogar').show();
             $("#Envio-hogar").addClass("disabled").attr('disabled','disabled');
        }
        else{
            $('#error-numero-hogar, #msg-error-numero-hogar').hide();
        }
    }).keydown(function(tecla) {
        permitirSoloNumero(tecla);
     });

    $("#h2").keyup(function() {
        if ($('#h1').val() == $('#h2').val() && $('#h1').val() != ""  && $('#h1').val().length == 9) {
            $("#Envio-hogar").removeClass("disabled").removeAttr('disabled');
            $('#error-confirmacion-hogar, #msg-error-confirmacion-hogar').hide();
            
        }
        else if ($('#h1').val().length <= $('#h2').val().length) {
           $('#error-confirmacion-hogar').show();
           $("#Envio-hogar").addClass("disabled").attr('disabled','disabled');
        }
        else{
            $('#msg-error-confirmacion-hogar').hide();
           $("#Envio-hogar").addClass("disabled").attr('disabled','disabled'); 
        }; 
    }).blur(function() {
        if($('#h1').val().length <= $('#h2').val().length && $('#h1').val() != $('#h2').val() && $('#h1').val() != "" ){
            $("#msg-error-confirmacion-hogar").show();
        }
        else if($('#h1').val().length > $('#h2').val().length && $('#h2').val() != ""){
            $('#error-confirmacion-hogar, #msg-error-confirmacion-hogar').show();
        }
        else{
             $('#error-confirmacion-hogar, #msg-error-confirmacion-hogar').hide();
        }
    }).keydown(function(tecla) {
        permitirSoloNumero(tecla);
     });


    $('.error-img').click(function(){
        $('#t2').focus();
        $(this).next().show();

    });

    $('#input-mail-comprobante').keyup(function(){
      if(validarMail($(this).val()) && $(this).val() != ''){
        $('#btn-mail-comprobante').removeAttr('disabled').removeClass('deshabilitado'); 
      }
      else{
        $('#btn-mail-comprobante').attr('disabled', 'disabled').addClass('deshabilitado');
      }
    }).focus(function(){
      if(validarMail($(this).val()) && $(this).val() != ''){
        $('#btn-mail-comprobante').removeAttr('disabled').removeClass('deshabilitado'); 
      }
      else{
        $('#btn-mail-comprobante').attr('disabled', 'disabled').addClass('deshabilitado');
      }
    });

    $('#btn-mail-comprobante').click(function(e){
      e.preventDefault();
      if(validarMail($('#input-mail-comprobante').val())){
        $(this).html('<img src="img/cargando-mail.gif">').attr('disabled', 'disabled').addClass('deshabilitado');
        setTimeout(function(){
          $('#form-mail-comprobante').html('<div id="exito-mail"><img src="img/bien.png"> <strong>¡Perfecto! el mail ha sido enviado</strong></div>');
        },4000);
      }
    });

    function validarMail(mail){
      var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      if (regex.test(mail.trim())) return true;
      else return false;
    }

    $('.verificaNumero').click(function(){
      $(this).hide();
    });

    function separadorDeMiles(valor){
      var number = new String(valor);
      number = number.replace(/\./g,''); 
      var result = '';
      while( number.length > 3 ){
      result = '.' + number.substr(number.length - 3) + result;
      number = number.substring(0, number.length - 3);
      }
      result = number + result;
      return result;
    }

    function permitirSoloNumero(event){
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 39 || event.keyCode == 37 || event.keyCode == 9 || event.keyCode == 13 || event.keyCode == 38 || event.keyCode == 40 )    {
        }
        else {
          if (event.keyCode < 95) {
            if (event.keyCode < 48 || event.keyCode > 57) {
                  event.preventDefault();
            }
          } 
          else {
            if (event.keyCode < 96 || event.keyCode > 105) {
              event.preventDefault();
            }
          }
        }
    }

    //Seleccionar dentro de tabla los pares y asignar clase (Fix para IE8)
    $(".table tr:nth-child(even)").addClass("even");
    $(".table tr:nth-child(odd)").addClass("odd");

    //Selección radio, asignando clases (IE8)
    $('input[type="radio"]').click(function() {
        var radioName = $(this).attr('name');
        $(this).parent('.radio').addClass('checked');
        $('input[type="radio"][name="' + radioName + '"]').not(this).parent('.radio').removeClass('checked');
    });

    $('#monto2').attr('checked','checked');
    $('#servipag').attr("disabled","disabled");


    $("#asignarMonto").blur(function () {
                var montoValue = parseInt($(this).val(), 10);
                $(".montoCarga").html( separadorDeMiles(montoValue)); 
                if (montoValue >= 10000){
                    $('#servipag').removeAttr("disabled");
                    $('#label-servipag').removeClass('deshabilitado');
                    $('#logo-servipag img').attr('src',$('#logo-servipag img').attr('src').replace('servipag-gris.png','servipag.png'));
                    $('#msg-error-monto-personalizado').hide();
                    $('#asignarMonto').removeClass('error');
                }
                else{
                    var montoValue = parseInt($(this).val(), 10);
                    if (montoValue < 500){
                        $('#msg-error-monto-personalizado').show();
                        $('#asignarMonto').addClass('error');
                      }
                      else{
                        $('#msg-error-monto-personalizado').hide();
                        $('#asignarMonto').removeClass('error');
                      }
                    $('#servipag').attr("disabled","disabled");
                    $('#label-servipag').addClass('deshabilitado');
                    $('#logo-servipag img').attr('src',$('#logo-servipag img').attr('src').replace('servipag.png','servipag-gris.png'));
                    if($('#label-servipag').is('.checked')){
                      $('#TipoPago .radio:eq(0) input').click();
                    }
                };
                $(".montoCarga").html( separadorDeMiles(montoValue) ); 
     }).keyup(function(){
      var montoValue = parseInt($(this).val(), 10);
        $('.montoCarga').html(separadorDeMiles(montoValue));

      if (montoValue >= 10000){
        $('#servipag').removeAttr("disabled");
        $('#label-servipag').removeClass('deshabilitado');
        $('#logo-servipag img').attr('src',$('#logo-servipag img').attr('src').replace('servipag-gris.png','servipag.png'));
        $('#msg-error-monto-personalizado').hide();
        $('#asignarMonto').removeClass('error');
        $('#btn-recargar, #btnAmount').removeClass('deshabilitado').removeAttr('disabled');
      }
      else{  
        if (montoValue < 500){
          $('#asignarMonto').addClass('error');
          $('#btn-recargar, #btnAmount').addClass('deshabilitado').attr('disabled','disabled');
        }
        else{
          $('#msg-error-monto-personalizado').hide();
          $('#asignarMonto').removeClass('error');
          $('#btn-recargar, #btnAmount').removeClass('deshabilitado').removeAttr('disabled');
        }

        $('#servipag').attr("disabled","disabled");
        $('#label-servipag').addClass('deshabilitado');
        $('#logo-servipag img').attr('src',$('#logo-servipag img').attr('src').replace('servipag.png','servipag-gris.png'));
        if($('#label-servipag').is('.checked')){
          $('#TipoPago .radio:eq(0) input').click();
        }
      }
     }).keydown(function(tecla) {
        permitirSoloNumero(tecla);
     });

     $('#msg-error-monto-personalizado').click(function(){
        $('#asignarMonto').removeClass('error');
     });

    $('input[name=monto]').not('#asignarMonto').change(function() { // listen to change event
        $('#msg-error-monto-personalizado').hide();
        if ($(this).attr("id") == "monto6") {

            if($(this).parents(".step-pago-green").length == 0){
              $(".sourcery").addClass("desaparece");
            }    

            $("#asignarMonto, #mPersonalizado, #signo-peso, #btnAmount").removeClass("desaparece");
           $("#asignarMonto").focus();
        }
        else{
            if($(this).parents(".step-pago-green").length == 0){
              $(".sourcery").removeClass("desaparece");
            }
            $("#asignarMonto, #mPersonalizado, #signo-peso, #btnAmount").addClass("desaparece");
            
            var montoValue = parseInt($(this).val(), 10);
            $('.montoCarga').html(separadorDeMiles(montoValue)); 

            if (montoValue >= 10000){
                $('input[name=tipo-pago]').removeAttr("disabled");
                $('#label-servipag').removeClass('deshabilitado');
                $('#logo-servipag img').attr('src',$('#logo-servipag img').attr('src').replace('servipag-gris.png','servipag.png'));
            }
            else{
                $('#servipag').attr("disabled","disabled");
                $('#label-servipag').addClass('deshabilitado');
                $('#logo-servipag img').attr('src',$('#logo-servipag img').attr('src').replace('servipag.png','servipag-gris.png'));
                if($('#label-servipag').is('.checked')){
                  $('#TipoPago .radio:eq(0) input').click();
                }
            };  
           
        };
    });


    $('input[name=tipo-pago]').change(function() { // listen to change event
        var pagoValue = $(this).val(); 
         $(".medioDePago").html( pagoValue );
    });

    $('#label-servipag').click(function(){
      if($(this).is('.deshabilitado')){
        $('#msg-error-servipag').show();
        setTimeout(function(){ $('#msg-error-servipag').hide(); }, 3500);
      }
    });

});


    $('#tab-movil').click(function (e) {
      e.preventDefault();
      $('#Bam').show();
      $('#hogar').hide();
      $('.nav-tabs .active').removeClass('active');
      $(this).parent().addClass('active');
    });
    $('#tab-hogar').click(function (e) {
      e.preventDefault();
      $('#Bam').hide();
      $('#hogar').show();
      $('.nav-tabs .active').removeClass('active');
      $(this).parent().addClass('active');
    });

