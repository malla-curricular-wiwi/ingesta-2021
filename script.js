const n1 = ['alg1', 'cal1', 'ipe1', 'tdh'];
const n2 = ['ing1', 'alg2', 'cal2', 'ipe2', 'comp1', 'teoe'];
const n3 = ['ing2', 'alglin', 'cal3', 'calprob', 'comp2', 'uso', 'port1']; // Aquí agregamos port1 a la lista del nivel 3
const n4 = ['ing3', 'compcal', 'infest', 'comp3', 'fis', 'ici'];
const n5 = ['ing4', 'teoprob', 'mues', 'modlin', 'enp'];
const n6 = ['procest', 'dae', 'metmul', 'simest', 'etica'];
const n7 = ['sdt', 'diae', 'elec1', 'bio', 'eco'];
const n8 = ['indlab', 'tal1', 'elec2', 'elec3', 'concos'];
const n9 = ['tal2', 'elec4', 'sem1', 'evaproy'];

const ramosMalla = [
    { nivel: 1, id: 'alg1', nombre: 'Álgebra 1', creditos: 7, pre: [] },
    { nivel: 1, id: 'cal1', nombre: 'Cálculo 1', creditos: 8, pre: [] },
    { nivel: 1, id: 'ipe1', nombre: 'Introducción a la Probabilidad y Estadística 1', creditos: 6, pre: [] },
    { nivel: 1, id: 'tdh', nombre: 'Taller de Desarrollo de Habilidades', creditos: 2, pre: [] },
    { nivel: 2, id: 'ing1', nombre: 'Inglés 1', creditos: 3, pre: ['tdh'] },
    { nivel: 2, id: 'alg2', nombre: 'Álgebra 2', creditos: 7, pre: ['alg1'] },
    { nivel: 2, id: 'cal2', nombre: 'Cálculo 2', creditos: 7, pre: ['cal1'] },
    { nivel: 2, id: 'ipe2', nombre: 'Introducción a la Probabilidad y Estadística 2', creditos: 6, pre: ['ipe1'] },
    { nivel: 2, id: 'comp1', nombre: 'Computación 1', creditos: 5, pre: ['alg1'] },
    { nivel: 2, id: 'teoe', nombre: 'Técnicas de la Expresión Oral y Escritas', creditos: 2, pre: ['tdh'] },
    
    { nivel: 3, id: 'ing2', nombre: 'Inglés 2', creditos: 3, pre: ['ing1'] },
    { nivel: 3, id: 'alglin', nombre: 'Álgebra Lineal', creditos: 7, pre: ['alg2'] },
    { nivel: 3, id: 'cal3', nombre: 'Cálculo 3', creditos: 7, pre: ['cal2'] },
    { nivel: 3, id: 'calprob', nombre: 'Cálculo de Probabilidades', creditos: 6, pre: ['ipe2', 'cal2'] },
    { nivel: 3, id: 'comp2', nombre: 'Computación 2', creditos: 5, pre: ['comp1'] },
    { nivel: 3, id: 'uso', nombre: 'Uso de Software Estadístico', creditos: 2, pre: ['ipe2'] },
    { nivel: 3, id: 'port1', nombre: 'Portugués 1', creditos: 3, pre: [] }, // <-- ¡Aquí está tu nuevo ramo!
    
    { nivel: 4, id: 'ing3', nombre: 'Inglés 3', creditos: 3, pre: ['ing2'] },
    { nivel: 4, id: 'compcal', nombre: 'Complementos de Cálculo', creditos: 7, pre: ['cal3', 'alglin'] },
    { nivel: 4, id: 'infest', nombre: 'Inferencia estadística', creditos: 6, pre: ['calprob'] },
    { nivel: 4, id: 'comp3', nombre: 'Computación 3', creditos: 5, pre: ['comp2'] },
    { nivel: 4, id: 'fis', nombre: 'Física General', creditos: 4, pre: ['cal3', 'alglin'] },
    { nivel: 4, id: 'ici', nombre: 'Introducción a las Ciencias de la Ingeniería', creditos: 5, pre: ['alglin'] },
    { nivel: 5, id: 'ing4', nombre: 'Inglés 4', creditos: 3, pre: ['ing3'] },
    { nivel: 5, id: 'teoprob', nombre: 'Teoría de la Probabilidad', creditos: 7, pre: ['calprob', 'compcal'] },
    { nivel: 5, id: 'mues', nombre: 'Muestreo', creditos: 6, pre: ['infest'] },
    { nivel: 5, id: 'modlin', nombre: 'Modelos Lineales', creditos: 6, pre: ['alglin', 'infest'] },
    { nivel: 5, id: 'enp', nombre: 'Estadística No Paramétrica', creditos: 6, pre: ['infest'] },
    { nivel: 6, id: 'procest', nombre: 'Procesos Estocásticos', creditos: 6, pre: ['teoprob'] },
    { nivel: 6, id: 'dae', nombre: 'Diseño y Análisis de Encuestas', creditos: 6, pre: ['enp', 'mues'] },
    { nivel: 6, id: 'metmul', nombre: 'Métodos Multivariantes', creditos: 6, pre: ['modlin'] },
    { nivel: 6, id: 'simest', nombre: 'Simulación Estadística', creditos: 6, pre: ['infest', 'comp3', 'teoprob'] },
    { nivel: 6, id: 'etica', nombre: 'Ética Estadística', creditos: 2, pre: [...n1, ...n2, ...n3, ...n4, 'enp'] },
    { nivel: 7, id: 'sdt', nombre: 'Series de Tiempo', creditos: 6, pre: ['procest'] },
    { nivel: 7, id: 'diae', nombre: 'Diseño y Análisis de Experimentos', creditos: 6, pre: ['modlin', 'dae'] },
    { nivel: 7, id: 'elec1', nombre: 'Electivo 1', creditos: 6, pre: ['metmul'] },
    { nivel: 7, id: 'bio', nombre: 'Bioestadística', creditos: 6, pre: ['metmul'] },
    { nivel: 7, id: 'eco', nombre: 'Economía', creditos: 4, pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'etica'] },
    { nivel: 8, id: 'indlab', nombre: 'Inducción Laboral', creditos: 2, pre: [...n1, ...n2, ...n3, ...n4, ...n5] },
    { nivel: 8, id: 'tal1', nombre: 'Taller 1', creditos: 6, pre: ['sdt', 'bio', 'diae'] },
    { nivel: 8, id: 'elec2', nombre: 'Electivo 2', creditos: 6, pre: ['metmul'] },
    { nivel: 8, id: 'elec3', nombre: 'Electivo 3', creditos: 6, pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'metmul'] },
    { nivel: 8, id: 'concos', nombre: 'Contabilidad y Costos', creditos: 4, pre: ['eco'] },
    { nivel: 9, id: 'tal2', nombre: 'Taller 2', creditos: 6, pre: ['tal1'] },
    { nivel: 9, id: 'elec4', nombre: 'Electivo 4', creditos: 6, pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'metmul'] },
    { nivel: 9, id: 'sem1', nombre: 'Seminario de Tesis 1', creditos: 6, pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8] },
    { nivel: 9, id: 'evaproy', nombre: 'Evaluación de Proyectos', creditos: 4, pre: ['concos'] },
    { nivel: 10, id: 'sem2', nombre: 'Seminario de Tesis 2', creditos: 12, pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8, ...n9] },
    { nivel: 10, id: 'comint', nombre: 'Comunicación Integral y Liderazgo', creditos: 2, pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8, ...n9] }
];

