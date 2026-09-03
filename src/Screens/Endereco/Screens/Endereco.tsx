import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Stepper } from "../../../Components/Stepper/Stepper";
import { colors, commonStyles } from "../../../Styles/commonStyles";
import { RootStackParamList } from "../../../Types/navigation";
import { CardEndereco } from "../Componets/CardEndereco/CardEndereco";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Endereco">;

const enderecos = [
  {
    id: "1",
    titulo: "Casa",
    tag: { texto: "PADRÃO", tipo: "padrao" as const },
    linha1: "Av. Brasil, 123 — apto 502",
    linha2: "Jardins, São Paulo - SP, 04567-000",
  },
  {
    id: "2",
    titulo: "Trabalho",
    tag: { texto: "FORA DO RAIO", tipo: "alerta" as const },
    linha1: "R. Oscar Freire, 940 — sala 12",
    linha2: "Jardins, São Paulo - SP, 01426-001",
  },
];

const tempos = [
  { loja: "Atelier Lua", tempo: "40–60 min" },
  { loja: "Casa Verão", tempo: "50–70 min" },
];

const steps = ["Endereço", "Pagamento", "Confirmação"];

export function Endereco({ navigation }: Props) {
  const [selecionado, setSelecionado] = useState("1");

  return (
    <View style={commonStyles.screen}>
      <Stepper passos={steps} stepAtual={0} />

      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <Text style={commonStyles.sectionLabel}>SELECIONE UM ENDEREÇO</Text>

        {enderecos.map((e) => (
          <CardEndereco
            key={e.id}
            titulo={e.titulo}
            tag={e.tag}
            linha1={e.linha1}
            linha2={e.linha2}
            selecionado={selecionado === e.id}
            onPress={() => setSelecionado(e.id)}
          />
        ))}

        {/* Box de aviso (no real seria condicional ao carrinho/seleção) */}
        <View style={styles.alertBox}>
          <Ionicons
            name="alert-circle-outline"
            size={18}
            color={colors.danger}
            style={{ marginTop: 1 }}
          />
          <Text style={styles.alertText}>
            <Text style={styles.alertHighlight}>Casa Verão</Text> não entrega no
            endereço "Trabalho". Selecione outro endereço ou remova os itens
            dessa loja.
          </Text>
        </View>

        <Pressable style={styles.addBtn}>
          <Text style={styles.addBtnText}>+ Adicionar novo endereço</Text>
        </Pressable>

        {/* Tempo estimado de entrega */}
        <View style={commonStyles.card}>
          <Text style={styles.tempoTitle}>Tempo estimado de entrega</Text>
          {tempos.map((t) => (
            <View key={t.loja} style={styles.tempoRow}>
              <Text style={styles.tempoLoja}>{t.loja}</Text>
              <Text style={styles.tempoValor}>{t.tempo}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={commonStyles.button}
          onPress={() => navigation.navigate("Pagamento")}
        >
          <Text style={commonStyles.buttonText}>Continuar para pagamento</Text>
        </Pressable>
      </View>
    </View>
  );
}
