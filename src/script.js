// 1. Arreglo base de palabras e imágenes (mínimo 20-25 para dar buena variedad)
const misPalabras = [
    { nombre: "El Jira", imagen: "jira.png" },
    { nombre: "Holding", imagen: "holding.png" },
    { nombre: "La Documentación", imagen: "documentación.png" },
    { nombre: "La Plataforma", imagen: "plataforma.png" },
    { nombre: "El Bug", imagen: "bug.png" },
    { nombre: "El ChatBot", imagen: null },
    { nombre: "Blue", imagen: null },
    { nombre: "El ProductOwner", imagen: "productowner.png" },
    { nombre: "El ScrumMaster", imagen: "scrum_master.webp" },
    { nombre: "El Andromeda", imagen: "andromeda.png" },
    { nombre: "La Review", imagen: "review.png" },
    { nombre: "La Daily", imagen: "daily.png" },
    { nombre: "La Deuda Técnica", imagen: "dt.png" },
    { nombre: "El Desarrollador", imagen: "desarrollador.png" },
    { nombre: "Las Derivaciones", imagen: "derivaciones.png" },
    { nombre: "Los TyC", imagen: "tyc.png" },
    { nombre: "La Instalación", imagen: "instalacion.png" },
    { nombre: "El Despliegue", imagen: "despliegue.png" },
    { nombre: "Producción", imagen: "produccion.png" },
    { nombre: "La Program Manager", imagen: "program_manager.webp" },
    { nombre: "El App Owner", imagen: "appowner.png" },
    { nombre: "El Release Manager", imagen: "releasemanager.png" },
    { nombre: "El Avatar", imagen: null },
    { nombre: "El What if", imagen: "whatif.png" },
    { nombre: "La PR", imagen: "pr.png" },
    { nombre: "El Rapid prototyping", imagen: "rappidprototyping.png" },
    { nombre: "Conversa", imagen: "conversa.png" },
    { nombre: "OpenAI", imagen: "openai.png" },
    { nombre: "El modelo", imagen: "modelo.png" },
    { nombre: "El figma", imagen: "figma.png" },
    { nombre: "El becario ", imagen: "becario.png" },
    { nombre: "El Team UX ", imagen: "teamUX.png" },
    { nombre: "La Usabilidad ", imagen: "usabilidad.png" },
    { nombre: "El Funcional ", imagen: "funcional.png" },
    { nombre: "La Personalidad ", imagen: "personalidad.png" },
    { nombre: "Blue Voz ", imagen: null },
    { nombre: "El Product Designer ", imagen: "productDesigner.png" },
    { nombre: "El Monolito ", imagen: "monolito.png" },
    { nombre: "El Warrom ", imagen: "warrom.png" },
    { nombre: "Las Entradillas ", imagen: null },
];
console.log(misPalabras.length);

// 2. Algoritmo Fisher-Yates para mezclar un arreglo
function mezclarBaraja(arreglo) {
    let copia = [...arreglo];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]]; // Intercambio
    }
    return copia;
}

// 3. Función para generar N cantidad de tableros únicos de 4x4
function generarTablerosUnicos(baraja, cantidadTableros = 10) {
    const tablerosFinales = [];
    const combinacionesRegistradas = new Set();

    while (tablerosFinales.length < cantidadTableros) {
        const barajaMezclada = mezclarBaraja(baraja);
        const seleccion16 = barajaMezclada.slice(0, 16);

        // Identificador único ordenado para evitar los mismos tableros en diferente orden
        const idUnico = seleccion16.map(({ nombre }) => nombre).sort().join("|");

        if (!combinacionesRegistradas.has(idUnico)) {
            combinacionesRegistradas.add(idUnico);
            tablerosFinales.push(seleccion16);
        }
    }
    return tablerosFinales;
}

// 4. Función para renderizar e inyectar el HTML de las tablas
function renderizarTableros(tableros) {
    const contenedor = document.getElementById("contenedor-tableros");
    contenedor.innerHTML = ""; // Limpiar tableros anteriores

    tableros.forEach((tablero, index) => {
        const tablaDiv = document.createElement("div");
        tablaDiv.className = "loteria-tabla";
        
        const titulo = document.createElement("h3");
        titulo.innerText = `Tabla #${index + 1}`;
        tablaDiv.appendChild(titulo);

        const gridDiv = document.createElement("div");
        gridDiv.className = "grid-4x4";

        tablero.forEach(({ nombre, imagen }) => {
            const img = document.createElement("img");
            img.alt = nombre;
            if (imagen) {
                img.src = `src/img/${imagen}`;
            }
            gridDiv.appendChild(img);
        });

        tablaDiv.appendChild(gridDiv);
        contenedor.appendChild(tablaDiv);
    });
}

// 5. Listener para el botón
document.getElementById("btn-generar").addEventListener("click", () => {
    const tablerosDeJuego = generarTablerosUnicos(misPalabras, 10);
    renderizarTableros(tablerosDeJuego);
});
