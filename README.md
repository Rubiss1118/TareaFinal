INSTITUTO TECNOLÓGICO DE OAXACA

Departamento de Ingeniería en Sistemas Computacionales

Materia:PROGRAMACION WEB

“Componentes con Angular Material Enlace de repositorio de Github y/o GitHub Pages”

Profesor: Martinez Nieto Adelina Equipo: MORALES OSORIO RUBI ESMERALDA

Grupo: VSI Oaxaca de juarez a 07 de julio de 2025.

# ENTRAR EN LA MASTER AHI SE ENCUENTRA EL PROYECTO COMPLETO

# Angular Material Components 

Una aplicación Angular que muestra diferentes componentes de Angular Material con ejemplos funcionales, navegación lateral interactiva y un menú lateral diseñado específicamente para facilitar la exploración de cada componente.

## 🚀 Características

- **Menú lateral interactivo** con Angular Material Sidenav para navegación fluida
- **15 componentes** de Angular Material completamente implementados y funcionales
- **Diseño responsivo** con tema oscuro personalizado
- **Routing dinámico** entre componentes con estados activos
- **Server-Side Rendering (SSR)** habilitado para mejor rendimiento
- **Interfaz intuitiva** diseñada para desarrolladores y aprendizaje

## 🎯 Menú de Navegación

La aplicación cuenta con un **menú lateral fijo** que permite navegar fácilmente entre todos los componentes. El menú incluye:

- **Navegación intuitiva:** Cada componente tiene su enlace directo
- **Estados visuales:** El componente activo se resalta automáticamente
- **Diseño responsivo:** Se adapta a diferentes tamaños de pantalla
- **Acceso rápido:** Todos los componentes visibles de un vistazo
- **Sidenav persistente:** Siempre visible para facilitar la navegación

### Estructura del Menú:
```
📋 Angular Material Components
├── Sheet (Bottom Sheets)
├── Chips (Etiquetas interactivas)
├── Cards (Tarjetas Material)
├── Autocomplete (Autocompletado)
├── Button (Botones diversos)
├── Toolbar (Barras de herramientas)
├── Tabla (Tablas de datos)
├── Check (Checkboxes y Radio)
├── Progress (Indicadores de progreso)
├── Divider (Separadores)
├── Panel (Paneles de expansión)
├── Calendario (Selectores de fecha)
├── Slider (Controles deslizantes)
├── Menu (Menús desplegables)
└── Tree (Estructuras de árbol)
```

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar al directorio
cd Angular2

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## 🗂️ Estructura del Proyecto

```
src/
├── app/
│   ├── ButtonOverviewExample/     # Componente de botones
│   ├── cards/                     # Componente de tarjetas
│   ├── Check/                     # Componente de checkboxes
│   ├── chips/                     # Componente de chips
│   ├── calendario/                # Componente de calendario
│   ├── divider/                   # Componente de divisores
│   ├── mat-autocomplete/          # Componente de autocompletado
│   ├── menu/                      # Componente de menús
│   ├── panel/                     # Componente de paneles de expansión
│   ├── progress/                  # Componente de barras de progreso
│   ├── sheet/                     # Componente de bottom sheets
│   ├── slider/                    # Componente de sliders
│   ├── Tabla/                     # Componente de tablas
│   ├── Toolbar/                   # Componente de toolbars
│   └── tree/                      # Componente de árbol
├── public/
│   └── index.html                 # Archivo HTML principal
└── styles.css                     # Estilos globales
```

## 📋 Componentes Incluidos

### 1. **Sheet** (`/sheet`) 📄
**Ruta:** `src/app/sheet/sheet`
- **Propósito:** Implementa Bottom Sheets de Angular Material para mostrar contenido modal desde la parte inferior
- **Características principales:**
  - **Bottom sheets deslizables** que aparecen desde la parte inferior de la pantalla
  - **Contenido personalizable** con texto, formularios y acciones
  - **Dismissible** - Se pueden cerrar tocando fuera o con botones
  - **Responsive design** - Se adapta a móviles y escritorio
  - **Integración con acciones** - Botones para abrir/cerrar sheets
  - **Overlay backdrop** para enfocar la atención del usuario