let historial = {}; 
const memoriaGuardada = localStorage.getItem('mallaUSACHHistorial');
if (memoriaGuardada) {
    historial = JSON.parse(memoriaGuardada);
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
            
            divRamo.innerHTML = `
                <span>${ramo.nombre}</span>
                <span class="nota-ramo" id="nota-${ramo.id}"></span>
            `;
            
            divRamo.addEventListener('click', () => toggleRamo(ramo.id));
            columna.appendChild(divRamo);
        });
        contenedor.appendChild(columna);
    }
}

function cumpleRequisitos(idRamo) {
    const ramo = ramosMalla.find(r => r.id === idRamo);
    if (!ramo) return false;
    return ramo.pre.every(preReq => {
        const notas = historial[preReq];
        return notas && Math.max(...notas) >= 4.0;
    });
}

function toggleRamo(idRamo) {
    const ramoInfo = ramosMalla.find(r => r.id === idRamo);
    
    if (!historial[idRamo]) historial[idRamo] = [];
    
    const notas = historial[idRamo];
    const estaAprobado = notas.length > 0 && Math.max(...notas) >= 4.0;

    if (estaAprobado) {
        let resp = confirm(`Ya tienes aprobado ${ramoInfo.nombre}.\n¿Quieres borrar TODO el registro de notas de este ramo para reiniciar?`);
        if (resp) {
            delete historial[idRamo];
        } else {
            return;
        }
    } else {
        if (cumpleRequisitos(idRamo)) {
            let mensaje = notas.length > 0 
                ? `Reprobaste ${ramoInfo.nombre} con nota(s): ${notas.join(' y ')}.\nIngresa tu NUEVA nota:`
                : `Ingresa tu nota final para ${ramoInfo.nombre} (ej: 6.5 o 3.2):`;
                
            let notaIngresada = prompt(mensaje);
            
            if (notaIngresada !== null && notaIngresada.trim() !== "") {
                let numeroNota = parseFloat(notaIngresada.replace(',', '.'));
                
                if (!isNaN(numeroNota) && numeroNota >= 1.0 && numeroNota <= 7.0) {
                    historial[idRamo].push(parseFloat(numeroNota.toFixed(1)));
                } else {
                    alert("Por favor ingresa una nota válida entre 1.0 y 7.0");
                    return;
                }
            } else {
                if (notas.length === 0) delete historial[idRamo];
                return;
            }
        } else {
            return; 
        }
    }
    
    let huboCambios = true;
    while (huboCambios) {
        huboCambios = false;
        for (let id in historial) {
            if (!cumpleRequisitos(id)) {
                delete historial[id];
                huboCambios = true;
            }
        }
    }

    actualizarEstados();
    guardarEnMemoria();
}

