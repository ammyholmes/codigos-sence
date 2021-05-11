$(document).ready(function(){

$('#cat0').click(function(){
    $(this).attr('src','ninja0.png');
//},function(){
 //   $(this).attr('src','cat0.png');
});

$('#cat1').click(function(){
    $(this).attr('src','ninja1.png');

})
$('img').click(function(){
    console.log('data-alt-src value is',$(this).attr('data-alt-src'));
});

$('#ninja2').click(function(){
    $(this).attr('src','cat2.png');
});
$('#ninja3').click(function(){
    $(this).attr('src','cat3.png');
});
$('#ninja4').click(function(){
    $(this).attr('src','cat4.png');
});






})