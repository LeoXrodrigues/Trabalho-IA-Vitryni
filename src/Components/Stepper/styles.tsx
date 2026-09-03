import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../Styles/commonStyles";

export const styles = StyleSheet.create({
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
  stepLineActive: {
    backgroundColor: colors.primary,
  },
});
