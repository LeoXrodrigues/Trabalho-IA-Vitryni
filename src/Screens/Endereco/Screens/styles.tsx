import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../../Styles/commonStyles";

export const styles = StyleSheet.create({
  footer: {
    padding: spacing.md,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  stepBadge: {
    width: 20,
    height: 20,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  stepBadgeActive: {
    backgroundColor: colors.primary,
  },
  stepBadgeIdle: {
    backgroundColor: colors.border,
  },
  stepBadgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "700",
  },
  stepLabel: {
    fontSize: 12,
    color: colors.textMuted,
  },
  stepLabelActive: {
    color: colors.text,
    fontWeight: "600",
  },
  stepLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.xs,
  },
  addressCard: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: "row",
    gap: spacing.sm,
    backgroundColor: colors.card,
  },
  addressCardSelected: {
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
  radioSelected: {
    borderColor: colors.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
  addressTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  addressText: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
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
  alertBox: {
    flexDirection: "row",
    gap: spacing.sm,
    backgroundColor: colors.dangerSoft,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  alertText: {
    flex: 1,
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 18,
  },
  alertHighlight: {
    color: colors.danger,
    fontWeight: "700",
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
  tempoTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.sm,
  },
  tempoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.xs,
  },
  tempoLoja: {
    fontSize: 14,
    color: colors.textMuted,
  },
  tempoValor: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
});
