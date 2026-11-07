// 1. Arreglo base de palabras e imágenes (mínimo 20-25 para dar buena variedad)
const misPalabras = [
    { nombre: "El Jira", imagen: "jira.png" },
    { nombre: "Holding", imagen: "holding.png" },
    { nombre: "La Documentación", imagen: "documentación.png" },
    { nombre: "La Plataforma", imagen: "plataforma.png" },
    { nombre: "El Bug", imagen: "bug.png" },
    { nombre: "El ChatBot", imagen: "chatbot.png" },
    { nombre: "Blue", imagen: "blue.png" },
    { nombre: "El ProductOwner", imagen: "productowner.png" },
    { nombre: "El ScrumMaster", imagen: "scrum_master.png" },
    { nombre: "El Andromeda", imagen: "andromeda.png" },
    { nombre: "La Review", imagen: "review.png" },
    { nombre: "La Daily", imagen: "daily.png" },
    { nombre: "La Deuda Técnica", imagen: "dt.png" },
    { nombre: "El Desarrollador", imagen: "Desarrollador.png" },
    { nombre: "Las Derivaciones", imagen: "derivaciones.png" },
    { nombre: "Los TyC", imagen: "tyc.png" },
    { nombre: "La Instalación", imagen: "instalacion.png" },
    { nombre: "El Despliegue", imagen: "despliegue.png" },
    { nombre: "Producción", imagen: "produccion.png" },
    { nombre: "La Program Manager", imagen: "program_manager.png" },
    { nombre: "El App Owner", imagen: "appowner.png" },
    { nombre: "El Release Manager", imagen: "releasemanager.png" },
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
    { nombre: "Blue Voz ", imagen: "blue_voz.png" },
    { nombre: "El Avatar ", imagen: "avatar.png" },
    { nombre: "El Product Designer ", imagen: "productDesigner.png" },
    { nombre: "El Monolito ", imagen: "monolito.png" },
    { nombre: "El Warrom ", imagen: "warrom.png" },
    { nombre: "Las Entradillas ", imagen: "entradillas.png" }
];

