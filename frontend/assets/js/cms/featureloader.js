/**
 * featured.js
 * Módulo para gestionar los artículos destacados
 * Este módulo se encarga de crear, guardar, cargar, renderizar y eliminar artículos destacados
 */

/**
 * @typedef {Object} BootstrapToast
 * @property {function} show - Método para mostrar el toast
 * @property {function} hide - Método para ocultar el toast
 *
 * @typedef {Object} ToastOptions
 * @property {number} delay - Tiempo en milisegundos antes de que el toast se oculte automáticamente
 *
 * @typedef {Object} BootstrapModal
 * @property {function} getInstance - Método para obtener la instancia de un modal existente
 * @property {function} hide - Método para ocultar el modal
 *
 * @typedef {Object} Bootstrap
 * @property {BootstrapModal} Modal - Clase Modal de Bootstrap
 * @property {function} Toast - Constructor para crear toasts de Bootstrap
 *
 * @type {Bootstrap} bootstrap - Variable global de Bootstrap
 */
/* global bootstrap */

// Clave para almacenar los artículos destacados en localStorage
const FEATURED_STORAGE_KEY = 'cms_featured_articles';

// Variable para alternar la posición de la imagen (izquierda/derecha)
let isImageRight = false;

/**
 * Crea un elemento de artículo destacado con toda su estructura HTML
 *
 * @param {string} id - ID único del artículo
 * @param {string} title - Título del artículo
 * @param {string} webpage - Área a la que pertenece
 * @param {string} content - Descripción o contenido del artículo
 * @param {string} imageUrl - URL de la imagen del artículo (opcional)
 * @param {boolean} isImageRightPos - Si es true, la imagen se muestra a la derecha, si es false, a la izquierda
 * @returns {HTMLElement} Elemento DOM del artículo creado
 */
function createFeaturedArticle(id, title, content, webpage, imageUrl, isImageRightPos = false) {
    // Crear el elemento contenedor del artículo
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-3';
    cardDiv.id = id;
    cardDiv.style.maxWidth = '100%';

    // Variable para almacenar el HTML que varía según la posición de la imagen
    let cardHTML = '';

    // Estructura HTML diferente dependiendo de si la imagen va a la derecha o izquierda
    if (isImageRightPos) {
        // Imagen a la derecha: primero el contenido, luego la imagen
        cardHTML = `
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                        <p class="card-text"><small class="text-muted">Última actualización hace unos minutos</small></p>
                        <div class="d-flex">
                            <a href="#" class="btn btn-outline-primary me-2">Leer más</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="${imageUrl || '/api/placeholder/300/250'}" class="img-fluid rounded-end" alt="${title}">
                </div>
            </div>
        `;
    } else {
        // Imagen a la izquierda: primero la imagen, luego el contenido
        cardHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${imageUrl || '/api/placeholder/300/250'}" class="img-fluid rounded-start" alt="${title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                        <p class="card-text"><small class="text-muted">Última actualización hace unos minutos</small></p>
                        <div class="d-flex">
                            <a href="#" class="btn btn-outline-primary me-2">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Asignar el HTML generado al elemento
    cardDiv.innerHTML = cardHTML;

    // Agregar event listener al botón de eliminar para manejar la eliminación


    return cardDiv;
}

/**
 * Carga todos los artículos destacados desde localStorage utilizando la función auxiliar de utils.js
 *
 * @returns {Array} Array de objetos de artículos destacados
 */
function loadFeatured() {
    return window.cmsUtils.loadFromStorage(FEATURED_STORAGE_KEY);

}


/**
 * Renderiza todos los artículos destacados en el contenedor correspondiente
 * Esta función limpia el contenedor y añade todos los artículos destacados,
 * alternando la posición de las imágenes (izquierda/derecha)
 */
function renderFeatured() {
    // Obtener el contenedor donde se mostrarán los artículos
    const articlesContainer = document.getElementById('featured-articles-container');
    if (!articlesContainer) return; // Si no existe el contenedor, salir

    articlesContainer.innerHTML = ''; // Limpiar el contenedor

    // Cargar todos los artículos almacenados
    const articles = loadFeatured();

    // Reiniciar la variable de posición de imagen para empezar con imagen a la izquierda
    isImageRight = false;

    // Obtenemos el nombre de la página en la que estamos actualmente (Ej. empleo.html , ocio.html , etc..)
    let fileName = location.pathname.split("/").slice(-1)
    // Debido a que hay un array, con 1 entrada, convertimos el array en una String única, sin cambios.
    fileName = fileName.toString()
    // Para cada artículo, nos preparamos para crear su propio elemento
    articles.forEach(article => {
        // Comprobamos si el artículo tiene especificada la página correcta en sus datos
        if (article.webpage === fileName) {
            // Si lo está, corremos el código de creación de elemento.
        const articleElement = createFeaturedArticle(
            article.id,
            article.title,
            article.webpage,
            article.content,
            article.imageUrl,
            isImageRight
        );
        articlesContainer.prepend(articleElement); // Agregar al principio (los más nuevos arriba)
        isImageRight = !isImageRight; // Alternar la posición de la imagen para el próximo artículo
        } else {
            // Si el artículo no está, mandamos un mensaje a la consola.
            console.log("nada :3")
        }
    });
}

/**
 * Añade un nuevo artículo destacado, lo guarda y actualiza la visualización
 *
 * @param {string} title - Título del nuevo artículo
 * @param {string} content - Descripción del nuevo artículo
 * @param {string} webpage - Sección a la que pertenece
 * @param {string} imageUrl - URL de la imagen del artículo (opcional)
 * @returns {Object} El objeto del artículo creado
 */
// Exportar las funciones a través del objeto featuredManager en window
window.featuredManager = {
    load: loadFeatured,                   // Función para cargar artículos
    render: renderFeatured,               // Función para renderizar todos los artículos

};