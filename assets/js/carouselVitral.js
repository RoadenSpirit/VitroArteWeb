const fila = document.querySelector('.contenedor-carousel');
const imagen = document.querySelectorAll('.imagen');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
let velocidadDesplazamiento = 10;
// ? ----- ----- Event Listener para la flecha derecha. ----- -----
let intervaloDesplazamiento;

flechaDerecha.addEventListener('mousedown', () => {
    intervaloDesplazamiento = setInterval(() => {
		fila.scrollLeft += fila.offsetWidth / 2 / velocidadDesplazamiento; 
        const indicadorActivo = document.querySelector('.indicadores .activo');
        if (indicadorActivo.nextSibling) {
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    }, 100); // Ajusta el intervalo de tiempo según tus necesidades (en milisegundos)
});

flechaDerecha.addEventListener('mouseup', () => {
    clearInterval(intervaloDesplazamiento);
});


// ? ----- ----- Event Listener para la flecha izquierda. ----- -----

flechaIzquierda.addEventListener('mousedown', () => {
    intervaloDesplazamiento = setInterval(() => {
        fila.scrollLeft -= fila.offsetWidth / 2 / velocidadDesplazamiento; // Ajusta la velocidad de desplazamiento según tus necesidades
        const indicadorActivo = document.querySelector('.indicadores .activo');
        if (indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    }, 100); // Ajusta el intervalo de tiempo según tus necesidades (en milisegundos)
});

flechaIzquierda.addEventListener('mouseup', () => {
    clearInterval(intervaloDesplazamiento);
});
// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(imagen.length / 2);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// Movimiento automatico 
window.addEventListener('scroll', function() {
    const carousel = document.getElementById('carousel');
    const carruselPosicion = carousel.getBoundingClientRect().top;
    const ventanaAltura = window.innerHeight;

    if (carruselPosicion < ventanaAltura) {
        console.log('El carrusel es visible en el sitio');
    }
});