- **Casos de uso:** Menús de acciones, formularios rápidos, información adicional

- <img width="1207" height="995" alt="image" src="https://github.com/user-attachments/assets/06fc03e4-7020-4f76-9fe7-7472d8f48b14" />
<img width="1919" height="1007" alt="image" src="https://github.com/user-attachments/assets/a1826f88-d32a-4f2f-aae0-021a17ff5624" />


### 2. **Chips** (`/chips`) 🏷️
**Ruta:** `src/app/chips/chips`
- **Propósito:** Muestra chips (etiquetas) para representar entidades pequeñas como contactos, categorías o filtros
- **Características principales:**
  - **Chips removibles** con icono de eliminación (×)
  - **Chips con avatares** para mostrar contactos o usuarios
  - **Chips con iconos** para categorización visual
  - **Lista dinámica** - Agregar y quitar chips en tiempo real
  - **Estados de selección** - Chips que pueden activarse/desactivarse
  - **Colores personalizables** para diferentes tipos de contenido
  - **Input de chips** para crear nuevos elementos
- **Casos de uso:** Tags, filtros, selección múltiple, contactos
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b67abccf-f3c2-4a72-a896-34336cdecb92" />


### 3. **Cards** (`/cards`) 🃏
**Ruta:** `src/app/cards/cardse`
- **Propósito:** Implementa tarjetas Material Design para mostrar contenido agrupado de forma elegante
- **Características principales:**
  - **Tarjetas básicas** con títulos y contenido simple
  - **Tarjetas con imágenes** y headers visuales
  - **Tarjetas con acciones** - Botones integrados en la parte inferior
  - **Cards con subtítulos** para información adicional
  - **Elevación y sombras** para profundidad visual
  - **Contenido flexible** - Texto, listas, imágenes, botones
  - **Responsive layout** - Se adaptan al contenedor
- **Casos de uso:** Perfiles de usuario, productos, noticias, dashboards
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d7f7dc3a-c675-434c-bda2-89d41c7d9b7d" />
<img width="1919" height="986" alt="image" src="https://github.com/user-attachments/assets/4ace6a98-2714-4366-8fac-45894fbfb525" />


### 4. **Autocomplete** (`/autocomplete`) 🔍
**Ruta:** `src/app/mat-autocomplete/mat-autocomplete`
- **Propósito:** Input inteligente con autocompletado y sugerencias en tiempo real
- **Características principales:**
  - **Filtrado en tiempo real** mientras el usuario escribe
  - **Lista de sugerencias** desplegable y navegable con teclado
  - **Integración con formularios reactivos** y validaciones
  - **Opciones personalizables** con texto y valores diferentes
  - **Highlighting** de texto coincidente
  - **Opciones con iconos** para mejor identificación visual
  - **Loading states** para búsquedas asíncronas
- **Casos de uso:** Búsquedas, selección de países, autocompletado de emails

 <img width="1918" height="1079" alt="image" src="https://github.com/user-attachments/assets/24aaf0de-a599-4eb6-b622-8be465321f31" />
<img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/11108237-d491-4c30-ad59-cc6f024c1b11" />

### 5. **Button** (`/button`) 🔘
**Ruta:** `src/app/ButtonOverviewExample/button-overview-example`
- **Propósito:** Showcase completo de todos los tipos de botones disponibles en Angular Material
- **Características principales:**
  - **Botones básicos** (mat-button) sin elevación
  - **Botones elevados** (mat-raised-button) con sombra
  - **Botones outlined** (mat-stroked-button) con borde
  - **Botones planos** (mat-flat-button) con color de fondo
  - **Botones con iconos** combinando texto e iconos
  - **Floating Action Buttons** (FAB) circulares
  - **Toggle buttons** para estados on/off
  - **Icon buttons** solo con iconos
  - **Diferentes colores** - primary, accent, warn
- **Casos de uso:** Acciones principales, navegación, formularios, toolbars
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/7a03b11d-d555-4b17-adf9-2cbc60bf7c7a" />
<img width="1434" height="983" alt="image" src="https://github.com/user-attachments/assets/74d2bbe2-4366-46b1-a124-d6934e8e8276" />

