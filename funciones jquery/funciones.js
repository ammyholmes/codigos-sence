$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
 $('a.btn-primary').click(function(){
     alert('estas saliendo del sitio');
 })
 $('button.mostrar1').click(function(){
     $('p.card-text1').toggle();
 })
 $('button.mostrar2').click(function(){
    $('p#textoDos').fadeIn('slow');
})
$('button.ocultar').click(function(){
    $('p#textoDos').fadeOut('slow');
})
$('button.mostrar3').click(function(){
    $('.card-text3').slideUp('slow');
})
$('button.ocultar3').click(function(){
    $('.card-text3').slideDown('slow');
})
$("#btn1").click(function(){
    $("p.nuevotexto").append(" <b>Appended text</b>.");
  })
  $('button#antes').click(function(){
      $('#mono').before('hey!')
  })
  $('button#despues').click(function(){
    $('#mono').after('duh!')
})
$('button.cambiarp').click(function(){
    $('p.cualquiera').html('creado por jquery!');
})
$('button#medidas').click(function(){
    $('img#mono2').attr('width','20%');
})
$('#esconder').click(function(){
    $('#mono2').hide();
})
$('#mostrarmono').click(function(){
    $('#mono2').show();
})
$('#slide').click(function(){
    $('#mono2').slideToggle();
})
$('#fadein').click(function(){
    $('#mono').fadeIn();
})

$('#cambiarclase').click(function(){
    $('button').addClass('btn-primary');
})

$("button#mostrarvalue").click(function(){
    alert($("#test33").val());
})
$('#textclase').click(function(){
    $('p').text('holaaa');
})





}); 
