# 🍔 Mr. Black - Hamburguesería Sunchales

Sitio web moderno y funcional para la hamburguesería "Mr. Black" en Sunchales, especializada en pedidos online con las mejores hamburguesas artesanales.

## ✨ Características

- 🎨 **Diseño moderno** con paleta negro y amarillo
- 📱 **Completamente responsive** - adaptado para móvil, tablet y desktop
- 🛒 **Sistema de carrito** completo con gestión de productos
- 🍔 **Menú interactivo** con productos destacados
- 📍 **Información de contacto** con horarios y ubicaciones
- 🚀 **Navegación por rutas** - página principal y sección de pedidos separada
- 💛 **Integración WhatsApp** para contacto directo

## 🛠️ Tecnologías utilizadas

- **React 18** con TypeScript
- **Vite** como bundler y desarrollo
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **Shadcn/ui** para componentes de UI

## 📋 Prerrequisitos

- Node.js 16.x o superior
- npm o yarn

## 🚀 Instalación y uso

### 1. Clonar el repositorio o descargar los archivos

```bash
# Si tienes git
git clone [url-del-repositorio]
cd mr-black-sunchales

# O simplemente descargar y extraer los archivos
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en: `http://localhost:3000`

### 4. Construir para producción

```bash
npm run build
# o
yarn build
```

### 5. Previsualizar build de producción

```bash
npm run preview
# o
yarn preview
```

## 📁 Estructura del proyecto

```
mr-black-sunchales/
├── components/           # Componentes React
│   ├── ui/              # Componentes de UI (Shadcn)
│   ├── figma/           # Componentes específicos
│   ├── Header.tsx       # Cabecera con navegación
│   ├── HomePage.tsx     # Página principal
│   ├── PedidoPage.tsx   # Página de pedidos
│   ├── MenuSection.tsx  # Sección del menú
│   ├── Cart.tsx         # Carrito de compras
│   └── ...
├── styles/
│   └── globals.css      # Estilos globales y variables CSS
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
├── index.html           # HTML base
└── ...
```

## 🎯 Funcionalidades principales

### Páginas disponibles
- **Inicio (/)**: Hero, proceso de pedido, contacto
- **Pedidos (/pedido)**: Menú completo para hacer pedidos

### Sistema de carrito
- ✅ Agregar productos al carrito
- ✅ Modificar cantidades
- ✅ Eliminar productos
- ✅ Cálculo automático de totales
- ✅ Carrito flotante accesible desde cualquier página

### Información de contacto
- 📍 **Sucursales**: Av. Independencia 40 y Av. Yrigoyen 697
- 🕐 **Horarios**: Miércoles a Domingo, 18:00 - 00:00
- 📞 **Teléfono**: (03493) 520223
- 💬 **WhatsApp**: Integración directa

## 🎨 Personalización

### Colores
El sitio usa una paleta de negro predominante con acentos amarillos. Los colores se pueden personalizar editando las variables CSS en `styles/globals.css`.

### Productos del menú
Los productos están definidos en `components/MenuSection.tsx`. Puedes modificar:
- Nombres y descripciones
- Precios
- Imágenes (usando Unsplash)
- Estado de stock

### Información de contacto
Actualiza la información en `components/ContactSection.tsx` y `components/Footer.tsx`.

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Móviles**: 320px - 768px
- 📟 **Tablets**: 768px - 1024px  
- 💻 **Desktop**: 1024px+

## 🔧 Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build
npm run lint     # Ejecutar linter
```

## 📞 Contacto y soporte

Para consultas sobre el código o modificaciones:
- Revisa la documentación en los comentarios del código
- Consulta la guía de componentes Shadcn/ui
- Verifica la documentación de Tailwind CSS

---

**Desarrollado con ❤️ para Mr. Black Sunchales**

*Las mejores hamburguesas artesanales de Sunchales* 🍔