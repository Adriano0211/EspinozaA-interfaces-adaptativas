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

**Respuesta:** Porque `getDeviceClass` y `getColumns` calculan resultados a partir del ancho y pueden reutilizarse sin depender de una pantalla. `BreakpointsScreen` usa ambas funciones para mostrar la clase y las columnas actuales; `GalleryScreen` usa `getDeviceClass` para el indicador y `getColumns` para ajustar la galería.

## Ejercicio 05 — Áreas seguras: insets

**Pregunta:** La pantalla del ejercicio 07 (galería) se dibuja hasta el borde inferior. ¿Qué inset le falta y dónde lo aplicarías: en `App.js` o en la propia pantalla?

**Respuesta:** Le falta respetar `insets.bottom` para que las últimas celdas no queden detrás de la barra de gestos o el indicador de inicio. Lo aplicaría como `paddingBottom` al contenido de la `FlatList` en `GalleryScreen`, porque esa pantalla se dibuja hasta el borde inferior y debe gestionar ese espacio sin añadir padding inferior a todas las pantallas desde `App.js`.

## Ejercicio 06 — Tamaño por elemento: onLayout

**Pregunta:** ¿Por qué `compact` exige `cardWidth > 0`? ¿Qué se vería en el primer render si no lo hicieras?

**Respuesta:** Antes de que `onLayout` mida la tarjeta, `cardWidth` vale 0. Sin la condición `cardWidth > 0`, la comparación `0 < 240` activaría el modo compacto en el primer render: la imagen aparecería con 80 dp de alto y la descripción oculta, aunque todavía no se conoce el ancho real. Tras la medición podría cambiar al modo completo. Con la condición, empieza completa hasta recibir una medida válida.

## Ejercicio 07 — Galería adaptativa

**Pregunta:** La galería usa el ancho de la ventana. Si la metieras dentro de un panel lateral de 320 dp en tablet, ¿qué cambiarías para que siguiera funcionando?

**Respuesta:** Mediría el ancho real del panel con `onLayout`, como en el ejercicio 06, y usaría ese ancho para `getColumns` y para calcular `itemWidth = anchoDelPanel / columns`. Así, dentro de un panel de 320 dp la galería usaría 2 columnas ajustadas al panel, aunque la ventana de la tablet sea más ancha.
