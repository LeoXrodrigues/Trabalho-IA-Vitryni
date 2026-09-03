import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../../../Styles/commonStyles";

export const styles = StyleSheet.create({
  footer: {
    padding: spacing.md,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  addBtn: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: "center",
  },
  addBtnText: {
    color: colors.primary,
    fontWeight: "600",
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.sm,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.textMuted,
  },
  summaryValue: {
    fontSize: 14,
    color: colors.text,
  },
  summaryDiscount: {
    color: colors.success,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
  },
});
