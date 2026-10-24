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
