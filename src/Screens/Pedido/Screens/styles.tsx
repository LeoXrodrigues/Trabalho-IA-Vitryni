import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../../Styles/commonStyles";

export const styles = StyleSheet.create({
  content: {
    padding: spacing.md,
    alignItems: "center",
    gap: spacing.md,
  },
  checkCircle: {
    width: 88,
    height: 88,
    borderRadius: radius.full,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.lg,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: colors.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: "center",
    lineHeight: 20,
  },
  protocolCard: {
    width: "100%",
  },
  protocolLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textMuted,
    letterSpacing: 0.5,
  },
  protocol: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  loja: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "center",
    paddingVertical: spacing.sm,
  },
  lojaThumb: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  lojaNome: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  lojaStatus: {
    fontSize: 12,
    color: colors.textMuted,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