const tablerosGenerados = [
    [
        {
            "nombre": "El Product Designer ",
            "imagen": "productDesigner.png"
        },
        {
            "nombre": "El Rapid prototyping",
            "imagen": "rappidprototyping.png"
        },
        {
            "nombre": "El Andromeda",
            "imagen": "andromeda.png"
        },
        {
            "nombre": "La Plataforma",
            "imagen": "plataforma.png"
        },
        {
            "nombre": "Las Entradillas ",
            "imagen": "entradillas.png"
        },
        {
            "nombre": "Producción",
            "imagen": "produccion.png"
        },
        {
            "nombre": "El Monolito ",
            "imagen": "monolito.png"
        },
        {
            "nombre": "El What if",
            "imagen": "whatif.png"
        },
        {
            "nombre": "Los TyC",
            "imagen": "tyc.png"
        },
        {
            "nombre": "Blue",
            "imagen": "blue.png"
        },
        {
            "nombre": "El modelo",
            "imagen": "modelo.png"
        },
        {
            "nombre": "La Instalación",
            "imagen": "instalacion.png"
        },
        {
            "nombre": "El Bug",
            "imagen": "bug.png"
        },
        {
            "nombre": "La Deuda Técnica",
            "imagen": "dt.png"
        },
        {
            "nombre": "El App Owner",
            "imagen": "appowner.png"
        },
        {
            "nombre": "El Team UX ",
            "imagen": "teamUX.png"
        }
    ],
    [
        {
            "nombre": "El ProductOwner",
            "imagen": "productowner.png"
        },
        {
            "nombre": "El Rapid prototyping",
            "imagen": "rappidprototyping.png"
        },
        {
            "nombre": "El What if",
            "imagen": "whatif.png"
        },
        {
            "nombre": "El modelo",
            "imagen": "modelo.png"
        },
        {
            "nombre": "El becario ",
            "imagen": "becario.png"
        },
        {
            "nombre": "Los TyC",
            "imagen": "tyc.png"
        },
        {
            "nombre": "El Jira",
            "imagen": "jira.png"
        },
        {
            "nombre": "El ChatBot",
            "imagen": "chatbot.png"
        },
        {
            "nombre": "Holding",
            "imagen": "holding.png"
        },
        {
            "nombre": "La Documentación",
            "imagen": "documentación.png"
        },
        {
            "nombre": "El Funcional ",
            "imagen": "funcional.png"
        },
        {
            "nombre": "El Monolito ",
            "imagen": "monolito.png"
        },
        {
            "nombre": "La Review",
            "imagen": "review.png"
        },
        {
            "nombre": "El Warrom ",
            "imagen": "warrom.png"
        },
        {
            "nombre": "Blue",
            "imagen": "blue.png"
        },
        {
            "nombre": "Producción",
            "imagen": "produccion.png"
        }
    ],
    [
        {
            "nombre": "El Release Manager",
            "imagen": "releasemanager.png"
        },
        {
            "nombre": "La Review",
            "imagen": "review.png"
        },
        {
            "nombre": "El Team UX ",
            "imagen": "teamUX.png"
        },
        {
            "nombre": "El App Owner",
            "imagen": "appowner.png"
        },
        {
            "nombre": "El ProductOwner",
            "imagen": "productowner.png"
        },
        {
            "nombre": "El Bug",
            "imagen": "bug.png"
        },
        {
            "nombre": "Las Entradillas ",
            "imagen": "entradillas.png"
        },
        {
            "nombre": "La Deuda Técnica",
            "imagen": "dt.png"
        },
        {
            "nombre": "El Monolito ",
            "imagen": "monolito.png"
        },
        {
            "nombre": "La Daily",
            "imagen": "daily.png"
        },
        {
            "nombre": "Conversa",
            "imagen": "conversa.png"
        },
        {
            "nombre": "Holding",
            "imagen": "holding.png"
        },
        {
            "nombre": "El figma",
            "imagen": "figma.png"
        },
        {
            "nombre": "El Despliegue",
            "imagen": "despliegue.png"
        },
        {
            "nombre": "El Product Designer ",
            "imagen": "productDesigner.png"
        },
        {
            "nombre": "El Jira",
            "imagen": "jira.png"
        }
    ],
    [
        {
            "nombre": "El Avatar ",
            "imagen": "avatar.png"
        },
        {
            "nombre": "La Program Manager",
            "imagen": "program_manager.png"
        },
        {
            "nombre": "El What if",
            "imagen": "whatif.png"
        },
        {
            "nombre": "La PR",
            "imagen": "pr.png"
        },
        {
            "nombre": "El Funcional ",
            "imagen": "funcional.png"
        },
        {
            "nombre": "OpenAI",
            "imagen": "openai.png"
        },
        {
            "nombre": "El Warrom ",
            "imagen": "warrom.png"
        },
        {
            "nombre": "El modelo",
            "imagen": "modelo.png"
        },
        {
            "nombre": "El Monolito ",
            "imagen": "monolito.png"
        },
        {
            "nombre": "Blue",
            "imagen": "blue.png"
        },
        {
            "nombre": "Conversa",
            "imagen": "conversa.png"
        },
        {
            "nombre": "El Team UX ",
            "imagen": "teamUX.png"
        },
        {
            "nombre": "El figma",
            "imagen": "figma.png"
        },
        {
            "nombre": "El Product Designer ",
            "imagen": "productDesigner.png"
        },
        {
            "nombre": "El Despliegue",
            "imagen": "despliegue.png"
        },
        {
            "nombre": "Holding",
            "imagen": "holding.png"
        }
    ],
    [
        {
            "nombre": "El Funcional ",
            "imagen": "funcional.png"
        },
        {
            "nombre": "Blue",
            "imagen": "blue.png"
        },
        {
            "nombre": "La Deuda Técnica",
            "imagen": "dt.png"
        },
        {
            "nombre": "El modelo",
            "imagen": "modelo.png"
        },
        {
            "nombre": "La Plataforma",
            "imagen": "plataforma.png"
        },
        {
            "nombre": "Conversa",
            "imagen": "conversa.png"
        },
        {
            "nombre": "El Monolito ",
            "imagen": "monolito.png"
        },
        {
            "nombre": "OpenAI",
            "imagen": "openai.png"
        },
        {
            "nombre": "El figma",
            "imagen": "figma.png"
        },
        {
            "nombre": "Blue Voz ",
            "imagen": "blue_voz.png"
        },
        {
            "nombre": "La Daily",
            "imagen": "daily.png"
        },
        {
            "nombre": "La Instalación",
            "imagen": "instalacion.png"
        },
        {
            "nombre": "El Release Manager",
            "imagen": "releasemanager.png"
        },
        {
            "nombre": "El becario ",
            "imagen": "becario.png"
        },
        {
            "nombre": "El ScrumMaster",
            "imagen": "scrum_master.png"
        },
        {
            "nombre": "El What if",
            "imagen": "whatif.png"
        }
    ],
    [
        {
            "nombre": "La Documentación",
            "imagen": "documentación.png"
        },
        {
            "nombre": "La Usabilidad ",
            "imagen": "usabilidad.png"
        },
        {
            "nombre": "La PR",
            "imagen": "pr.png"
        },
        {
            "nombre": "El ScrumMaster",
            "imagen": "scrum_master.png"
        },
        {
            "nombre": "La Program Manager",
            "imagen": "program_manager.png"
        },
        {
            "nombre": "El ChatBot",
            "imagen": "chatbot.png"
        },
        {
            "nombre": "El Funcional ",
            "imagen": "funcional.png"
        },
        {
            "nombre": "El App Owner",
            "imagen": "appowner.png"
        },
        {
            "nombre": "El What if",
            "imagen": "whatif.png"
        },
        {
            "nombre": "El modelo",
            "imagen": "modelo.png"
        },
        {
            "nombre": "Las Entradillas ",
            "imagen": "entradillas.png"
        },
        {
            "nombre": "Producción",
            "imagen": "produccion.png"
        },
        {
            "nombre": "La Instalación",
            "imagen": "instalacion.png"
        },
        {
            "nombre": "El ProductOwner",
            "imagen": "productowner.png"
        },
        {
            "nombre": "El Desarrollador",
            "imagen": "Desarrollador.png"
        },
        {
            "nombre": "El Bug",
            "imagen": "bug.png"
        }
    ],
    [
        {
            "nombre": "La Instalación",
            "imagen": "instalacion.png"
        },
        {
            "nombre": "El figma",
            "imagen": "figma.png"
        },
        {
            "nombre": "La PR",
            "imagen": "pr.png"
        },
        {
            "nombre": "La Daily",
            "imagen": "daily.png"
        },
        {
            "nombre": "El Product Designer ",
            "imagen": "productDesigner.png"
        },
        {
            "nombre": "El Avatar ",
            "imagen": "avatar.png"
        },
        {
            "nombre": "El What if",
            "imagen": "whatif.png"
        },
        {
            "nombre": "El Release Manager",
            "imagen": "releasemanager.png"
        },
        {
            "nombre": "El Team UX ",
            "imagen": "teamUX.png"
        },
        {
            "nombre": "Producción",
            "imagen": "produccion.png"
        },
        {
            "nombre": "Blue",
            "imagen": "blue.png"
        },
        {
            "nombre": "Las Derivaciones",
            "imagen": "derivaciones.png"
        },
        {
            "nombre": "La Usabilidad ",
            "imagen": "usabilidad.png"
        },
        {
            "nombre": "La Deuda Técnica",
            "imagen": "dt.png"
        },
        {
            "nombre": "El Monolito ",
            "imagen": "monolito.png"
        },
        {
            "nombre": "El Warrom ",
            "imagen": "warrom.png"
        }
    ],
    [
        {
            "nombre": "El Funcional ",
            "imagen": "funcional.png"
        },
        {
            "nombre": "El Avatar ",
            "imagen": "avatar.png"
        },
        {
            "nombre": "El Team UX ",
            "imagen": "teamUX.png"
        },
        {
            "nombre": "El Despliegue",
            "imagen": "despliegue.png"
        },
        {
            "nombre": "El Monolito ",
            "imagen": "monolito.png"
        },
        {
            "nombre": "El ScrumMaster",
            "imagen": "scrum_master.png"
        },
        {
            "nombre": "El figma",
            "imagen": "figma.png"
        },
        {
            "nombre": "El becario ",
            "imagen": "becario.png"
        },
        {
            "nombre": "La Program Manager",
            "imagen": "program_manager.png"
        },
        {
            "nombre": "OpenAI",
            "imagen": "openai.png"
        },
        {
            "nombre": "El Bug",
            "imagen": "bug.png"
        },
        {
            "nombre": "La PR",
            "imagen": "pr.png"
        },
        {
            "nombre": "La Usabilidad ",
            "imagen": "usabilidad.png"
        },
        {
            "nombre": "El Desarrollador",
            "imagen": "Desarrollador.png"
        },
        {
            "nombre": "Conversa",
            "imagen": "conversa.png"
        },
        {
            "nombre": "La Documentación",
            "imagen": "documentación.png"
        }
    ],
    [
        {
            "nombre": "El Jira",
            "imagen": "jira.png"
        },
        {
            "nombre": "El becario ",
            "imagen": "becario.png"
        },
        {
            "nombre": "Holding",
            "imagen": "holding.png"
        },
        {
            "nombre": "El Avatar ",
            "imagen": "avatar.png"
        },
        {
            "nombre": "El Rapid prototyping",
            "imagen": "rappidprototyping.png"
        },
        {
            "nombre": "El What if",
            "imagen": "whatif.png"
        },
        {
            "nombre": "La Program Manager",
            "imagen": "program_manager.png"
        },
        {
            "nombre": "El ProductOwner",
            "imagen": "productowner.png"
        },
        {
            "nombre": "Los TyC",
            "imagen": "tyc.png"
        },
        {
            "nombre": "El App Owner",
            "imagen": "appowner.png"
        },
        {
            "nombre": "El figma",
            "imagen": "figma.png"
        },
        {
            "nombre": "El Product Designer ",
            "imagen": "productDesigner.png"
        },
        {
            "nombre": "El ChatBot",
            "imagen": "chatbot.png"
        },
        {
            "nombre": "El Despliegue",
            "imagen": "despliegue.png"
        },
        {
            "nombre": "El Warrom ",
            "imagen": "warrom.png"
        },
        {
            "nombre": "El Funcional ",
            "imagen": "funcional.png"
        }
    ],
    [
        {
            "nombre": "El Bug",
            "imagen": "bug.png"
        },
        {
            "nombre": "El figma",
            "imagen": "figma.png"
        },
        {
            "nombre": "Los TyC",
            "imagen": "tyc.png"
        },
        {
            "nombre": "El ScrumMaster",
            "imagen": "scrum_master.png"
        },
        {
            "nombre": "OpenAI",
            "imagen": "openai.png"
        },
        {
            "nombre": "Las Derivaciones",
            "imagen": "derivaciones.png"
        },
        {
            "nombre": "El Avatar ",
            "imagen": "avatar.png"
        },
        {
            "nombre": "La PR",
            "imagen": "pr.png"
        },
        {
            "nombre": "La Plataforma",
            "imagen": "plataforma.png"
        },
        {
            "nombre": "Blue",
            "imagen": "blue.png"
        },
        {
            "nombre": "El Release Manager",
            "imagen": "releasemanager.png"
        },
        {
            "nombre": "El Desarrollador",
            "imagen": "Desarrollador.png"
        },
        {
            "nombre": "Holding",
            "imagen": "holding.png"
        },
        {
            "nombre": "El Rapid prototyping",
            "imagen": "rappidprototyping.png"
        },
        {
            "nombre": "La Program Manager",
            "imagen": "program_manager.png"
        },
        {
            "nombre": "El Product Designer ",
            "imagen": "productDesigner.png"
        }
    ]
]
/**
 * Simula el juego de la Lotería Mexicana utilizando el algoritmo de Fisher-Yates.
 * @param {Array} cartasTotales - El mazo de cartas que se cantarán.
 * @param {Object} jugadores - Nombres de jugadores asociados a sus tableros.
 * @returns {{cartasCantadas: Array, ganadores: Array, turnos: number}}
 */
