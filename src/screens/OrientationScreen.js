import { ScrollView, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Section from "../components/Section";
import Badge from "../components/Badge";
import { colors, spacing, radius } from "../theme";

const CARDS = [
  { id: "1", title: "Resumen", body: "Ventas de hoy y pedidos pendientes." },
  { id: "2", title: "Actividad", body: "Últimos movimientos de la cuenta." },
  { id: "3", title: "Accesos", body: "Atajos a las acciones frecuentes." },
];

export default function OrientationScreen() {
  // Ejercicio 03, paso 1: actualizar la orientación al cambiar el tamaño de la ventana.
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const isLandscape = !isPortrait;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section title="Detectar la orientación">
        <Badge tone={isLandscape ? "info" : "primary"}>{isLandscape ? "LANDSCAPE · flexDirection: row" : "PORTRAIT · flexDirection: column"}</Badge>
        <Text style={styles.note}>
          const isPortrait = height {">="} width. Para bloquear o forzar la orientación se usa expo-screen-orientation o "orientation" en app.json.
        </Text>
      </Section>

      {/* Ejercicio 03, paso 2: apilar las tarjetas en vertical y ponerlas en fila en horizontal. */}
      <View style={{ flexDirection: isLandscape ? "row" : "column", gap: spacing.md }}>
        {/* Ejercicio 03, paso 3: repartir el ancho por igual entre las tres tarjetas horizontales. */}
        {CARDS.map((card) => (
          <View key={card.id} style={[styles.card, isLandscape && { flex: 1 }]}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardBody}>{card.body}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.lg },
  note: { fontSize: 13, color: colors.muted, lineHeight: 18 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    minHeight: 110,
    gap: spacing.xs,
  },
  cardTitle: { fontSize: 16, fontWeight: "700", color: colors.text },
  cardBody: { fontSize: 13, color: colors.muted },
});
