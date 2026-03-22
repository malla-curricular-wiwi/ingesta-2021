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
    { nivel: 1, id: 'alg1', nombre: 'Álgebra 1', creditos: 7, pre: [] },
    { nivel: 1, id: 'cal1', nombre: 'Cálculo 1', creditos: 8, pre: [] },
    { nivel: 1, id: 'ipe1', nombre: 'Introducción a la Prob. y Est. 1', creditos: 6, pre: [] },
    { nivel: 1, id: 'tdh', nombre: 'Taller de desarrollo de habilidades', creditos: 2, pre: [] },
    { nivel: 2, id: 'ing1', nombre: 'Inglés 1', creditos: 3, pre: ['tdh'] },
    { nivel: 2, id: 'alg2', nombre: 'Álgebra 2', creditos: 7, pre: ['alg1'] },
    { nivel: 2, id: 'cal2', nombre: 'Cálculo 2', creditos: 7, pre: ['cal1'] },
    { nivel: 2, id: 'ipe2', nombre: 'Introducción a la prob. y est. 2', creditos: 6, pre: ['ipe1'] },
    { nivel: 2, id: 'comp1', nombre: 'Computación 1', creditos: 5, pre: ['alg1'] },
    { nivel: 2, id: 'teoe', nombre: 'Técnicas de la expr. oral y escritas', creditos: 2, pre: ['tdh'] },
    { nivel: 3, id: 'ing2', nombre: 'Inglés 2', creditos: 3, pre: ['ing1'] },
    { nivel: 3, id: 'alglin', nombre: 'Álgebra lineal', creditos: 7, pre: ['alg2'] },
    { nivel: 3, id: 'cal3', nombre: 'Cálculo 3', creditos: 7, pre: ['cal2'] },
    { nivel: 3, id: 'calprob', nombre: 'Cálculo de probabilidades', creditos: 6, pre: ['ipe2', 'cal2'] },
    { nivel: 3, id: 'comp2', nombre: 'Computación 2', creditos: 5, pre: ['comp1'] },
    { nivel: 3, id: 'uso', nombre: 'Uso de software estadístico', creditos: 2, pre: ['ipe2'] },
    { nivel: 4, id: 'ing3', nombre: 'Inglés 3', creditos: 3, pre: ['ing2'] },
    { nivel: 4, id: 'compcal', nombre: 'Complementos de cálculo', creditos: 7, pre: ['cal3', 'alglin'] },
    { nivel: 4, id: 'infest', nombre: 'Inferencia estadística', creditos: 6, pre: ['calprob'] },
    { nivel: 4, id: 'comp3', nombre: 'Computación 3', creditos: 5, pre: ['comp2'] },
    { nivel: 4, id: 'fis', nombre: 'Física general', creditos: 4, pre: ['cal3', 'alglin'] },
    { nivel: 4, id: 'ici', nombre: 'Introducción a las cs. de la ingeniería', creditos: 5, pre: ['alglin'] },
    { nivel: 5, id: 'ing4', nombre: 'Inglés 4', creditos: 3, pre: ['ing3'] },
    { nivel: 5, id: 'teoprob', nombre: 'Teoría de la probabilidad', creditos: 7, pre: ['calprob', 'compcal'] },
    { nivel: 5, id: 'mues', nombre: 'Muestreo', creditos: 6, pre: ['infest'] },
    { nivel: 5, id: 'modlin', nombre: 'Modelos lineales', creditos: 6, pre: ['alglin', 'infest'] },
    { nivel: 5, id: 'enp', nombre: 'Estadística no paramétrica', creditos: 6, pre: ['infest'] },
    { nivel: 6, id: 'procest', nombre: 'Procesos estocásticos', creditos: 6, pre: ['teoprob'] },
    { nivel: 6, id: 'dae', nombre: 'Diseño y análisis de encuestas', creditos: 6, pre: ['enp', 'mues'] },
    { nivel: 6, id: 'metmul', nombre: 'Métodos multivariantes', creditos: 6, pre: ['modlin'] },
    { nivel: 6, id: 'simest', nombre: 'Simulación estadística', creditos: 6, pre: ['infest', 'comp3', 'teoprob'] },
    { nivel: 6, id: 'etica', nombre: 'Ética estadística', creditos: 2, pre: [...n1, ...n2, ...n3, ...n4, 'enp'] },
    { nivel: 7, id: 'sdt', nombre: 'Series de tiempo', creditos: 6, pre: ['procest'] },
    { nivel: 7, id: 'diae', nombre: 'Diseño y análisis de experimentos', creditos: 6, pre: ['modlin', 'dae'] },
    { nivel: 7, id: 'elec1', nombre: 'Electivo 1', creditos: 6, pre: ['metmul'] },
    { nivel: 7, id: 'bio', nombre: 'Bioestadística', creditos: 6, pre: ['metmul'] },
    { nivel: 7, id: 'eco', nombre: 'Economía', creditos: 4, pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'etica'] },
    { nivel: 8, id: 'indlab', nombre: 'Inducción laboral', creditos: 2, pre: [...n1, ...n2, ...n3, ...n4, ...n5] },
    { nivel: 8, id: 'tal1', nombre: 'Taller 1', creditos: 6, pre: ['sdt', 'bio', 'diae'] },
    { nivel: 8, id: 'elec2', nombre: 'Electivo 2', creditos: 6, pre: ['metmul'] },
    { nivel: 8, id: 'elec3', nombre: 'Electivo 3', creditos: 6, pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'metmul'] },
    { nivel: 8, id: 'concos', nombre: 'Contabilidad y costos', creditos: 4, pre: ['eco'] },
    { nivel: 9, id: 'tal2', nombre: 'Taller 2', creditos: 6, pre: ['tal1'] },
    { nivel: 9, id: 'elec4', nombre: 'Electivo 4', creditos: 6, pre: [...n1, ...n2, ...n3, ...n4, ...n5, 'metmul'] },
    { nivel: 9, id: 'sem1', nombre: 'Seminario de tesis 1', creditos: 6, pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8] },
    { nivel: 9, id: 'evaproy', nombre: 'Evaluación de proyectos', creditos: 4, pre: ['concos'] },
    { nivel: 10, id: 'sem2', nombre: 'Seminario de tesis 2', creditos: 12, pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8, ...n9] },
    { nivel: 10, id: 'comint', nombre: 'Comunicación integral y liderazgo', creditos: 2, pre: [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7, ...n8, ...n9] }
];

