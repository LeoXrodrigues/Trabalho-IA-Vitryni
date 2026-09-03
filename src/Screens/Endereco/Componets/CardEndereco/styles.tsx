import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../../../Styles/commonStyles";

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: "row",
    gap: spacing.sm,
    backgroundColor: colors.card,
  },
  cardSelecionado: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  radioSelecionado: {
    borderColor: colors.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  texto: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tag: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.white,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radius.sm,
    overflow: "hidden",
  },
  tagPadrao: {
    backgroundColor: colors.primary,
  },
  tagAlerta: {
    backgroundColor: colors.danger,
  },
});
