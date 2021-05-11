$(document).ready(function(){

    

$('#oso').hover(function(){
    $(this).attr('src','oso2.jpg');
},function(){
   $(this).attr('src','oso.jpg');

})
$('#gato').hover(function(){
    $(this).attr('src','gato2.jpg');
},function(){
   $(this).attr('src','gato.jpg');

})
$('#perro').hover(function(){
    $(this).attr('src','perro2.jpg');
},function(){
    $(this).attr('src','perro.jpg');
})
$('#raton').hover(function(){
    $(this).attr('src','raton2.jpg');
},function(){
    $(this).attr('src','raton.png');
})


});