// 1. Arreglo base de palabras e imágenes (mínimo 20-25 para dar buena variedad)
const misPalabras = [
    { nombre: "Jira", imagen: "Jira.png" },
    { nombre: "Holding", imagen: "Holding.png" },
    { nombre: "Documentación", imagen: "Documentacion.png" },
    { nombre: "Plataforma", imagen: "Plataforma.png" },
    { nombre: "Bug", imagen: "Bug.png" },
    { nombre: "ChatBot", imagen: "ChatBot.png" },
    { nombre: "Blue", imagen: "Blue.png" },
    { nombre: "ProductOwner", imagen: "ProductOwner.png" },
    { nombre: "ScrumMaster", imagen: "ScrumMaster.png" },
    { nombre: "Andromeda", imagen: "Andromeda.png" },
    { nombre: "Review", imagen: "Review.png" },
    { nombre: "Daily", imagen: "Daily.png" },
    { nombre: "Deuda Técnica", imagen: "Deuda_Tecnica.png" },
    { nombre: "Desarrollador", imagen: "Desarrollador.png" },
    { nombre: "Derivaciones", imagen: "Derivaciones.png" },
    { nombre: "TyC", imagen: "TyC.png" },
    { nombre: "Instalación", imagen: "Instalacion.png" },
    { nombre: "Despliegue", imagen: "Despliegue.png" },
    { nombre: "Producción", imagen: "Produccion.png" },
    { nombre: "Program Manager", imagen: "Program_Manager.png" },
    { nombre: "Devs Nativos", imagen: "Devs_Nativos.png" },
    { nombre: "App Owner", imagen: "App_Owner.png" },
    { nombre: "Release Manager", imagen: "Release_Manager.png" },
    { nombre: "Avatar", imagen: "Avatar.png" },
    { nombre: "Productos", imagen: "Productos.png" }
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

// 3. Función para generar N cantidad de tableros únicos de 3x3
function generarTablerosUnicos(baraja, cantidadTableros = 10) {
    const tablerosFinales = [];
    const combinacionesRegistradas = new Set();

    while (tablerosFinales.length < cantidadTableros) {
        const barajaMezclada = mezclarBaraja(baraja);
        const seleccion9 = barajaMezclada.slice(0, 9);

        // Identificador único ordenado para evitar los mismos tableros en diferente orden
        const idUnico = seleccion9.map(({ nombre }) => nombre).sort().join("|");

        if (!combinacionesRegistradas.has(idUnico)) {
            combinacionesRegistradas.add(idUnico);
            tablerosFinales.push(seleccion9);
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
        gridDiv.className = "grid-3x3";

        tablero.forEach(({ nombre, imagen }) => {
            const celda = document.createElement("div");
            celda.className = "celda";

            const img = document.createElement("img");
            img.src = `src/img/${imagen}`;
            img.alt = nombre;

            const etiqueta = document.createElement("span");
            etiqueta.innerText = nombre;

            celda.appendChild(img);
            celda.appendChild(etiqueta);
            gridDiv.appendChild(celda);
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
