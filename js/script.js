var estadoSemaforo = 'verde';

switch (estadoSemaforo) {
    case 'rojo':
        document.getElementById('radioRed').checked = true;
        document.getElementById('radioRed2').checked = true;
        document.getElementById('radioRed3').checked = true;
        break;
    case 'amarillo':
        document.getElementById('radioYellow').checked = true;
        document.getElementById('radioYellow2').checked = true;
        document.getElementById('radioYellow3').checked = true;
        break;
    case 'verde':
        document.getElementById('radioGreen').checked = true;
        document.getElementById('radioGreen2').checked = true;
        document.getElementById('radioGreen3').checked = true;
        break;
}

const datosResumen = [
    { texto: 'Estado: Com. Preinicio Ko (12-6)', circle: 'red' },
    { texto: 'Config.: ok: Fundae, Interno, AV', circle: 'green' },
    { texto: 'Datos Centro: ok', circle: 'green' },
    { texto: 'Proveedor: ok', circle: 'green' },
    { texto: 'Calendario: ok', circle: 'green' },
    { texto: 'Formadores: ko, 1 sesión sin …', circle: 'red' }
];

const datosActividad = [
    { texto: 'Calendario: 2/3 sesiones', circle: 'sin svg' },
    { texto: 'Alumnos Ins./Fin: 12/0', circle: 'sin svg' },
    { texto: 'Cuestionarios: Sin enviar', circle: 'blue' },
    { texto: 'Diplomas: Sin enviar', circle: 'blue' }
];

const datosExtra = [
    { texto: 'CIF Centro: ok: B84465863', circle: 'red' },
    { texto: 'NIF Formadores: ok (<a class="aVer" href="#">desplegar</a>)', circle: 'green' },
    { texto: 'Expediente: ok: B23222024', circle: 'green' },
    { texto: 'Gestión Externa: no', circle: 'sin svg' },
    { texto: 'AV: si', circle: 'sin svg' },
    { texto: 'Bimodal: No', circle: 'sin svg' },
    { texto: 'Costes: Sin asignar', circle: 'blue' }
];

const datosResumenSegundoPanel = [
    { texto: 'Estado: Coms. Preinicio 7/<p class="text-red">9</p>', circle: 'red' },
    { texto: 'Config.: <p class="text-green ms-1">ok</p>: Fundae, Online', circle: 'green' },
    { texto: 'Tutores: <p class="text-red ms-1">ko</p>, 2 ediciones sin asignar', circle: 'red' },
    { texto: 'Proveedor: <p class="text-green ms-1">ok</p>', circle: 'green' },
    { texto: 'Calendario: <p class="text-green ms-1">ok</p>', circle: 'green' },
    { texto: 'Alumnos: <p class="text-red ms-1">ko</p>, 30 asignación temp', circle: 'red' }
];

const datosActividadSegundoPanel = [
    { texto: 'Calendario: 9 grupos [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' },
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

window.onload = function() {

    llenarTabla('tablaResumen', datosResumen);
    llenarTabla('tablaActividad', datosActividad);
    llenarTabla('tablaDatosExtra', datosExtra);
    llenarTabla('tablaResumenSegundoPanel', datosResumenSegundoPanel);
    llenarTabla('tablaActividadSegundoPanel', datosActividadSegundoPanel);
    llenarTabla('tablaDatosExtraSegundoPanel', datosExtraSegundoPanel);
    llenarTabla('tablaGrupo1', datosGrupo1);
    llenarTabla('tablaGrupo2', datosGrupo2);
    llenarTabla('tablaGrupo3', datosGrupo3);
    llenarTabla('tablaGrupo4', datosGrupo4);
    llenarTabla('tablaGrupo5', datosGrupo5);
};

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        document.querySelectorAll('.menu-link').forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        
        this.classList.add('active');
    });
});