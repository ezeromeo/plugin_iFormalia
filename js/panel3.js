var estadoSemaforo = 'amarillo';

switch (estadoSemaforo) {
    case 'rojo':
        document.getElementById('radioRed3').checked = true;
        break;
    case 'amarillo':
        document.getElementById('radioYellow3').checked = true;
        break;
    case 'verde':
        document.getElementById('radioGreen3').checked = true;
        break;
}

const datosGrupo1 = [
    { texto: 'Ini/fin: 1 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 32/<p class="text-green">18</p>', circle: 'sin svg' },
    { texto: 'Tutores: 1 DP [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo2 = [
    { texto: 'Ini/fin: 3 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 2/<p class="text-green">1</p>', circle: 'sin svg' },
    { texto: 'Tutores: 1 MG [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo3 = [
    { texto: 'Ini/fin: 12 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 22/<p class="text-green">10</p>', circle: 'sin svg' },
    { texto: 'Tutores: 1 DP [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo4 = [
    { texto: 'Ini/fin: 3 mayo-31 julio', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 70/<p class="text-red">00</p>', circle: 'sin svg' },
    { texto: 'Tutores: 2 DP, MG [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo5 = [
    { texto: 'Ini/fin: 1 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 32/<p class="text-green">18</p>', circle: 'sin svg' },
    { texto: 'Tutores: 1 DP [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

function llenarTabla(idTabla, datos) {
    const tbody = document.getElementById(idTabla);
    if (!tbody) {
        console.error(`No se encontró el elemento con ID ${idTabla}`);
        return;
    }

    datos.forEach(dato => {
        const fila = document.createElement('tr');
        const celdaTexto = document.createElement('td');
        celdaTexto.innerHTML = dato.texto;
        celdaTexto.classList.add('d-flex', 'align-items-center', 'justify-content-start', 'celdaTexto');
        fila.appendChild(celdaTexto);

        const celdaCirculo = document.createElement('td');
        if (dato.circle !== 'sin svg') {
            const imagen = document.createElement('img');
            imagen.src = `../../assets/img/circle${dato.circle.charAt(0).toUpperCase() + dato.circle.slice(1)}.svg`;
            imagen.alt = '';
            celdaCirculo.appendChild(imagen);
        }
        fila.appendChild(celdaCirculo);

        tbody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    llenarTabla('tablaGrupo1', datosGrupo1);
    llenarTabla('tablaGrupo2', datosGrupo2);
    llenarTabla('tablaGrupo3', datosGrupo3);
    llenarTabla('tablaGrupo4', datosGrupo4);
    llenarTabla('tablaGrupo5', datosGrupo5);
});

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        document.querySelectorAll('.menu-link').forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        
        this.classList.add('active');
    });
});