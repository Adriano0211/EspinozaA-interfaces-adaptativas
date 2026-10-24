# Respuestas de los ejercicios

## Ejercicio 01 — Dimensions API y PixelRatio

**Pregunta:** ¿Qué pasaría si usaras `SNAPSHOT.width` para decidir cuántas columnas mostrar en una galería?

**Respuesta:** La cantidad de columnas se calcularía con el ancho que tenía la ventana al cargar el archivo. Al rotar el teléfono o cambiar el tamaño de la ventana, `SNAPSHOT.width` no se actualizaría y la galería conservaría una cantidad de columnas inadecuada para el espacio disponible.

## Ejercicio 02 — useWindowDimensions

**Pregunta:** ¿Por qué no puedes llamar `useWindowDimensions()` fuera de un componente, por ejemplo junto a `SNAPSHOT` del ejercicio 01?

**Respuesta:** `useWindowDimensions()` es un hook de React y solo se puede llamar durante el renderizado de un componente funcional o de otro hook, en su nivel superior. A nivel de archivo no hay un componente renderizándose al que React pueda asociar la llamada ni actualizar cuando cambien las dimensiones; hacerlo provoca un error de hook inválido.

## Ejercicio 03 — Orientación: portrait y landscape

**Pregunta:** ¿En qué caso real de tu proyecto final la misma pantalla debería cambiar de columna a fila?

**Respuesta:** En la pantalla **Alerta SOS** de FindMyChibolo: en portrait, el mapa y la información se mostrarían uno debajo del otro; en landscape, el mapa iría a la izquierda y las capturas, la batería y los botones de llamada a la derecha. Así se aprovecha el ancho adicional sin cambiar el contenido de la pantalla.

## Ejercicio 04 — Breakpoints por clase de dispositivo

**Pregunta:** ¿Por qué las funciones viven en `src/utils/` y no dentro de una pantalla? ¿Quién más las va a usar?

**Respuesta:** Porque `getDeviceClass` y `getColumns` calculan resultados a partir del ancho y pueden reutilizarse sin depender de una pantalla. `BreakpointsScreen` usa ambas funciones para mostrar la clase y las columnas actuales; `GalleryScreen` usa `getDeviceClass` para el indicador y usará `getColumns` en el ejercicio 07 para ajustar la galería.

## Ejercicio 05 — Áreas seguras: insets

**Pregunta:** La pantalla del ejercicio 07 (galería) se dibuja hasta el borde inferior. ¿Qué inset le falta y dónde lo aplicarías: en `App.js` o en la propia pantalla?

**Respuesta:** Le falta respetar `insets.bottom` para que las últimas celdas no queden detrás de la barra de gestos o el indicador de inicio. Lo aplicaría como `paddingBottom` al contenido de la `FlatList` en `GalleryScreen`, porque esa pantalla se dibuja hasta el borde inferior y debe gestionar ese espacio sin añadir padding inferior a todas las pantallas desde `App.js`.