function simularLoteria(cartasTotales, jugadores) {
    if (!Array.isArray(cartasTotales) || !jugadores || typeof jugadores !== "object") {
        throw new TypeError("Se necesita un mazo y un objeto de jugadores válido.");
    }

    const mazoBarajado = mezclarBaraja(cartasTotales);
    const progresoJugadores = Object.entries(jugadores).map(([nombre, tablero]) => ({
        nombre,
        cartasRequeridas: new Set(tablero.map(({ nombre: carta }) => carta.trim())),
        aciertos: new Set()
    }));
    const cartasCantadas = [];

    for (const cartaCantada of mazoBarajado) {
        cartasCantadas.push(cartaCantada);
        const claveCarta = cartaCantada.nombre.trim();

        for (const jugador of progresoJugadores) {
            if (jugador.cartasRequeridas.has(claveCarta)) {
                jugador.aciertos.add(claveCarta);
            }

            if (
                jugador.cartasRequeridas.size > 0 &&
                jugador.aciertos.size === jugador.cartasRequeridas.size
            ) {
                return {
                    cartasCantadas,
                    ganadores: [jugador.nombre],
                    turnos: cartasCantadas.length
                };
            }
        }
    }

    return { cartasCantadas, ganadores: [], turnos: cartasCantadas.length };
}

