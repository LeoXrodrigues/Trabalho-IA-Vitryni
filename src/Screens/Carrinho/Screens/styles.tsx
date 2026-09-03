import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../../Styles/commonStyles";

export const styles = StyleSheet.create({
  scrollContent: {
    padding: spacing.md,
    gap: spacing.md,
    paddingBottom: 100,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: "center",
  },
  itemsCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  itemRow: {
    flexDirection: "row",
    gap: 12,
    paddingTop: spacing.md,
  },
  itemDivider: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.sm,
  },
  itemImg: {
    width: 56,
    height: 56,
    borderRadius: radius.sm,
    backgroundColor: colors.border,
  },
  itemImgPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text,
    lineHeight: 18,
  },
  itemSize: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 3,
  },
  itemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  qty: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  qtyBtnOutline: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  qtyBtnOutlineText: {
    fontSize: 18,
    color: colors.text,
    lineHeight: 22,
  },
  qtyBtnFilled: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnFilledText: {
    fontSize: 18,
    color: colors.white,
    lineHeight: 22,
  },
  qtyNum: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text,
    minWidth: 16,
    textAlign: "center",
  },
  itemPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
  },
  removeBtn: {
    padding: 2,
  },
  summarySection: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  sumTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sumTotalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  sumTotalVal: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
  },

  // CTA
  ctaArea: {
    padding: spacing.md,
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  ctaBtn: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: 16,
    alignItems: "center",
  },
  ctaText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },
});