// Definición de las agrupaciones por nivel para los pre-requisitos masivos
const n1 = ['alg1', 'cal1', 'ipe1', 'tdh'];
const n2 = ['ing1', 'alg2', 'cal2', 'ipe2', 'comp1', 'teoe'];
const n3 = ['ing2', 'alglin', 'cal3', 'calprob', 'comp2', 'uso'];
const n4 = ['ing3', 'compcal', 'infest', 'comp3', 'fis', 'ici'];
const n5 = ['ing4', 'teoprob', 'mues', 'modlin', 'enp'];
const n6 = ['procest', 'dae', 'metmul', 'simest', 'etica'];
const n7 = ['sdt', 'diae', 'elec1', 'bio', 'eco'];
const n8 = ['indlab', 'tal1', 'elec2', 'elec3', 'concos'];
const n9 = ['tal2', 'elec4', 'sem1', 'evaproy'];

const ramosMalla = [
    { nivel: 1, id: 'alg1', nombre: 'Álgebra 1', pre: [] },
    { nivel: 1, id: 'cal1', nombre: 'Cálculo 1', pre: [] },
    { nivel: 1, id: 'ipe1', nombre: 'Introducción a la Probabilidad y Estadística 1', pre: [] },
    { nivel: 1, id: 'tdh', nombre: 'Taller de Desarrollo de Habilidades', pre: [] },

    { nivel: 2, id: 'ing1', nombre: 'Inglés 1', pre: ['tdh'] },
    { nivel: 2, id: 'alg2', nombre: 'Álgebra 2', pre: ['alg1'] },
    { nivel: 2, id: 'cal2', nombre: 'Cálculo 2', pre: ['cal1'] },
    { nivel: 2, id: 'ipe2', nombre: 'Introducción a la Probabilidad y Estadística 2', pre: ['ipe1'] },
    { nivel: 2, id: 'comp1', nombre: 'Computación 1', pre: ['alg1'] },
    { nivel: 2, id: 'teoe', nombre: 'Técnicas de la Expresión Oral y Escritas', pre: ['tdh'] },

    { nivel: 3, id: 'ing2', nombre: 'Inglés 2', pre: ['ing1'] },
    { nivel: 3, id: 'alglin', nombre: 'Álgebra Lineal', pre: ['alg2'] },
    { nivel: 3, id: 'cal3', nombre: 'Cálculo 3', pre: ['cal2'] },
    { nivel: 3, id: 'calprob', nombre: 'Cálculo de Probabilidades', pre: ['ipe2', 'cal2'] },
    { nivel: 3, id: 'comp2', nombre: 'Computación 2', pre: ['comp1'] },
    { nivel: 3, id: 'uso', nombre: 'Uso de Software Estadístico', pre: ['ipe2'] },

    { nivel: 4, id: 'ing3', nombre: 'Inglés 3', pre: ['ing2'] },
    { nivel: 4, id: 'compcal', nombre: 'Complementos de Cálculo', pre: ['cal3', 'alglin'] },
    { nivel: 4, id: 'infest', nombre: 'Inferencia Estadística', pre: ['calprob'] },
    { nivel: 4, id: 'comp3', nombre: 'Computación 3', pre: ['comp2'] },
    { nivel: 4, id: 'fis', nombre: 'Física General', pre: ['cal3', 'alglin'] },
    { nivel: 4, id: 'ici', nombre: 'Introducción a las Ciencias de la Ingeniería', pre: ['alglin'] },

    { nivel: 5, id: 'ing4', nombre: 'Inglés 4', pre: ['ing3'] },
    { nivel: 5, id: 'teoprob', nombre: 'Teoría de la Probabilidad', pre: ['calprob', 'compcal'] },
    { nivel: 5, id: 'mues', nombre: 'Muestreo', pre: ['infest'] },
    { nivel: 5, id: 'modlin', nombre: 'Modelos Lineales', pre: ['alglin', 'infest'] },
    { nivel: 5, id: 'enp', nombre: 'Estadística No Paramétrica', pre: ['infest'] },

    { nivel: 6, id: 'procest', nombre: 'Procesos Estocásticos', pre: ['teoprob'] },
    { nivel: 6, id: 'dae', nombre: 'Diseño y Análisis de Encuestas', pre: ['enp', 'mues'] },
    { nivel: 6, id: 'metmul', nombre: 'Métodos Multivariantes', pre: ['modlin'] },
    { nivel: 6, id: 'simest', nombre: 'Simulación Estadística', pre: ['infest', 'comp3', 'teoprob'] },
    { nivel: 6, id: 'etica', nombre: 'Ética Estadística', pre: [...n1, ...n2, ...n3, ...n4, 'enp'] },

    { nivel: 7, id: 'sdt', nombre: 'Series de Tiempo', pre: ['procest'] },
    { nivel: 7, id: 'diae', nombre: 'Diseño y Análisis de Experimentos', pre: ['modlin', 'dae'] },
    { nivel: 7, id: 'elec1', nombre: 'Electivo 1', pre: ['metmul'] },
    { nivel: 7, id: 'bio', nombre: 'Bioestadística', pre: ['metmul'] },
    { nivel: 7, id: 'eco', nombre: 'Economía', pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'etica'] },

    { nivel: 8, id: 'indlab', nombre: 'Inducción Laboral', pre: [...n1, ...n2, ...n3, ...n4, ...n5] },
    { nivel: 8, id: 'tal1', nombre: 'Taller 1', pre: ['sdt', 'bio', 'diae'] },
    { nivel: 8, id: 'elec2', nombre: 'Electivo 2', pre: ['metmul'] },
    { nivel: 8, id: 'elec3', nombre: 'Electivo 3', pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'metmul'] },
    { nivel: 8, id: 'concos', nombre: 'Contabilidad y Costos', pre: ['eco'] },

    { nivel: 9, id: 'tal2', nombre: 'Taller 2', pre: ['tal1'] },
    { nivel: 9, id: 'elec4', nombre: 'Electivo 4', pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'metmul'] },
    { nivel: 9, id: 'sem1', nombre: 'Seminario de Tesis 1', pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8] },
    { nivel: 9, id: 'evaproy', nombre: 'Evaluación de Proyectos', pre: ['concos'] },

    { nivel: 10, id: 'sem2', nombre: 'Seminario de Tesis 2', pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8, ...n9] },
    { nivel: 10, id: 'comint', nombre: 'Comunicación Integral y Liderazgo', pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8, ...n9] }
];

