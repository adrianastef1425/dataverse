# Dataverse [Razas de gatos]

**Link de la aplicación:** https://adrianastef1425.github.io/dataverse/src/

## Definición de producto

¿Quiénes son las principales usuarias del producto?
- Personas que quieran adoptar a un gato de raza.
- Veterinarios que quieran especializarse en gatos.

¿Cuáles son los objetivos de estas usuarias en relación con el producto?
- Obtener información relevante sobre cada raza y sus características
- Tener fácil acceso a la data para usarlo en futuras investigaciones o en el campo en el que trabajen.

¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
- Esperanza de vida
- Peso
- Tamaño
- Precio
- Lugar de origen
- Pelaje
- Rasgos faciales
- Personalidad
- Enfermedades comunes
- Cuidados

¿Cuándo utilizan o utilizarían el producto?
- Cuando tengan la curiosidad de conocer sobre razas de gatos.
- Cuando quieran adoptar un gatito.

## Prompt ChatGPT (generación de data):

-Quita "nivelesDeActividad", "socializacion" y "adaptabilidad"
-la propiedad "pelaje" solo puede contener como valor uno de estos 4 strings: "Pelo corto", "Pelo semilargo", "Pelo largo" o "Sin pelo"

```javascript
{
  "id": "siames",
  "name": "Gato Siamés",
  "shortDescription": "Elegante y vocal, el Gato Siamés es conocido por su pelaje corto, ojos azules intensos y personalidad extrovertida.",
  "description": "El Gato Siamés es una raza felina que se originó en Tailandia. Con su pelaje corto, coloración distintiva y ojos azules intensos, el Siamés es reconocido por su elegancia. Su personalidad extrovertida y vocal lo convierte en un compañero cariñoso y expresivo. Los Siameses disfrutan de la interacción y pueden ser juguetones. Su esperanza de vida varía entre 12 y 16 años, y su tamaño mediano los hace ideales para la vida en interiores.",
  "imageUrl": "images/siames.jpg",
  "facts": {
	"esperanzaDeVidaMin": 12,
	"esperanzaDeVidaMax": 16,
	"pesoMin": 2.27,
	"pesoMax": 5.44,
	"precioCachorro": 700,
	"tamaño": "Mediano",
	"lugarDeOrigen": "Tailandia",
	"alimentacion": "Dieta equilibrada para gatos",
	"pelaje": "Pelo corto",
	"caracteristicasFaciales": "Cabeza angular, orejas grandes y puntiagudas, ojos azules intensos y expresivos."
  },
  "extraInfo": {
	"personalidad": {
  	"tranquilo": false,
  	"cariñoso": true,
  	"sociable": true,
  	"enérgico": true,
  	"juguetón": true
	},
	"enfermedadesComunes": {
  	"problemasRespiratorios": true,
  	"problemasDentales": true,
  	"problemasCardiacos": false,
  	"problemasDePiel": true,
  	"problemasRenales": false,
  	"problemasOculares": true,
  	"tendenciaObesidad": false
	},
	"cuidados": ["Proporcionar juguetes y actividades para estimular la mente", "Cepillado ocasional para mantener el pelaje saludable", "Visitas regulares al veterinario"]
  }
}
```

## Prompt Bing (generación de imágenes):

Quiero 1 imagen de un gato raza Himalayo de cuerpo entero de frente, la imagen debe ser de tamaño 1280px*1280px.

![](https://i.postimg.cc/Y9TdSXb9/Captura-de-pantalla-2024-03-22-a-la-s-16-29-03.png)

## Historias de usuaria

###  Historia de usuaria #1

**Como**: adoptante o estudiante veterinaria
**Quiero**: ver informacion de caracteristicas de razas
**Para**: adoptar// ver características de cada raza y usarlo en consulta o investigación

**Criterios de aceptación:**
- Hacer el fork
- Tener la data generada sobre las razas
- Guardar en JS
- Prototipo en papel
- Estructura html (fijarse en funcionalidades)
- Agregar todos la data de razas en la página principal (index.html)

**Definición de terminado:**
- Que la data cumpla los requisitos
- Despliegue en github pages.

### Historia de usuaria #2

**Como**: adoptante
**Quiero**: Filtrar los gatos por tipo de pelaje y personalidad. Ordenar los gatos alfabéticamente, por precio y esperanza de vida
**Para**: para poder escoger por pelaje y personalidad

**Criterios de aceptación:**
- Practicar git colaborativo
- Unir las funcionalidades de los dos filtros/ si un filtro está activo el otro seleccione “Todos”
- Hacer un prototipo2.0
- Decidir que datos poner en las tarjetas
- Hacer el css de las tarjetas y de la pagina en general
- Que sea responsive

**Definición de terminado:**
- Que pasen los tests:OAs
- Despliegue en github pages.

### Historia de usuaria #3

**Como**: Adoptante
**Quiero**: Ver estadísticas sobre los gatos
**Para**: Saber el promedio de precio de un gato de raza

**Criterios de aceptación:**
- Crear test unitarios
- Crear evento para el botón de estadísticas
- CSS del botón estadísticas y como se muestra en una cajita
- Practicar los Pull Request

**Definición de terminado:**
- Que pasen los tests unitario.
- Despliegue en GitHub pages.
- Pedir feedback en OH(evaluarlo el viernes)
- Hacer el README

### Historia de usuaria #4

**Como**: Adoptante.
**Quiero**: Ver estadísticas en gráficas sobre los gatos.
**Para**: Tener más información y comparar las razas.

**Criterios de aceptación:**
- Hacer los cambios según lo requerido en el feedback de la OH
- Usar método map en SortDataPrice
- Mejorar CSS de index.html y de gato.html
- Hacer lo de Google Charts

**Definición de terminado:**
- Que pasen los test:OAs por completo y e2e.
- Despliegue en GitHub pages.

## Prototipos de alta fidelidad

![](https://i.postimg.cc/vZSfM4P8/Captura-de-pantalla-2024-03-22-a-la-s-16-32-14.png)

![](https://i.postimg.cc/gk3GmQNx/sfaf.png)

## Errores corregidos de los tests de usabilidad

- En la vista movil el boton de menu se mantenia visible al aumentar el tamaño de la ventana
- Al principio los colores no combinaban bien.
- Los *select* no tenían *label* y no se veía bien.

*Hecho por Flor y Adriana* 🚀⭐