let aprobados = {}; 
const memoriaGuardada = localStorage.getItem('mallaUSACHPPA');
if (memoriaGuardada) {
    aprobados = JSON.parse(memoriaGuardada);
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
    return ramo.pre.every(preReq => aprobados.hasOwnProperty(preReq));
}

function toggleRamo(idRamo) {
    const ramoInfo = ramosMalla.find(r => r.id === idRamo);
    
    if (aprobados.hasOwnProperty(idRamo)) {
        delete aprobados[idRamo];
    } else {
        if (cumpleRequisitos(idRamo)) {
            let notaIngresada = prompt(`Ingresa tu nota final para ${ramoInfo.nombre} (ej: 6.5 o 6,5):`);
            
            if (notaIngresada !== null) {
                // Reemplazamos coma por punto por si acaso
                let numeroNota = parseFloat(notaIngresada.replace(',', '.'));
                
                if (!isNaN(numeroNota) && numeroNota >= 1.0 && numeroNota <= 7.0) {
                    aprobados[idRamo] = numeroNota.toFixed(1);
                } else {
                    alert("Por favor ingresa una nota válida entre 1.0 y 7.0");
                    return;
                }
            } else {
                return;
            }
        }
    }
    
    let huboCambios = true;
    while (huboCambios) {
        huboCambios = false;
        for (let id in aprobados) {
            if (!cumpleRequisitos(id)) {
                delete aprobados[id];
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
        
        if (aprobados.hasOwnProperty(ramo.id)) {
            elemento.className = 'ramo aprobado';
            elementoNota.textContent = `Nota: ${aprobados[ramo.id]}`;
            elementoNota.style.display = 'block';
        } else if (cumpleRequisitos(ramo.id)) {
            elemento.className = 'ramo disponible';
            elementoNota.style.display = 'none';
        } else {
            elemento.className = 'ramo bloqueado';
            elementoNota.style.display = 'none';
        }
    });
    
    actualizarPPA();
}

function actualizarPPA() {
    let sumaPonderada = 0;
    let totalCreditos = 0;

    for (const [idRamo, nota] of Object.entries(aprobados)) {
        const ramo = ramosMalla.find(r => r.id === idRamo);
        if (ramo && ramo.creditos) {
            sumaPonderada += parseFloat(nota) * ramo.creditos;
            totalCreditos += ramo.creditos;
        }
    }

    let ppaContainer = document.getElementById('ppa-container');
    if (!ppaContainer) {
        ppaContainer = document.createElement('div');
        ppaContainer.id = 'ppa-container';
        // Lo insertamos justo después de la leyenda
        document.querySelector('.leyenda').insertAdjacentElement('afterend', ppaContainer);
    }

    if (totalCreditos > 0) {
        const ppa = (sumaPonderada / totalCreditos).toFixed(2);
        ppaContainer.innerHTML = `PPA: <span>${ppa}</span><br><small style="font-size:0.8rem; font-weight:normal;">SCT Aprobados: ${totalCreditos}</small>`;
    } else {
        ppaContainer.innerHTML = `PPA: <span>--</span><br><small style="font-size:0.8rem; font-weight:normal;">SCT Aprobados: 0</small>`;
    }
}

function guardarEnMemoria() {
    localStorage.setItem('mallaUSACHPPA', JSON.stringify(aprobados));
}

document.addEventListener('DOMContentLoaded', init);
