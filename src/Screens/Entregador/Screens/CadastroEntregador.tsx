import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { FormField } from "../../../Components/FormField";
import { useCadastroEntregador } from "../../../Hooks/useCadastroEntregador";
import { colors, commonStyles } from "../../../Styles/commonStyles";
import { RootStackParamList } from "../../../Types/navigation";
import { TipoVeiculo } from "../../../Types/Entregador";
import {
  formatarCNH,
  formatarCPF,
  formatarPlaca,
  formatarTelefone,
  validarCNH,
  validarCPF,
  validarNomeCompleto,
  validarPlaca,
  validarTelefone,
} from "../../../Utils/validadores";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "CadastroEntregador">;

interface FormState {
  nome: string;
  cpf: string;
  telefone: string;
  tipoVeiculo: TipoVeiculo | null;
  placa: string;
  cnh: string;
}

type FieldErrors = Partial<Record<keyof FormState, string>>;

const veiculos: { tipo: TipoVeiculo; label: string; icone: keyof typeof Ionicons.glyphMap }[] = [
  { tipo: "moto", label: "Moto", icone: "speedometer-outline" },
  { tipo: "carro", label: "Carro", icone: "car-outline" },
  { tipo: "bicicleta", label: "Bicicleta", icone: "bicycle-outline" },
];

const INITIAL_FORM: FormState = {
  nome: "",
  cpf: "",
  telefone: "",
  tipoVeiculo: null,
  placa: "",
  cnh: "",
};

function exigeVeiculoMotorizado(tipo: TipoVeiculo | null) {
  return tipo === "moto" || tipo === "carro";
}

function validarCampo(campo: keyof FormState, form: FormState): string | undefined {
  switch (campo) {
    case "nome":
      if (!form.nome.trim()) return "Informe seu nome completo.";
      if (!validarNomeCompleto(form.nome)) return "Digite nome e sobrenome.";
      return undefined;
    case "cpf":
      if (!form.cpf.trim()) return "Informe seu CPF.";
      if (!validarCPF(form.cpf)) return "CPF inválido.";
      return undefined;
    case "telefone":
      if (!form.telefone.trim()) return "Informe um telefone para contato.";
      if (!validarTelefone(form.telefone)) return "Telefone inválido.";
      return undefined;
    case "tipoVeiculo":
      if (!form.tipoVeiculo) return "Selecione o veículo utilizado.";
      return undefined;
    case "placa":
      if (!exigeVeiculoMotorizado(form.tipoVeiculo)) return undefined;
      if (!form.placa.trim()) return "Informe a placa do veículo.";
      if (!validarPlaca(form.placa)) return "Placa inválida.";
      return undefined;
    case "cnh":
      if (!exigeVeiculoMotorizado(form.tipoVeiculo)) return undefined;
      if (!form.cnh.trim()) return "Informe o número da CNH.";
      if (!validarCNH(form.cnh)) return "CNH inválida.";
      return undefined;
    default:
      return undefined;
  }
}

function validarFormulario(form: FormState): FieldErrors {
  const campos: (keyof FormState)[] = [
    "nome",
    "cpf",
    "telefone",
    "tipoVeiculo",
    "placa",
    "cnh",
  ];
  const erros: FieldErrors = {};
  campos.forEach((campo) => {
    const erro = validarCampo(campo, form);
    if (erro) erros[campo] = erro;
  });
  return erros;
}

