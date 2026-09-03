import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../../Styles/commonStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // --- Image area ---
  imageContainer: {
    width: "100%",
    height: 320,
    backgroundColor: "#c6c6c6", // verde sálvia do produto — intencional, não no design system
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  badgeDiscount: {
    position: "absolute",
    top: spacing.md,
    alignSelf: "center",
    backgroundColor: colors.danger,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs,
  },
  badgeDiscountText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  iconTopLeft: {
    position: "absolute",
    top: spacing.md,
    left: spacing.md,
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  iconTopRight: {
    position: "absolute",
    top: spacing.md,
    right: spacing.md,
    flexDirection: "row",
    gap: spacing.sm,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  // --- Info card ---
  infoCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderTopLeftRadius: radius.lg + spacing.sm, // 24
    borderTopRightRadius: radius.lg + spacing.sm,
    marginTop: -(radius.lg + spacing.sm),
    paddingHorizontal: spacing.md + spacing.xs, // 20
    paddingTop: spacing.md + spacing.xs,
  },

  // Store row
  storeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md - spacing.xs, // 12
  },
  storeLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  storeIconBox: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  storeName: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.text,
  },
  storeMeta: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 1,
  },
  storeLink: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },

  // Product name
  productName: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    lineHeight: 30,
    marginBottom: spacing.sm + 2,
  },

  // Price row
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm + 2,
    marginBottom: spacing.md + 2,
    flexWrap: "wrap",
  },
  priceOriginal: {
    fontSize: 14,
    color: colors.textMuted,
    textDecorationLine: "line-through",
  },
  priceNew: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.text,
  },
  priceSaving: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.danger,
    textTransform: "uppercase",
  },

  // Size
  sizeLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.md - spacing.xs, // 12
  },
  sizeRow: {
    flexDirection: "row",
    gap: spacing.sm + 2,
    marginBottom: spacing.md - spacing.xs,
  },
  sizeOption: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  sizeOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  sizeOptionDisabled: {
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  sizeText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textMuted,
  },
  sizeTextSelected: {
    color: colors.primary,
    fontWeight: "700",
  },
  sizeTextDisabled: {
    color: colors.border,
    textDecorationLine: "line-through",
  },

  // Stock warning
  stockWarning: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs + 2,
    backgroundColor: "#FFFBEB", // amarelo suave — cor semântica de aviso, não no design system
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md - spacing.xs,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md + 2,
  },
  stockWarningText: {
    fontSize: 12,
    color: "#B7791F", // texto de aviso — par intencional do fundo #FFFBEB
    fontWeight: "500",
  },

  // Description
  descriptionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.xs + 2,
  },
  descriptionText: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
  },

  // Bottom bar
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md + spacing.xs,
    paddingVertical: spacing.md - spacing.xs,
    paddingBottom: spacing.lg + spacing.xs,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: spacing.md - spacing.xs,
  },
  wishlistBtn: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartBtn: {
    flex: 1,
    height: 50,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
