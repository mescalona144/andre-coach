let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const typed = new Typed('.txtVioletas', {
    strings: ['ANDREINA' ],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true 
})