// 2. Algoritmo Fisher-Yates para mezclar un arreglo
function mezclarBaraja(baraja) {
    let copia = [...baraja];
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
            img.alt = nombre.trim();
            img.dataset.carta = nombre.trim();
            if (imagen) {
                img.src = `src/img/${imagen}`;
            }
            gridDiv.appendChild(img);
        });

        tablaDiv.appendChild(gridDiv);

        const botonDescargar = document.createElement("button");
        botonDescargar.className = "btn-descargar-tablero";
        botonDescargar.type = "button";
        botonDescargar.textContent = "Descargar imagen";
        botonDescargar.addEventListener("click", () => descargarTableroComoImagen(tablaDiv, index + 1));
        tablaDiv.appendChild(botonDescargar);

        contenedor.appendChild(tablaDiv);
    });
}

async function crearCanvasTablero(tabla) {
    const imagenes = [...tabla.querySelectorAll(".grid-4x4 img")];
    const fondo = new Image();
    fondo.src = "src/img/background.png";
    await Promise.all([fondo, ...imagenes].map(esperarImagenLista));

    const anchoCelda = 170;
    const altoCelda = 255;
    const espacio = 8;
    const margen = 30;
    const borde = 8;
    const altoTitulo = 72;
    const anchoCuadricula = anchoCelda * 4 + espacio * 3;
    const altoCuadricula = altoCelda * 4 + espacio * 3;
    const canvas = document.createElement("canvas");
    canvas.width = anchoCuadricula + margen * 2 + borde * 2;
    canvas.height = altoCuadricula + margen * 2 + altoTitulo + borde * 2;

    const contexto = canvas.getContext("2d");
    if (!contexto) {
        throw new Error("No fue posible preparar la imagen del tablero.");
    }

    const escalaFondo = Math.max(
        canvas.width / fondo.naturalWidth,
        canvas.height / fondo.naturalHeight
    );
    const anchoFondo = fondo.naturalWidth * escalaFondo;
    const altoFondo = fondo.naturalHeight * escalaFondo;
    contexto.drawImage(
        fondo,
        (canvas.width - anchoFondo) / 2,
        (canvas.height - altoFondo) / 2,
        anchoFondo,
        altoFondo
    );
    const degradadoFondo = contexto.createLinearGradient(0, 0, 0, canvas.height);
    degradadoFondo.addColorStop(0, "rgba(255, 255, 255, 0.38)");
    degradadoFondo.addColorStop(1, "rgba(255, 255, 255, 0.56)");
    contexto.fillStyle = degradadoFondo;
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    contexto.strokeStyle = "#1a1a1a";
    contexto.lineWidth = borde;
    contexto.strokeRect(borde / 2, borde / 2, canvas.width - borde, canvas.height - borde);
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    const titulo = "LOTERÍA BLUE";
    const tituloY = borde + altoTitulo / 2;
    const anchoRotulo = canvas.width - margen * 2;
    const altoRotulo = 56;
    const xRotulo = (canvas.width - anchoRotulo) / 2;
    const yRotulo = tituloY - altoRotulo / 2;

    contexto.fillStyle = "#fff4d6";
    contexto.fillRect(xRotulo, yRotulo, anchoRotulo, altoRotulo);
    contexto.strokeStyle = "#1a1a1a";
    contexto.lineWidth = 3;
    contexto.strokeRect(xRotulo, yRotulo, anchoRotulo, altoRotulo);
    contexto.strokeStyle = "#c0392b";
    contexto.lineWidth = 2;
    contexto.strokeRect(xRotulo + 6, yRotulo + 6, anchoRotulo - 12, altoRotulo - 12);

    contexto.fillStyle = "#c0392b";
    contexto.font = "bold 32px Georgia, serif";
    contexto.shadowColor = "rgba(0, 0, 0, 0.2)";
    contexto.shadowOffsetX = 1;
    contexto.shadowOffsetY = 2;
    contexto.shadowBlur = 1;
    contexto.fillText(titulo, canvas.width / 2, tituloY);
    contexto.shadowColor = "transparent";
    contexto.shadowOffsetX = 0;
    contexto.shadowOffsetY = 0;
    contexto.shadowBlur = 0;

    const inicioX = borde + margen;
    const inicioY = borde + altoTitulo + margen;
    imagenes.forEach((imagen, index) => {
        const columna = index % 4;
        const fila = Math.floor(index / 4);
        const x = inicioX + columna * (anchoCelda + espacio);
        const y = inicioY + fila * (altoCelda + espacio);
        contexto.drawImage(imagen, x, y, anchoCelda, altoCelda);
    });

    return canvas;
}

