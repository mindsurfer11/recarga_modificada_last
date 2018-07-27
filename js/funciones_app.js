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
function putClass(id){
  $("#StepRecarga .table-row > div").removeClass("active");
  $("#"+id).addClass("active");
  return false;
};
$(document).ready(function(){
  $('.carousel').carousel('pause');
    $("#EnvioNroCliente").click(function(e){
    e.preventDefault();
    $("#rechargeNumber").slideDown();
    $('.carousel').carousel('next');
    $("#StepRecarga .table-row > div").removeClass("active");
    $("#wiz-2").addClass("active");
  });
  $('[data-list-amount] label:not("#monto-personalizado")').click(function(){
    var $this = $(this);
    var $thisVal = $this.find("input").val();
    $('.carousel').carousel('next');
    $("#rechargeAmount").slideDown();
    $("#rechargeAmountNumber").html(separadorDeMiles($thisVal));
  });
  $("#TipoPago > label").click(function(){
    if(!$(this).hasClass("deshabilitado")){
      var $thisVal = $(this).find('input[type="radio"]').val();
      $("#rechargeMethod").slideDown();
      $("#rechargeMethodVal").text($thisVal);
      $('.carousel').carousel('next');
      $("#StepRecarga .table-row > div").removeClass("active");
      $("#wiz-3").addClass("active");
      setTimeout(function(){ $("#mensaje-tardando").slideDown(); }, 5000);
      setTimeout(function(){ $('.carousel').carousel('next'); }, 8000);
    } else {
      return false;
    }
  });
  $("#Envio-hogar").click(function(e){
    e.preventDefault();
    $("#rechargeNumber span").html($("#h1").val());
    $("#rechargeNumber").slideDown();
    $('.carousel').carousel('next');
  });
  $("#btnCargarOtraLinea").click(function(e){
        e.preventDefault();
        $("#cargarOtraLinea").slideUp();
        $("#btnCargarOtraLinea").hide();
        $("#otraLinea").slideDown();
        $("#cargarMiLinea").show();
      });
  $("#btnRechargeMyLine").click(function(e){
    e.preventDefault();
    $("#otraLinea").slideUp();
    $("#cargarMiLinea").hide();     
    $("#cargarOtraLinea").slideDown("slow");
    $("#btnCargarOtraLinea").show();
  });
  $("#toLast").click(function(e){
    e.preventDefault();
    $("#StepRecarga, #rechargeNumber, #rechargeAmount, #rechargeMethod").hide();
    $('.carousel').carousel('next');
  });
  $("#btnAmount").click(function(e){
    e.preventDefault();
     $('.carousel').carousel('next');
     $("#rechargeAmount").slideDown();
  });
  /*back*/
  $("#backPhone").click(function(e){
    e.preventDefault();
    $("#rechargeNumber, #rechargeMethod, #rechargeAmount").slideUp();
    $('.carousel').carousel(0);
    $('.carousel').carousel('pause');
    $("#StepRecarga .table-row > div").removeClass("active");
    $("#wiz-1").addClass("active");
  });

  $("#backAmount").click(function(e){
    e.preventDefault();
    $("#rechargeMethod, #rechargeAmount").slideUp();
    $('.carousel').carousel(1);
    $('.carousel').carousel('pause');
    $("#StepRecarga .table-row > div").removeClass("active");
    $("#wiz-2").addClass("active");
  });
  $("#backMethod").click(function(e){
    e.preventDefault();
    $("#rechargeMethod").slideUp();    
    $('.carousel').carousel(2);
    $('.carousel').carousel('pause');
    $("#StepRecarga .table-row > div").removeClass("active");
    $("#wiz-2").addClass("active");
  });
  $("#backFirstStep").click(function(e){
    e.preventDefault();
    $("#cargarOtraLinea").slideDown();
    $("#btnCargarOtraLinea").show();
    $("#otraLinea").hide();
    $("#StepRecarga .table-row > div").removeClass("active");
    $("#wiz-1").addClass("active");
    $("#StepRecarga").fadeIn();
    
    $('.carousel').carousel(0);
    $('.carousel').carousel('pause');
  });
  $('#monto2').removeAttr('checked');
});