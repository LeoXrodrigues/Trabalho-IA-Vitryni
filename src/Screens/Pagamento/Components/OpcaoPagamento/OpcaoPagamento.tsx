import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { colors } from "../../../../Styles/commonStyles";
import { styles } from "./styles";

type OpcaoPagamentoProps = {
  titulo: string;
  desc: string;
  icone: string;
  familia: "fa6" | "ion";
  selecionado: boolean;
  onPress: () => void;
};

export function OpcaoPagamento({
  titulo,
  desc,
  icone,
  familia,
  selecionado,
  onPress,
}: OpcaoPagamentoProps) {
  return (
    <Pressable
      style={[styles.option, selecionado && styles.optionSelecionado]}
      onPress={onPress}
    >
      <View style={[styles.radio, selecionado && styles.radioSelecionado]}>
        {selecionado && <View style={styles.radioDot} />}
      </View>
      <View style={styles.icone}>
        {familia === "fa6" ? (
          <FontAwesome6
            name={icone}
            size={20}
            color={colors.primary}
            iconStyle="brand"
          />
        ) : (
          <Ionicons name={icone} size={20} color={colors.primary} />
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </Pressable>
  );
}
