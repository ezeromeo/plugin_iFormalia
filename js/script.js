var estadoSemaforo = 'verde';

switch (estadoSemaforo) {
    case 'rojo':
        document.getElementById('radioRed2').checked = true;
        break;
    case 'amarillo':
        document.getElementById('radioYellow2').checked = true;
        break;
    case 'verde':
        document.getElementById('radioGreen2').checked = true;
        break;
}



const datosResumenSegundoPanel = [
    { texto: 'Estado: Coms. Preinicio 7/<p class="text-red">9</p>', circle: 'red' },
    { texto: 'Config.: <p class="text-green ms-1">ok</p>: Fundae, Online', circle: 'green' },
    { texto: 'Tutores: <p class="text-red ms-1">ko</p>, 2 ediciones sin asignar', circle: 'red' },
    { texto: 'Proveedor: <p class="text-green ms-1">ok</p>', circle: 'green' },
    { texto: 'Calendario: <p class="text-green ms-1">ok</p>', circle: 'green' },
    { texto: 'Alumnos: <p class="text-red ms-1">ko</p>, 30 asignación temp', circle: 'red' }
];

const datosActividadSegundoPanel = [
    { texto: 'Calendario: 9 grupos [<a class="aVer" href="../../assets/pages/panel3.html">ver</a>]', circle: 'sin svg' },
    { texto: 'Alumnos Ins./Fin: 214/<p class="text-green">90</p>', circle: 'sin svg' },
    { texto: 'Cuestionarios: <p class="text-green ms-1">ok</p>, 7 grps. 50%', circle: 'green' },
    { texto: 'Diplomas: <p class="text-green ms-1">ok</p>, 7 grps. 90%', circle: 'green' }
];

const datosExtraSegundoPanel = [
    { texto: 'CIF Centro: ok: B84465863', circle: 'red' },
    { texto: 'Tutores: <p class="text-red ms-1 me-1">ko</p> (<a class="aVer" href="#">desplegar</a>)', circle: 'green' },
    { texto: 'Expediente: <p class="text-green ms-1">ok</p>: B23222024', circle: 'green' },
    { texto: 'Gestión Externa: no', circle: 'sin svg' },
    { texto: 'AV: no', circle: 'sin svg' },
    { texto: 'Online: si', circle: 'sin svg' },
    { texto: 'Costes: <p class="text-blue ms-1">Sin asignar (9 grupos)</p>', circle: 'blue' }
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
            imagen.src = `assets/img/circle${dato.circle.charAt(0).toUpperCase() + dato.circle.slice(1)}.svg`;
            imagen.alt = '';
            celdaCirculo.appendChild(imagen);
        }
        fila.appendChild(celdaCirculo);

        tbody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    llenarTabla('tablaResumenSegundoPanel', datosResumenSegundoPanel);
    llenarTabla('tablaActividadSegundoPanel', datosActividadSegundoPanel);
    llenarTabla('tablaDatosExtraSegundoPanel', datosExtraSegundoPanel);
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