// AQUÍ ESTÁ LA MAGIA DE LA MEMORIA:
// Intentamos cargar los datos guardados en el navegador. Si no hay nada, empezamos de cero.
let aprobados = new Set();
const memoriaGuardada = localStorage.getItem('mallaEstadisticaProgreso');
if (memoriaGuardada) {
    aprobados = new Set(JSON.parse(memoriaGuardada));
}

function init() {
    renderizarMalla();
    actualizarEstados();
}

function renderizarMalla() {
    const contenedor = document.getElementById('malla-container');
    
    for (let i = 1; i <= 10; i++) {
        const columna = document.createElement('div');
        columna.className = 'nivel-columna';
        
        const titulo = document.createElement('div');
        titulo.className = 'nivel-titulo';
        titulo.textContent = `Nivel ${i}`;
        columna.appendChild(titulo);

        const ramosNivel = ramosMalla.filter(r => r.nivel === i);
        ramosNivel.forEach(ramo => {
            const divRamo = document.createElement('div');
            divRamo.className = 'ramo bloqueado';
            divRamo.id = ramo.id;
            divRamo.textContent = ramo.nombre;
            
            divRamo.addEventListener('click', () => toggleRamo(ramo.id));
            columna.appendChild(divRamo);
        });

        contenedor.appendChild(columna);
    }
}

function cumpleRequisitos(idRamo) {
    const ramo = ramosMalla.find(r => r.id === idRamo);
    if (!ramo) return false;
    return ramo.pre.every(preReq => aprobados.has(preReq));
}

function toggleRamo(idRamo) {
    if (aprobados.has(idRamo)) {
        aprobados.delete(idRamo);
    } else {
        if (cumpleRequisitos(idRamo)) {
            aprobados.add(idRamo);
        }
    }
    
    let huboCambios = true;
    while (huboCambios) {
        huboCambios = false;
        for (let id of aprobados) {
            if (!cumpleRequisitos(id)) {
                aprobados.delete(id);
                huboCambios = true;
            }
        }
    }

    actualizarEstados();
    guardarEnMemoria(); // Cada vez que haces clic, guardamos el nuevo estado
}

function actualizarEstados() {
    ramosMalla.forEach(ramo => {
        const elemento = document.getElementById(ramo.id);
        
        if (aprobados.has(ramo.id)) {
            elemento.className = 'ramo aprobado';
        } else if (cumpleRequisitos(ramo.id)) {
            elemento.className = 'ramo disponible';
        } else {
            elemento.className = 'ramo bloqueado';
        }
    });
}

// Función que toma tus ramos aprobados y los guarda en el navegador
function guardarEnMemoria() {
    localStorage.setItem('mallaEstadisticaProgreso', JSON.stringify(Array.from(aprobados)));
}

document.addEventListener('DOMContentLoaded', init);
