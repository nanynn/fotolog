function agregaPosteo() {
//rescatar el contenedor posteos el nombre y comentario del usuario
var containerPosteo = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;
//nodo elemento donde irá el post
var nuevoPost=document.createElement("div");

//crear elementos donde se guardarán valores
var contenedorNombre= document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

//elementos para corazon
var parrfCorazon = document.createElement('p');
var i = document.createElement('i');

//asignar padre al icono corazon
parrfCorazon.appendChild(i);

//atributos a corazon
parrfCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

//transformar el nombre a nodo de texto
var nodoNombre=document.createTextNode(nombreFF + "escribió:");
var nodoPosteo= document.createTextNode(contenidoFF);

//asignar padres a nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//padre a nombre contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrfCorazon);
nuevoPost.appendChild(separacion);

//funcion click para el corazon y se asigna clase rojo de css
i.addEventListener("click", function(){
	i.classList.toggle('rojo');
})

//atributos a nuestro post y se agrega al contenedor de posteos
nuevoPost.setAttribute("class", "posteo");
containerPosteo.appendChild(nuevoPost);

//resetear los campos y dejarlo en blanco
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";
}