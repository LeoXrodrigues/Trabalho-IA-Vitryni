import { Text, View } from "react-native";
import { styles } from "./styles";

type StepperProps = {
  passos: string[];
  stepAtual: number;
};

export function Stepper({ passos, stepAtual }: StepperProps) {
  return (
    <View style={styles.stepper}>
      {passos.map((label, i) => {
        const ativo = i <= stepAtual;
        const linhaAtiva = i < stepAtual;
        const ehUltimo = i === passos.length - 1;
        return (
          <View key={label} style={[styles.step, { flex: ehUltimo ? 0 : 1 }]}>
            <View
              style={[
                styles.stepBadge,
                ativo ? styles.stepBadgeActive : styles.stepBadgeIdle,
              ]}
            >
              <Text style={styles.stepBadgeText}>{i + 1}</Text>
            </View>
            <Text style={[styles.stepLabel, ativo && styles.stepLabelActive]}>
              {label}
            </Text>
            {!ehUltimo && (
              <View
                style={[styles.stepLine, linhaAtiva && styles.stepLineActive]}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}