function esperarImagenLista(imagen) {
    if (imagen.complete) {
        return imagen.naturalWidth > 0
            ? Promise.resolve()
            : Promise.reject(new Error(`No se pudo cargar la imagen ${imagen.src}.`));
    }

    return new Promise((resolve, reject) => {
        imagen.addEventListener("load", resolve, { once: true });
        imagen.addEventListener("error", () => {
            reject(new Error(`No se pudo cargar la imagen ${imagen.src}.`));
        }, { once: true });
    });
}

function obtenerBlobCanvas(canvas) {
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (blob) {
                resolve(blob);
            } else {
                reject(new Error("No fue posible codificar la imagen del tablero."));
            }
        }, "image/png");
    });
}

function descargarArchivo(blob, nombreArchivo) {
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.download = nombreArchivo;
    enlace.href = url;
    enlace.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function descargarTableroComoImagen(tabla, numeroTablero) {
    const boton = tabla.querySelector(".btn-descargar-tablero");
    boton.disabled = true;

    try {
        const canvas = await crearCanvasTablero(tabla);
        descargarArchivo(await obtenerBlobCanvas(canvas), `tablero-${numeroTablero}.png`);
    } catch (error) {
        console.error("No se pudo descargar el tablero como imagen.", error);
        actualizarEstadoSimulacion(`No se pudo descargar la imagen de la tabla #${numeroTablero}.`);
    } finally {
        boton.disabled = false;
    }
}

function calcularCRC32(datos) {
    let crc = 0xffffffff;
    for (const byte of datos) {
        crc ^= byte;
        for (let bit = 0; bit < 8; bit++) {
            crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
        }
    }
    return (crc ^ 0xffffffff) >>> 0;
}

function crearArchivoZip(archivos) {
    const codificador = new TextEncoder();
    const partes = [];
    const registrosCentrales = [];
    const fechaActual = new Date();
    const horaDOS =
        (fechaActual.getHours() << 11) |
        (fechaActual.getMinutes() << 5) |
        Math.floor(fechaActual.getSeconds() / 2);
    const fechaDOS =
        ((Math.max(1980, fechaActual.getFullYear()) - 1980) << 9) |
        ((fechaActual.getMonth() + 1) << 5) |
        fechaActual.getDate();
    let desplazamiento = 0;

    for (const archivo of archivos) {
        const nombre = codificador.encode(archivo.nombre);
        const datos = new Uint8Array(archivo.datos);
        const crc32 = calcularCRC32(datos);
        const encabezadoLocal = new Uint8Array(30 + nombre.length);
        const vistaLocal = new DataView(encabezadoLocal.buffer);
        vistaLocal.setUint32(0, 0x04034b50, true);
        vistaLocal.setUint16(4, 20, true);
        vistaLocal.setUint16(6, 0x0800, true);
        vistaLocal.setUint16(8, 0, true);
        vistaLocal.setUint16(10, horaDOS, true);
        vistaLocal.setUint16(12, fechaDOS, true);
        vistaLocal.setUint32(14, crc32, true);
        vistaLocal.setUint32(18, datos.length, true);
        vistaLocal.setUint32(22, datos.length, true);
        vistaLocal.setUint16(26, nombre.length, true);
        vistaLocal.setUint16(28, 0, true);
        encabezadoLocal.set(nombre, 30);
        partes.push(encabezadoLocal, datos);

        const encabezadoCentral = new Uint8Array(46 + nombre.length);
        const vistaCentral = new DataView(encabezadoCentral.buffer);
        vistaCentral.setUint32(0, 0x02014b50, true);
        vistaCentral.setUint16(4, 20, true);
        vistaCentral.setUint16(6, 20, true);
        vistaCentral.setUint16(8, 0x0800, true);
        vistaCentral.setUint16(10, 0, true);
        vistaCentral.setUint16(12, horaDOS, true);
        vistaCentral.setUint16(14, fechaDOS, true);
        vistaCentral.setUint32(16, crc32, true);
        vistaCentral.setUint32(20, datos.length, true);
        vistaCentral.setUint32(24, datos.length, true);
        vistaCentral.setUint16(28, nombre.length, true);
        vistaCentral.setUint16(30, 0, true);
        vistaCentral.setUint16(32, 0, true);
        vistaCentral.setUint16(34, 0, true);
        vistaCentral.setUint16(36, 0, true);
        vistaCentral.setUint32(38, 0, true);
        vistaCentral.setUint32(42, desplazamiento, true);
        encabezadoCentral.set(nombre, 46);
        registrosCentrales.push(encabezadoCentral);
        desplazamiento += encabezadoLocal.length + datos.length;
    }

    const tamanoDirectorio = registrosCentrales.reduce((total, registro) => total + registro.length, 0);
    const finDirectorio = new Uint8Array(22);
    const vistaFin = new DataView(finDirectorio.buffer);
    vistaFin.setUint32(0, 0x06054b50, true);
    vistaFin.setUint16(4, 0, true);
    vistaFin.setUint16(6, 0, true);
    vistaFin.setUint16(8, archivos.length, true);
    vistaFin.setUint16(10, archivos.length, true);
    vistaFin.setUint32(12, tamanoDirectorio, true);
    vistaFin.setUint32(16, desplazamiento, true);
    vistaFin.setUint16(20, 0, true);

    return new Blob([...partes, ...registrosCentrales, finDirectorio], { type: "application/zip" });
}

async function descargarTodosLosTableros() {
    const botonZip = document.getElementById("btn-descargar-todos");
    const botonGenerar = document.getElementById("btn-generar");
    const botonSimular = document.getElementById("btn-simular");
    const botonesTablero = [...document.querySelectorAll(".btn-descargar-tablero")];
    botonZip.disabled = true;
    if(botonGenerar) {
        botonGenerar.disabled = true;
    }
    botonSimular.disabled = true;
    botonesTablero.forEach((boton) => {
        boton.disabled = true;
    });

    try {
        const tablas = [...document.querySelectorAll(".loteria-tabla")];
        const archivos = [];
        for (const [index, tabla] of tablas.entries()) {
            actualizarEstadoSimulacion(`Preparando tablero ${index + 1} de ${tablas.length}...`);
            const canvas = await crearCanvasTablero(tabla);
            const imagen = await obtenerBlobCanvas(canvas);
            archivos.push({
                nombre: `tablero-${index + 1}.png`,
                datos: await imagen.arrayBuffer()
            });
        }
        descargarArchivo(crearArchivoZip(archivos), "tableros-loteria.zip");
        actualizarEstadoSimulacion(`Se descargaron ${archivos.length} tableros en un archivo ZIP.`);
    } catch (error) {
        console.error("No se pudieron descargar todos los tableros.", error);
        actualizarEstadoSimulacion("No se pudieron descargar los tableros en ZIP.");
    } finally {
    if(botonGenerar) {
        botonGenerar.disabled = false;
    }
        botonSimular.disabled = tablerosDeJuego.length === 0;
        botonZip.disabled = tablerosDeJuego.length === 0;
        botonesTablero.forEach((boton) => {
            boton.disabled = false;
        });
    }
}

document.getElementById("btn-descargar-todos").addEventListener("click", descargarTodosLosTableros);

function actualizarEstadoSimulacion(mensaje) {
    document.getElementById("estado-simulacion").textContent = mensaje;
}

function marcarCartaCantada(carta) {
    const nombreCarta = carta.nombre.trim();
    document.querySelectorAll(".grid-4x4 img").forEach((imagen) => {
        if (imagen.dataset.carta === nombreCarta) {
            imagen.classList.add("carta-cantada");
        }
    });
}

function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function reproducirSimulacion(simulacion) {
    const listaCartas = document.getElementById("lista-cartas");
    const cartaActual = document.getElementById("carta-actual");
    const imagenCartaActual = document.getElementById("imagen-carta-actual");
    const nombreCartaActual = document.getElementById("nombre-carta-actual");
    listaCartas.replaceChildren();
    cartaActual.classList.add("cantando");

    for (const [index, carta] of simulacion.cartasCantadas.entries()) {
        const nombreCarta = carta.nombre.trim();
        imagenCartaActual.src = `src/img/${carta.imagen}`;
        imagenCartaActual.alt = nombreCarta;
        imagenCartaActual.hidden = false;
        nombreCartaActual.textContent = `Carta ${index + 1}: ${nombreCarta}`;
        marcarCartaCantada(carta);

        const elemento = document.createElement("li");
        elemento.textContent = nombreCarta;
        listaCartas.appendChild(elemento);
        listaCartas.scrollTop = listaCartas.scrollHeight;
        await esperar(450);
    }

    if (simulacion.ganadores.length > 0) {
        actualizarEstadoSimulacion(
            `¡Lotería! ${simulacion.ganadores[0]} ganó después de ${simulacion.turnos} turnos.`
        );
    } else {
        actualizarEstadoSimulacion(
            `Se cantaron las ${simulacion.turnos} cartas y no hubo ganador.`
        );
    }
    cartaActual.classList.remove("cantando");
}

const CLAVE_TABLEROS = "loteria.tableros";
let tablerosDeJuego = [];

function cargarTablerosGuardados() {
    try {
        const datosGuardados = localStorage.getItem(CLAVE_TABLEROS);
        if (datosGuardados === null) {
            return tablerosGenerados;
        }

        const tableros = JSON.parse(datosGuardados);
        const sonValidos = Array.isArray(tableros) && tableros.every((tablero) =>
            Array.isArray(tablero) &&
            tablero.length === 16 &&
            tablero.every((carta) =>
                carta &&
                typeof carta.nombre === "string" &&
                typeof carta.imagen === "string"
            )
        );

        if (!sonValidos) {
            throw new Error("Los tableros guardados tienen un formato inválido.");
        }

        return tableros;
    } catch (error) {
        console.error("No se pudieron cargar los tableros guardados.", error);
        actualizarEstadoSimulacion("No se pudieron cargar los tableros guardados.");
        return [];
    }
}

// 5. Listener para generar tableros y ejecutar la partida.
document.getElementById("btn-generar")?.addEventListener("click", () => {
    tablerosDeJuego = generarTablerosUnicos(misPalabras, 10);
    renderizarTableros(tablerosDeJuego);
    document.getElementById("btn-simular").disabled = false;
    document.getElementById("btn-descargar-todos").disabled = false;
    document.querySelectorAll(".grid-4x4 img.carta-cantada").forEach((imagen) => {
        imagen.classList.remove("carta-cantada");
    });
    try {
        localStorage.setItem(CLAVE_TABLEROS, JSON.stringify(tablerosDeJuego));
        actualizarEstadoSimulacion("Tableros generados y guardados. Listo para iniciar la partida.");
    } catch (error) {
        console.error("No se pudieron guardar los tableros generados.", error);
        actualizarEstadoSimulacion("Se generaron los tableros, pero no se pudieron guardar.");
    }
    const imagenCartaActual = document.getElementById("imagen-carta-actual");
    imagenCartaActual.removeAttribute("src");
    imagenCartaActual.alt = "";
    imagenCartaActual.hidden = true;
    document.getElementById("nombre-carta-actual").textContent = "Esperando el primer sorteo";
    document.getElementById("carta-actual").classList.remove("cantando");
    document.getElementById("lista-cartas").replaceChildren();
});

document.getElementById("btn-simular").addEventListener("click", async () => {
    const jugadores = Object.fromEntries(
        tablerosDeJuego.map((tablero, index) => [`Tabla #${index + 1}`, tablero])
    );
    const botonSimular = document.getElementById("btn-simular");
    const botonGenerar = document.getElementById("btn-generar");
    const botonZip = document.getElementById("btn-descargar-todos");
    botonSimular.disabled = true;
    if(botonGenerar) {
        botonGenerar.disabled = true;
    }
    botonZip.disabled = true;
    document.querySelectorAll(".grid-4x4 img.carta-cantada").forEach((imagen) => {
        imagen.classList.remove("carta-cantada");
    });
    document.getElementById("lista-cartas").replaceChildren();
    actualizarEstadoSimulacion("Partida en curso...");

    try {
        await reproducirSimulacion(simularLoteria(misPalabras, jugadores));
    } finally {
        botonSimular.disabled = false;
        if(botonGenerar) {
            botonGenerar.disabled = false;
        }
        botonZip.disabled = false;
    }
});

tablerosDeJuego = cargarTablerosGuardados();
if (tablerosDeJuego.length > 0) {
    renderizarTableros(tablerosDeJuego);
    document.getElementById("btn-simular").disabled = false;
    document.getElementById("btn-descargar-todos").disabled = false;
    actualizarEstadoSimulacion("Tableros guardados cargados. Listo para iniciar la partida.");
}
