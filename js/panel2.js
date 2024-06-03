var estadoSemaforo = 'amarillo';

switch (estadoSemaforo) {
    case 'rojo':
        document.getElementById('radioRed').checked = true;
        break;
    case 'amarillo':
        document.getElementById('radioYellow').checked = true;
        break;
    case 'verde':
        document.getElementById('radioGreen').checked = true;
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
    { texto: 'NIF Formadores: ok (<a class="aVer" href="../../assets/pages/panel3.html">desplegar</a>)', circle: 'green' },
    { texto: 'Expediente: ok: B23222024', circle: 'green' },
    { texto: 'Gestión Externa: no', circle: 'sin svg' },
    { texto: 'AV: si', circle: 'sin svg' },
    { texto: 'Bimodal: No', circle: 'sin svg' },
    { texto: 'Costes: Sin asignar', circle: 'blue' }
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
    llenarTabla('tablaResumen', datosResumen);
    llenarTabla('tablaActividad', datosActividad);
    llenarTabla('tablaDatosExtra', datosExtra);
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