function actualizarEstados() {
    ramosMalla.forEach(ramo => {
        const elemento = document.getElementById(ramo.id);
        const elementoNota = document.getElementById(`nota-${ramo.id}`);
        
        const notas = historial[ramo.id] || [];
        
        if (notas.length > 0) {
            const maxNota = Math.max(...notas);
            if (maxNota >= 4.0) {
                elemento.className = 'ramo aprobado';
            } else {
                elemento.className = 'ramo reprobado';
            }
            
            const notasConColor = notas.map(nota => {
                const colorTexto = nota < 4.0 ? '#cc0000' : '#000000'; 
                return `<span style="color: ${colorTexto};">${nota.toFixed(1)}</span>`;
            });
            
            elementoNota.innerHTML = `Notas: ${notasConColor.join(' | ')}`;
            elementoNota.style.display = 'block';
        } else if (cumpleRequisitos(ramo.id)) {
            elemento.className = 'ramo disponible';
            elementoNota.style.display = 'none';
        } else {
            elemento.className = 'ramo bloqueado';
            elementoNota.style.display = 'none';
        }
    });
    
    actualizarCalculos();
}

function actualizarCalculos() {
    let sumaPPA = 0, creditosPPA = 0;
    let sumaAprob = 0, creditosAprob = 0;

    for (const [idRamo, notas] of Object.entries(historial)) {
        const ramo = ramosMalla.find(r => r.id === idRamo);
        if (ramo && ramo.creditos) {
            notas.forEach(nota => {
                sumaPPA += nota * ramo.creditos;
                creditosPPA += ramo.creditos;
                
                if (nota >= 4.0) {
                    sumaAprob += nota * ramo.creditos;
                    creditosAprob += ramo.creditos;
                }
            });
        }
    }

    let ppaContainer = document.getElementById('ppa-container');
    if (!ppaContainer) {
        ppaContainer = document.createElement('div');
        ppaContainer.id = 'ppa-container';
        document.querySelector('.leyenda').insertAdjacentElement('afterend', ppaContainer);
    }

    const valPPA = creditosPPA > 0 ? (sumaPPA / creditosPPA).toFixed(2) : "--";
    const valAprob = creditosAprob > 0 ? (sumaAprob / creditosAprob).toFixed(2) : "--";

    ppaContainer.innerHTML = `
        <div class="stat-box">
            PPA
            <span>${valPPA}</span>
        </div>
        <div class="stat-box">
            Promedio Aprobación
            <span>${valAprob}</span>
        </div>
    `;
}

function guardarEnMemoria() {
    localStorage.setItem('mallaUSACHHistorial', JSON.stringify(historial));
}

document.addEventListener('DOMContentLoaded', init);
