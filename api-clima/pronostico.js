$(document).ready(function(){

  /*  $('form').submit(function() {
        $("#ingresar").on('click',function(){
            var a=$('#lugar').val()
            console.log(a);
         });
        $.get("http://api.openweathermap.org/data/2.5/weather?q= "+this.a+"dc19772a7e64a0ef1465a91e38e4398d", function(res) {
            console.log(res);
        }, 'json');
        return false;
    });

$('form').submit(function() {
    var a=$('#lugar').val();
   $.get("http://api.openweathermap.org/data/2.5/weather?q="+a+"&APPID=dc19772a7e64a0ef1465a91e38e4398d",function(res){
       console.log(res);
   });

   //http://api.openweathermap.org/data/2.5/weather?q=Temuco&APPID=dc19772a7e64a0ef1465a91e38e4398d


}) */

$('#ingresar').click(function(){
    if($('lugar').val() != "" ){
        var url="http://api.openweathermap.org/data/2.5/weather?q="+$('#lugar').val()+"&APPID=dc19772a7e64a0ef1465a91e38e4398d";
        $.get(url,function(res){
          console.log(res);
          $('#ciudad').text(res.name+","+res.weather[0].description);
          var temperatura=(res.main.temp-273.15).toFixed(2);
          $('#temperatura').text("Temperatura:"+temperatura+"C°");
          $('#coordenadas').text("coordenadas:Lat "+res.coord.lat+", Long"+res.coord.lon);
          $('#lugar').val('');
        },'json');

    }else{
        alert("Ingresar ciudad");
    }
})




})