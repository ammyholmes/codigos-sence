$(document).ready(function(){
/*
for(i=1;i<152;i++){
    $('div#poke').append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png" id="'+i+'">');
 
}
$('img').click(function(){
    alert($(this).attr('id'))
}); 


$(document).on('click','img',function(){
   $('img').attr('id',function(){
       
   })
}) 
$(document).on('click','img',function(){
   console.log(this.id);
   $.get("https://pokeapi.co/api/v2/pokemon/"+this.id+"/",function(traer){
       // traer.name
        console.log(traer);
                $('div#seccion').html('<h1>'+traer.name+'</h1>');
                $('.datos').text(traer.weight);

},"json"); 
}) */
//********************************************************************************************* 
/*
var pokemons ="";
for(var i=1;i<=151;i++){
    var card = "<div class = 'card mt-4 m-5' style='width:18rem;'>";
    card += "<img src='raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+i+".png'class ='card-img-top' alt=''>";
    card += "<div class='card-body'>";
    card += " <a id='"+i+"'class='btn btn-primary'>Ver</a>";
    card += "</div>";
    card += "</div>";
    pokemons += card;
}
$('#pokemon').html(pokemons); */

for(i=1;i<152;i++){
    $('div#poke').append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png" id="'+i+'">');
};
    $('img').click(function(){
        console.log($(this).attr('id'));
    });

$('img').click(function(){
    var id=this.id;
    $.get("https://pokeapi.co/api/v2/pokemon/"+id+"/",function(res){
        console.log(res);
        var tipos ="<p>Tipos:</p>";
        for(var i=0;i<res.types.length;i++){
            var tabletipos = "<ul><li>"+res.types[i].type.name+"</li></ul>";
            tipos += tabletipos;
        }
        var foto="<img id='imagen2' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+id+".png'>"

        $('#imagen').html(foto);

        $('#tipos').html(tipos);
        $('#lblpeso').text("peso: "+res.weight);
        $('#lblaltura').text("altura: "+res.height);
        $('#exampleModalLabel').text("nombre: "+res.name);
    
    },"json");
    
})

})