### 6. **Toolbar** (`/toolbar`) 🛠️
**Ruta:** `src/app/Toolbar/tool-bar`
- **Propósito:** Barras de herramientas personalizables para headers y navegación
- **Características principales:**
  - **Toolbar básica** con título centrado
  - **Toolbar con iconos** y botones de acción
  - **Múltiples filas** de herramientas para contenido complejo
  - **Menú hamburguesa** para navegación móvil
  - **Espaciado flexible** con spacers para alineación
  - **Colores temáticos** - primary, accent, warn
  - **Sticky positioning** para mantener fija en scroll
- **Casos de uso:** Headers de aplicación, navegación principal, barras de acciones
- <img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/0e10a46c-8953-4200-837d-7645fb288860" />
<img width="1919" height="983" alt="image" src="https://github.com/user-attachments/assets/6dc9248f-44c4-4323-b883-0669fe380eb7" />


### 7. **Tabla** (`/tabla`) 📊
**Ruta:** `src/app/Tabla/tabla`
- **Propósito:** Tablas de datos avanzadas con funcionalidades de gestión de información
- **Características principales:**
  - **Sorting bidireccional** por columnas con indicadores visuales
  - **Paginación integrada** con controles de navegación
  - **Filtrado global** para búsqueda en toda la tabla
  - **Selección de filas** individual y múltiple
  - **Columnas configurables** con anchos personalizables
  - **Data source flexible** compatible con arrays y observables
  - **Sticky headers** que se mantienen visibles al hacer scroll
  - **Responsive behavior** en dispositivos móviles
- **Casos de uso:** Listados de datos, reportes, administración de contenido
- <img width="1919" height="1038" alt="image" src="https://github.com/user-attachments/assets/217a0ba7-77ef-400b-950b-6f707b3ed381" />
<img width="1919" height="1005" alt="image" src="https://github.com/user-attachments/assets/6f300364-5eaa-43d2-b4bc-f33139d7a080" />


### 8. **Check** (`/check`) ✅
**Ruta:** `src/app/Check/check`
- **Propósito:** Controles de selección incluyendo checkboxes y radio buttons
- **Características principales:**
  - **Checkboxes individuales** para opciones independientes
  - **Checkboxes con estados** - checked, unchecked, indeterminate
  - **Radio buttons agrupados** para selección única
  - **Labels descriptivos** asociados a cada control
  - **Estados deshabilitados** para opciones no disponibles
  - **Integración con formularios** reactivos y template-driven
  - **Validaciones personalizadas** y mensajes de error
- **Casos de uso:** Formularios, configuraciones, filtros, términos y condiciones
<img width="1919" height="963" alt="image" src="https://github.com/user-attachments/assets/75da1146-197e-42a4-bdf2-50d145e08aaa" />
<img width="1919" height="974" alt="image" src="https://github.com/user-attachments/assets/310a8ae4-1d92-478a-b99a-fb8ee04ed35a" />

### 9. **Progress** (`/progress`) ⏳
**Ruta:** `src/app/progress/progress`
- **Propósito:** Indicadores visuales de progreso y estados de carga
- **Características principales:**
  - **Progress bars determinadas** con porcentaje específico
  - **Progress bars indeterminadas** para procesos de duración desconocida
  - **Progress spinners** circulares para espacios reducidos
  - **Múltiples modos** - determinate, indeterminate, buffer, query
  - **Colores personalizables** para diferentes tipos de procesos
  - **Valores dinámicos** que se actualizan en tiempo real
  - **Animaciones fluidas** para transiciones suaves
- **Casos de uso:** Cargas de archivos, procesamiento de datos, navegación entre páginas
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/142c6452-3147-44b4-91b3-afbc27aacda6" />
<img width="1919" height="992" alt="image" src="https://github.com/user-attachments/assets/d1e22ac7-9cfd-46f2-b2e7-c44b08ad4a30" />