export function CadastroEntregador({ navigation }: Props) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const { status, error, resultado, enviar } = useCadastroEntregador();

  function atualizarCampo<K extends keyof FormState>(campo: K, valor: FormState[K]) {
    const novoForm = { ...form, [campo]: valor };
    setForm(novoForm);
    if (touched[campo]) {
      setErrors((prev) => ({ ...prev, [campo]: validarCampo(campo, novoForm) }));
    }
  }

  function marcarTocado(campo: keyof FormState) {
    setTouched((prev) => ({ ...prev, [campo]: true }));
    setErrors((prev) => ({ ...prev, [campo]: validarCampo(campo, form) }));
  }

  function selecionarVeiculo(tipo: TipoVeiculo) {
    const novoForm = { ...form, tipoVeiculo: tipo };
    setForm(novoForm);
    setErrors((prev) => ({
      ...prev,
      tipoVeiculo: undefined,
      placa: validarCampo("placa", novoForm),
      cnh: validarCampo("cnh", novoForm),
    }));
  }

  async function handleSubmit() {
    const erros = validarFormulario(form);
    setErrors(erros);
    setTouched({
      nome: true,
      cpf: true,
      telefone: true,
      tipoVeiculo: true,
      placa: true,
      cnh: true,
    });

    if (Object.keys(erros).length > 0) return;

    await enviar({
      nome: form.nome.trim(),
      cpf: form.cpf,
      telefone: form.telefone,
      tipoVeiculo: form.tipoVeiculo as TipoVeiculo,
      placa: form.placa,
      cnh: form.cnh,
    });
  }

  if (status === "success" && resultado) {
    return (
      <View style={commonStyles.screen}>
        <View style={styles.successContainer}>
          <View style={styles.checkCircle}>
            <Ionicons name="checkmark" size={36} color={colors.primary} />
          </View>
          <Text style={styles.successTitle}>Cadastro enviado!</Text>
          <Text style={styles.successSubtitle}>
            Recebemos os dados de {resultado.nome}. Protocolo #{resultado.id}.
            Você será avisado assim que a análise for concluída.
          </Text>
          <Pressable
            style={commonStyles.button}
            onPress={() => navigation.popToTop()}
          >
            <Text style={commonStyles.buttonText}>Voltar ao início</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const mostraVeiculoMotorizado = exigeVeiculoMotorizado(form.tipoVeiculo);
  const enviando = status === "loading";

  return (
    <KeyboardAvoidingView
      style={commonStyles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <Text style={commonStyles.sectionLabel}>DADOS PESSOAIS</Text>

        <FormField
          label="Nome completo"
          value={form.nome}
          onChangeText={(v) => atualizarCampo("nome", v)}
          onBlur={() => marcarTocado("nome")}
          error={touched.nome ? errors.nome : undefined}
          placeholder="Ex: Maria Silva Santos"
          editable={!enviando}
        />

        <FormField
          label="CPF"
          value={form.cpf}
          onChangeText={(v) => atualizarCampo("cpf", formatarCPF(v))}
          onBlur={() => marcarTocado("cpf")}
          error={touched.cpf ? errors.cpf : undefined}
          placeholder="000.000.000-00"
          keyboardType="number-pad"
          maxLength={14}
          editable={!enviando}
        />

        <FormField
          label="Telefone"
          value={form.telefone}
          onChangeText={(v) => atualizarCampo("telefone", formatarTelefone(v))}
          onBlur={() => marcarTocado("telefone")}
          error={touched.telefone ? errors.telefone : undefined}
          placeholder="(11) 91234-5678"
          keyboardType="phone-pad"
          maxLength={15}
          editable={!enviando}
        />

        <Text style={commonStyles.sectionLabel}>VEÍCULO</Text>

        <View style={commonStyles.fieldGroup}>
          <View style={styles.vehicleRow}>
            {veiculos.map((v) => {
              const selecionado = form.tipoVeiculo === v.tipo;
              return (
                <Pressable
                  key={v.tipo}
                  style={[styles.vehicleOption, selecionado && styles.vehicleOptionSelected]}
                  onPress={() => !enviando && selecionarVeiculo(v.tipo)}
                  disabled={enviando}
                >
                  <Ionicons
                    name={v.icone}
                    size={22}
                    color={selecionado ? colors.primary : colors.textMuted}
                  />
                  <Text style={[styles.vehicleLabel, selecionado && styles.vehicleLabelSelected]}>
                    {v.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          {touched.tipoVeiculo && errors.tipoVeiculo && (
            <Text style={commonStyles.errorText}>{errors.tipoVeiculo}</Text>
          )}
        </View>

        {mostraVeiculoMotorizado && (
          <>
            <FormField
              label="Placa do veículo"
              value={form.placa}
              onChangeText={(v) => atualizarCampo("placa", formatarPlaca(v))}
              onBlur={() => marcarTocado("placa")}
              error={touched.placa ? errors.placa : undefined}
              placeholder="ABC1D23"
              autoCapitalize="characters"
              maxLength={7}
              editable={!enviando}
            />

            <FormField
              label="Número da CNH"
              value={form.cnh}
              onChangeText={(v) => atualizarCampo("cnh", formatarCNH(v))}
              onBlur={() => marcarTocado("cnh")}
              error={touched.cnh ? errors.cnh : undefined}
              placeholder="00000000000"
              keyboardType="number-pad"
              maxLength={11}
              editable={!enviando}
            />
          </>
        )}

        {status === "error" && error && (
          <View style={styles.submitError}>
            <Ionicons
              name="alert-circle-outline"
              size={18}
              color={colors.danger}
              style={{ marginTop: 1 }}
            />
            <Text style={styles.submitErrorText}>{error}</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={[commonStyles.button, enviando && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={enviando}
        >
          {enviando ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <Text style={commonStyles.buttonText}>Enviar cadastro</Text>
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
