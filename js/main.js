window.addEventListener('load', function(){
    var imagenes = [];

    imagenes[0] = "img/00.jpg";
    imagenes[1] = "img/01.jpg";
    imagenes[2] = "img/02.jpg";
    imagenes[3] = "img/03.jpg";

    var indiceImagenes = 0;

    function cambiarImagenes(){
        document.slider.src = imagenes[indiceImagenes];

        if(indiceImagenes < 3){
            indiceImagenes++
        }else{
            indiceImagenes = 0;
        }
    }
    setInterval(cambiarImagenes, 3000);

});

const btnMenu = document.getElementById('btn-menu');
const nav = document.querySelector('.menu');

btnMenu.addEventListener('click', ()=>{
    nav.classList.toggle('show');
});