### 10. **Divider** (`/divider`) ➖
**Ruta:** `src/app/divider/divider`
- **Propósito:** Separadores visuales para organizar y dividir contenido
- **Características principales:**
  - **Divisores horizontales** para separar secciones verticalmente
  - **Divisores verticales** para separar contenido horizontal
  - **Divisores con texto** para títulos de sección
  - **Diferentes estilos** - líneas sólidas, punteadas
  - **Colores temáticos** que se adaptan al theme
  - **Espaciado configurable** para control de márgenes
  - **Integración flexible** en listas, menús y layouts
- **Casos de uso:** Separación de secciones, organización visual, menús
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/7c76f4ab-729e-47c8-86d7-ea91586a5409" />
<img width="1917" height="945" alt="image" src="https://github.com/user-attachments/assets/36f0e898-4f96-4f6a-a68f-618fa79a99e9" />

### 11. **Panel** (`/panel`) 📋
**Ruta:** `src/app/panel/panel`
- **Propósito:** Paneles de expansión (Accordion) para mostrar/ocultar contenido
- **Características principales:**
  - **Paneles expandibles** con animaciones suaves
  - **Headers personalizables** con títulos y descripciones
  - **Múltiples paneles** que pueden abrirse simultáneamente
  - **Modo acordeón** - solo un panel abierto a la vez
  - **Estados controlados** programáticamente
  - **Iconos de expansión** que rotan al abrir/cerrar
  - **Contenido dinámico** que se carga al expandir
  - **Eventos de apertura/cierre** para lógica personalizada
- **Casos de uso:** FAQs, configuraciones avanzadas, información detallada
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/0b43b88a-ed08-4b42-a673-ea2a49e2622a" />
<img width="1919" height="996" alt="image" src="https://github.com/user-attachments/assets/26c647ef-3a5a-4f51-8362-38e8d56234e9" />

### 12. **Calendario** (`/calendario`) 📅
**Ruta:** `src/app/calendario/calendario`
- **Propósito:** Selectores de fechas y calendarios para entrada temporal
- **Características principales:**
  - **DatePicker modal** con calendario visual
  - **Selección de rangos** de fechas (inicio y fin)
  - **Validaciones de fechas** - mínimas, máximas, fechas deshabilitadas
  - **Formato personalizable** de fechas mostradas
  - **Navegación por meses/años** con controles intuitivos
  - **Localización** para diferentes idiomas y regiones
  - **Input keyboard friendly** para entrada manual
  - **Integration con formularios** reactivos
- **Casos de uso:** Reservas, eventos, filtros temporales, formularios
<img width="1900" height="985" alt="image" src="https://github.com/user-attachments/assets/ef2cb71e-6df5-4943-9f52-f65de81da21f" />
<img width="1919" height="1013" alt="image" src="https://github.com/user-attachments/assets/57115121-db4c-4b53-ab89-f4e5bb54e2d9" />


### 13. **Slider** (`/slider`) 🎚️
**Ruta:** `src/app/slider/slider`
- **Propósito:** Controles deslizantes para selección de valores numéricos
- **Características principales:**
  - **Sliders simples** para un solo valor
  - **Range sliders** para seleccionar rangos (min-max)
  - **Valores mínimos y máximos** configurables
  - **Step control** para incrementos específicos
  - **Thumb labels** que muestran el valor actual
  - **Marcadores de tick** para valores específicos
  - **Orientación vertical** y horizontal
  - **Estados deshabilitados** para valores no editables
- **Casos de uso:** Filtros de precio, volumen, configuraciones numéricas
<img width="1919" height="996" alt="image" src="https://github.com/user-attachments/assets/1ae296d7-91e4-4b5d-91f4-8ae3acde3f48" />
<img width="1626" height="955" alt="image" src="https://github.com/user-attachments/assets/727e612d-5380-48d9-a507-90b6287f6a81" />


### 14. **Menu** (`/menu`) 🍔
**Ruta:** `src/app/menu/menu`
- **Propósito:** Menús desplegables y contextuales para acciones y navegación
- **Características principales:**
  - **Menús básicos** que se abren al hacer clic
  - **Submenús anidados** para estructuras jerárquicas
  - **Menús con iconos** para identificación visual rápida
  - **Menús contextuales** que aparecen en posiciones específicas
  - **Keyboard navigation** - navegación con flechas y Enter
  - **Separadores de menú** para agrupar opciones relacionadas
  - **Estados deshabilitados** para opciones no disponibles
  - **Positioning inteligente** que evita salirse de pantalla
