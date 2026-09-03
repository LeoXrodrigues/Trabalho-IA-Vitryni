import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#7C3AED',
  primarySoft: '#F3E8FF',
  white: '#FFFFFF',
  text: '#1A1A1A',
  textMuted: '#6B7280',
  background: '#F5F5F7',
  card: '#FFFFFF',
  border: '#E5E7EB',
  danger: '#DC2626',
  dangerSoft: '#FEF2F2',   
  success: '#16A34A',
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export const radius = { sm: 8, md: 12, lg: 16, full: 999 };

// Só o que aparece em várias telas
export const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.md,
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});