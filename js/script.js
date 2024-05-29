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
    { texto: 'Estado: Coms. Preinicio 7/9', circle: 'red' },
    { texto: 'Config.: ok: Fundae, Online', circle: 'green' },
    { texto: 'Tutores: ko, 2 ediciones sin asignar', circle: 'red' },
    { texto: 'Proveedor: ok', circle: 'green' },
    { texto: 'Calendario: ok', circle: 'green' },
    { texto: 'Alumnos: ko, 30 asignación temp', circle: 'red' }
];

const datosActividadSegundoPanel = [
    { texto: 'Calendario: 9 grupos [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' },
    { texto: 'Alumnos Ins./Fin: 214/90', circle: 'sin svg' },
    { texto: 'Cuestionarios: ok, 7 grps. 50%', circle: 'green' },
    { texto: 'Diplomas: ok, 7 grps. 90%', circle: 'green' }
];

const datosExtraSegundoPanel = [
    { texto: 'CIF Centro: ok: B84465863', circle: 'red' },
    { texto: 'Tutores: ko (<a class="aVer" href="#">desplegar</a>)', circle: 'green' },
    { texto: 'Expediente: ok: B23222024', circle: 'green' },
    { texto: 'Gestión Externa: no', circle: 'sin svg' },
    { texto: 'AV: no', circle: 'sin svg' },
    { texto: 'Online: si', circle: 'sin svg' },
    { texto: 'Costes: Sin asignar (9 grupos)', circle: 'blue' }
];

const datosGrupo1 = [
    { texto: 'Ini/fin: 1 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 32/18', circle: 'sin svg' },
    { texto: 'Tutores: 1 DP [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo2 = [
    { texto: 'Ini/fin: 3 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 2/1', circle: 'sin svg' },
    { texto: 'Tutores: 1 MG [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo3 = [
    { texto: 'Ini/fin: 12 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 22/10', circle: 'sin svg' },
    { texto: 'Tutores: 1 DP [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo4 = [
    { texto: 'Ini/fin: 3 mayo-31 julio', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 70/00', circle: 'sin svg' },
    { texto: 'Tutores: 2 DP, MG [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

const datosGrupo5 = [
    { texto: 'Ini/fin: 1 enero-31 marzo', circle: 'sin svg' },
    { texto: 'Alumnos/fin: 32/18', circle: 'sin svg' },
    { texto: 'Tutores: 1 DP [<a class="aVer" href="#">ver</a>]', circle: 'sin svg' }
];

function llenarTabla(idTabla, datos) {
    const tbody = document.getElementById(idTabla);
    datos.forEach(dato => {
        const fila = document.createElement('tr');
        const celdaTexto = document.createElement('td');
        celdaTexto.innerHTML = dato.texto;
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
        // Prevenir el comportamiento por defecto de navegación
        event.preventDefault();
        
        // Remover la clase 'active' de todos los enlaces
        document.querySelectorAll('.menu-link').forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        
        // Añadir la clase 'active' al enlace clickeado
        this.classList.add('active');
    });
});