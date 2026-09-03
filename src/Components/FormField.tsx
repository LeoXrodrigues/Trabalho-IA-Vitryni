import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { colors, commonStyles as styles } from "../Styles/commonStyles";

interface FormFieldProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  onBlur: () => void;
  error?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  autoCapitalize?: "none" | "characters" | "words" | "sentences";
  editable?: boolean;
}

export function FormField({
  label,
  value,
  onChangeText,
  onBlur,
  error,
  placeholder,
  keyboardType,
  maxLength,
  autoCapitalize,
  editable = true,
}: FormFieldProps) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, !!error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        editable={editable}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
