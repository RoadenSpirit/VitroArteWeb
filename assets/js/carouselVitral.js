const fila = document.querySelector('.contenedor-carousel');
const imagen = document.querySelectorAll('.imagen');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
let velocidadDesplazamiento = 7;
// ? ----- ----- Event Listener para la flecha derecha. ----- -----
let intervaloDesplazamiento;


flechaDerecha.addEventListener('mousedown', () => {
    intervaloDesplazamiento = setInterval(() => {
        fila.scrollLeft += fila.offsetWidth / 2 / velocidadDesplazamiento;
        contadorMovimientos++;

        if (contadorMovimientos === 22) {
            const indicadorActivo = document.querySelector('.indicadores .activo');
            if (indicadorActivo.nextSibling) {
                indicadorActivo.nextSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
            contadorMovimientos = 0; // Reinicia el contador de movimientos
        }
    }, 100);
});

flechaDerecha.addEventListener('mouseup', () => {
    clearInterval(intervaloDesplazamiento);
});


// ? ----- ----- Event Listener para la flecha izquierda. ----- -----

let contadorMovimientos = 0;

flechaIzquierda.addEventListener('mousedown', () => {
    intervaloDesplazamiento = setInterval(() => {
        fila.scrollLeft -= fila.offsetWidth / 2 / velocidadDesplazamiento;
        contadorMovimientos++;

        if (contadorMovimientos === 22) {
            const indicadorActivo = document.querySelector('.indicadores .activo');
            if (indicadorActivo.previousSibling) {
                indicadorActivo.previousSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
            contadorMovimientos = 0; // Reinicia el contador de movimientos
        }
    }, 100);
});

flechaIzquierda.addEventListener('mouseup', () => {
    clearInterval(intervaloDesplazamiento);
});

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('touchstart', () => {
    intervaloDesplazamiento = setInterval(() => {
        fila.scrollLeft += fila.offsetWidth / 2 / velocidadDesplazamiento;
        contadorMovimientos++;

        if (contadorMovimientos === 22) {
            const indicadorActivo = document.querySelector('.indicadores .activo');
            if (indicadorActivo.nextSibling) {
                indicadorActivo.nextSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
            contadorMovimientos = 0;
        }
    }, 100);
});

flechaDerecha.addEventListener('touchend', () => {
    clearInterval(intervaloDesplazamiento);
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('touchstart', () => {
    intervaloDesplazamiento = setInterval(() => {
        fila.scrollLeft -= fila.offsetWidth / 2 / velocidadDesplazamiento;
        contadorMovimientos++;

        if (contadorMovimientos === 22) {
            const indicadorActivo = document.querySelector('.indicadores .activo');
            if (indicadorActivo.previousSibling) {
                indicadorActivo.previousSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
            contadorMovimientos = 0;
        }
    }, 100);
});

flechaIzquierda.addEventListener('touchend', () => {
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


// Movil desplazamiento 

const filA = document.querySelector('.contenedor-carousel');
let touchStartX = 0;
let touchEndX = 0;

fila.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

fila.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
});

fila.addEventListener('touchend', () => {
  const distanciaDesplazamiento = touchEndX - touchStartX;

  if (distanciaDesplazamiento > 50) {
    // Desplazar hacia la izquierda
    filA.scrollLeft -= fila.offsetWidth;
  } else if (distanciaDesplazamiento < -50) {
    // Desplazar hacia la derecha
    filA.scrollLeft += fila.offsetWidth;
  }
});