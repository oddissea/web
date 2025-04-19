# Portal de Transparencia — CoordiCanarias

Este proyecto es una plataforma web diseñada para presentar de forma clara, accesible y organizada la información institucional, social y económica de **CoordiCanarias** (Coordinadora de Personas con Discapacidad Física de Canarias).

## 🧩 Contenidos del portal

El portal incluye las siguientes secciones:

- **Normativa**: Documentos legales y estatutarios clave de la organización.
- **Órganos de Gobierno**: Organigrama interactivo de la estructura organizativa.
- **Memorias de actividades**: Informes anuales desde 2016.
- **Memorias económicas**: Información financiera y formas de colaboración.
- **Historia y contacto**.

---

## 🧑‍⚖️ Normativa

Se muestra en formato de tarjetas con iconos temáticos, enlaces a documentos PDF y leyes relevantes. Utiliza clases como `.service`, `.text-theme` y estructura responsive basada en Bootstrap 5.

---

## 🧭 Órganos de Gobierno

El organigrama interactivo se ha implementado con [GoJS](https://gojs.net), usando un diagrama tipo árbol con los siguientes niveles:

- **Asamblea General**
  - **Junta Directiva**
    - Presidente
    - Secretaria
    - Tesorero
    - Vocales

El organigrama se adapta visualmente a los temas activos del portal (`data-bs-theme`). En modos `accessible` y `high-contrast`, las flechas del diagrama se muestran en blanco para garantizar visibilidad.

---

## 🗂 Memorias de actividades

Presentadas por año en tarjetas visuales. Cada tarjeta incluye el icono `fa-calendar-days` y enlaces a los archivos correspondientes (PDFs o documentos externos). También se incluye soporte para subdivisiones (por ejemplo, Parte 1 y Parte 2 para 2020).

---

## 🌐 Accesibilidad

Se han incorporado dos modos de visualización accesible:

- `Modo Accesible`: Mayor legibilidad, textos oscuros sobre fondo blanco.
- `Modo Alto Contraste`: Fondos negros, textos blancos, enlaces visibles.

Ambos modos son gestionados dinámicamente a través de `data-bs-theme`, con estilos definidos en `theme-panel-enhance.css`.

---

## 🚀 Tecnologías utilizadas

- HTML5 + CSS3 (Bootstrap 5 base)
- Font Awesome 6
- GoJS para organigramas (`https://unpkg.com/gojs`)
- JavaScript vanilla
- GitHub Pages (recomendado para despliegue)

---

## 🛡 Repositorio y control de versiones

Este proyecto se gestiona mediante Git y GitHub. Se utiliza:

- `origin`: tu fork (`https://github.com/oddissea/web.git`)
- `upstream`: repositorio original (`https://github.com/fhncoordi/web.git`)

### 🧑‍💻 Flujo de trabajo recomendado

```bash
# Crear nueva rama para desarrollo
git checkout -b feature-nueva-seccion

# Hacer cambios y confirmar
git add .
git commit -m "Añade sección X"

# Subir al fork (origin)
git push origin feature-nueva-seccion

# Crear Pull Request hacia upstream si es necesario
```

---

## 📄 Licencia

Este proyecto forma parte de la iniciativa de transparencia de **CoordiCanarias**. Los contenidos están sujetos a los términos de uso definidos por la organización.