- **Casos de uso:** Menús de aplicación, acciones contextuales, navegación
- <img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/ca740366-e2bf-4fd9-b4b4-cb42d6ec82c0" />
<img width="1919" height="1004" alt="image" src="https://github.com/user-attachments/assets/54321da3-ff97-4243-94da-24e60b31863e" />



### 15. **Tree** (`/tree`) 🌳
**Ruta:** `src/app/tree/tree`
- **Propósito:** Estructura de árbol jerárquica para mostrar datos anidados
- **Características principales:**
  - **Nodos expandibles/colapsables** con animaciones
  - **Estructura anidada infinita** para jerarquías complejas
  - **Iconos personalizables** para diferentes tipos de nodos
  - **Selección de nodos** individual y múltiple
  - **Lazy loading** para cargar nodos bajo demanda
  - **Drag and drop** para reorganizar estructura
  - **Checkboxes en nodos** para selección jerárquica
  - **Filtrado de árbol** para búsqueda en estructura
- **Casos de uso:** Navegadores de archivos, organigramas, categorías anidadas
## 📸 Capturas de Pantalla
EJERCICIO 15 
<img width="1269" height="994" alt="image" src="https://github.com/user-attachments/assets/7331015d-2bc5-4c63-aebd-f911bf131ef2" />
<img width="1919" height="987" alt="image" src="https://github.com/user-attachments/assets/f1b161df-987e-4459-889c-1a65c15e8c26" />



### Vista Principal con Menú Lateral
<img width="1659" height="981" alt="image" src="https://github.com/user-attachments/assets/a4439fc3-268c-4aff-b173-cabef67ae97c" />
<img width="1919" height="1016" alt="image" src="https://github.com/user-attachments/assets/64e0bab6-a8c8-41d9-b09e-461fd0ee3647" />


### Menú Lateral (Sidenav)
- **Sidenav persistente:** Siempre visible en modo `side` para acceso rápido
- **Ancho fijo:** 250px en desktop, 200px en móviles
- **Tema oscuro:** Fondo `#130e0e` que complementa el tema general
- **Estados activos:** El enlace actual se resalta con color `#3f51b5`
- **Hover effects:** Efectos visuales al pasar el mouse sobre las opciones
- **Navegación fluida:** Transiciones suaves entre componentes
- **RouterLinkActive:** Detección automática del componente actual


## 🎨 Personalización

### Estilos Globales
Los estilos principales se encuentran en:
- `src/styles.css` - Estilos globales
- `src/app/app.css` - Estilos del componente principal

## 🔧 Tecnologías Utilizadas

- **Angular 20+** - Framework principal
- **Angular Material** - Biblioteca de componentes UI
- **Angular CDK** - Component Development Kit
- **TypeScript** - Lenguaje de programación
- **Angular SSR** - Server-Side Rendering
- **Angular Router** - Navegación entre componentes

## 🔍 Cómo Usar la Aplicación

### Navegación
1. **Menú lateral:** Utiliza el menú lateral para navegar entre componentes
2. **Estados activos:** El componente actual se resalta automáticamente
3. **Responsivo:** En móviles, el menú se adapta al tamaño de pantalla
4. **Acceso directo:** Cada componente tiene su URL única para bookmarking

### Exploración de Componentes
1. **Funcionalidad completa:** Cada componente es totalmente funcional
2. **Ejemplos prácticos:** Todos incluyen ejemplos de uso real
3. **Interactividad:** Prueba todas las características de cada componente
4. **Código fuente:** Revisa el código en las carpetas correspondientes


### Diseño del Menú Responsivo
/* Estilos generales */
body { 
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}

mat-toolbar {
  position: sticky;
  top: 0;
  z-index: 100;
}

.spacer {
  flex: 1 1 auto;
}

main {
  padding: 20px;
}

/* Efecto hover para botones del menú */
button[mat-menu-item]:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* Estilo para la ruta activa */
.active-link {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}
