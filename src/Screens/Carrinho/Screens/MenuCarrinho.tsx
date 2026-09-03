import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { fmt, useMenuCarrinho } from "../../../Hooks/useMenuCarrinho";
import { colors, commonStyles } from "../../../Styles/commonStyles";
import { RootStackParamList } from "../../../Types/navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "CartMenu">;

export function MenuCarrinho({ navigation }: Props) {
  const { itens, total, loading, error, updateQty, removeItem } =
    useMenuCarrinho();

  if (loading) {
    return (
      <View style={[commonStyles.screen, styles.centered]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[commonStyles.screen, styles.centered]}>
        <Ionicons name="alert-circle-outline" size={32} color={colors.danger} />
        <Text style={styles.emptyText}>{error}</Text>
      </View>
    );
  }

  if (itens.length === 0) {
    return (
      <View style={[commonStyles.screen, styles.centered]}>
        <Ionicons name="cart-outline" size={40} color={colors.textMuted} />
        <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
      </View>
    );
  }

  return (
    <View style={commonStyles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.itemsCard}>
          {itens.map((item, idx) => (
            <View
              key={item.id}
              style={[styles.itemRow, idx > 0 && styles.itemDivider]}
            >
              {item.fotoUrl ? (
                <Image source={{ uri: item.fotoUrl }} style={styles.itemImg} />
              ) : (
                <View style={[styles.itemImg, styles.itemImgPlaceholder]}>
                  <Ionicons
                    name="image-outline"
                    size={20}
                    color={colors.textMuted}
                  />
                </View>
              )}
              <View style={styles.itemInfo}>
                <Text style={styles.itemName} numberOfLines={2}>
                  {item.nomeProduto}
                </Text>
                <Text style={styles.itemSize}>Tamanho {item.tamanho}</Text>
                <View style={styles.itemFooter}>
                  <View style={styles.qty}>
                    <Pressable
                      style={styles.qtyBtnOutline}
                      onPress={() => updateQty(item.id, -1)}
                      disabled={item.quantidade <= 1}
                      hitSlop={8}
                    >
                      <Text style={styles.qtyBtnOutlineText}>−</Text>
                    </Pressable>
                    <Text style={styles.qtyNum}>{item.quantidade}</Text>
                    <Pressable
                      style={styles.qtyBtnFilled}
                      onPress={() => updateQty(item.id, +1)}
                      hitSlop={8}
                    >
                      <Text style={styles.qtyBtnFilledText}>+</Text>
                    </Pressable>
                  </View>
                  <View style={styles.itemPriceRow}>
                    <Text style={styles.itemPrice}>{fmt(item.subtotal)}</Text>
                    <Pressable
                      style={styles.removeBtn}
                      onPress={() => removeItem(item.id)}
                      hitSlop={8}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={18}
                        color={colors.danger}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Resumo */}
        <View style={styles.summarySection}>
          <View style={styles.sumTotalRow}>
            <Text style={styles.sumTotalLabel}>Total</Text>
            <Text style={styles.sumTotalVal}>{fmt(total)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* CTA */}
      <View style={styles.ctaArea}>
        <Pressable
          style={styles.ctaBtn}
          onPress={() => navigation.navigate("Endereco")}
        >
          <Text style={styles.ctaText}>Ir para o checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}