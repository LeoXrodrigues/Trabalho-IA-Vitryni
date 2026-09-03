import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useProdutoById } from "../../../Hooks/useProduto";
import { colors } from "../../../Styles/commonStyles";
import { RootStackParamList } from "../../../Types/navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Produto">;

function fmt(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Produto({ route, navigation }: Props) {
  const produtoId = route.params?.id ?? 1;
  const { produto, loading, error, refetch } = useProdutoById(produtoId);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ color: colors.textMuted, marginTop: 12, fontSize: 14 }}>
          Carregando produto...
        </Text>
      </View>
    );
  }

  if (error || !produto) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center", padding: 24 }]}>
        <Text style={{ fontSize: 40, marginBottom: 12 }}>😕</Text>
        <Text style={{ color: colors.text, fontSize: 16, fontWeight: "600", marginBottom: 8, textAlign: "center" }}>
          Não foi possível carregar o produto
        </Text>
        <Text style={{ color: colors.textMuted, fontSize: 13, textAlign: "center", marginBottom: 20 }}>
          {error ?? "Produto não encontrado"}
        </Text>
        <Pressable
          style={{ backgroundColor: colors.primary, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 }}
          onPress={refetch}
        >
          <Text style={{ color: colors.white, fontWeight: "600", fontSize: 14 }}>
            Tentar novamente
          </Text>
        </Pressable>
      </View>
    );
  }

  const temDesconto = produto.precoPromocional != null && produto.precoPromocional < produto.preco;
  const economia = temDesconto ? produto.preco - produto.precoFinal : 0;
  const percentualDesconto = temDesconto
    ? Math.round(((produto.preco - produto.precoFinal) / produto.preco) * 100)
    : 0;

  // Selecionar primeiro tamanho disponível por padrão
  if (selectedSize === null && produto.tamanhosDisponiveis.length > 0) {
    const primeiro = produto.tamanhosDisponiveis.find((t) => t.disponivel);
    if (primeiro) {
      setSelectedSize(primeiro.tamanho);
    }
  }

  const tamanhoSelecionadoInfo = produto.tamanhosDisponiveis.find(
    (t) => t.tamanho === selectedSize,
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Product image area */}
        <View style={styles.imageContainer}>
          {produto.fotosUrls && produto.fotosUrls.length > 0 ? (
            <Image
              source={{ uri: produto.fotosUrls[0] }}
              style={styles.productImage}
              resizeMode="contain"
            />
          ) : (
            <View style={[styles.productImage, { justifyContent: "center", alignItems: "center" }]}>
              <Text style={{ fontSize: 48 }}>📷</Text>
              <Text style={{ color: colors.textMuted, fontSize: 12, marginTop: 8 }}>
                Sem imagem
              </Text>
            </View>
          )}

          {/* Back button */}
          <Pressable style={styles.iconTopLeft}>
            <Text style={{ fontSize: 18, color: "#333" }}>‹</Text>
          </Pressable>

          {/* Discount badge */}
          {temDesconto && (
            <View
              style={[
                styles.badgeDiscount,
                { top: 16, left: 0, right: 0, alignSelf: "center", width: 68 },
              ]}
            >
              <Text style={styles.badgeDiscountText}>
                -{percentualDesconto}% OFF
              </Text>
            </View>
          )}

          {/* Top right icons */}
          <View style={styles.iconTopRight}>
            <Pressable style={styles.iconCircle}>
              <Text style={{ fontSize: 16 }}>♡</Text>
            </Pressable>
            <Pressable style={styles.iconCircle}>
              <Text style={{ fontSize: 15 }}>⎙</Text>
            </Pressable>
          </View>
        </View>

        {/* Info card */}
        <View style={styles.infoCard}>
          {/* Store row */}
          <View style={styles.storeRow}>
            <View style={styles.storeLeft}>
              <View style={styles.storeIconBox}>
                <Text style={{ fontSize: 14 }}>✉️</Text>
              </View>
              <View>
                <Text style={styles.storeName}>Atelier Lua</Text>
                <Text style={styles.storeMeta}>
                  ★ {produto.avaliacao?.toFixed(1) ?? "—"} · ABERTA
                </Text>
              </View>
            </View>
            <Text style={styles.storeLink}>Ver loja →</Text>
          </View>

          {/* Product name */}
          <Text style={styles.productName}>
            {produto.nome}
            {produto.cor ? ` — ${produto.cor}` : ""}
          </Text>

          {/* Price */}
          <View style={styles.priceRow}>
            {temDesconto && (
              <Text style={styles.priceOriginal}>{fmt(produto.preco)}</Text>
            )}
            <Text style={styles.priceNew}>{fmt(produto.precoFinal)}</Text>
            {temDesconto && (
              <Text style={styles.priceSaving}>
                Você economiza {fmt(economia)}
              </Text>
            )}
          </View>

          {/* Size selector */}
          {produto.tamanhosDisponiveis.length > 0 && (
            <>
              <Text style={styles.sizeLabel}>Tamanho</Text>
              <View style={styles.sizeRow}>
                {produto.tamanhosDisponiveis.map((tamanho) => {
                  const isSelected = selectedSize === tamanho.tamanho;
                  const isDisabled = !tamanho.disponivel;
                  return (
                    <Pressable
                      key={tamanho.tamanho}
                      style={[
                        styles.sizeOption,
                        isSelected && styles.sizeOptionSelected,
                        isDisabled && styles.sizeOptionDisabled,
                      ]}
                      onPress={() =>
                        !isDisabled && setSelectedSize(tamanho.tamanho)
                      }
                      disabled={isDisabled}
                    >
                      <Text
                        style={[
                          styles.sizeText,
                          isSelected && styles.sizeTextSelected,
                          isDisabled && styles.sizeTextDisabled,
                        ]}
                      >
                        {tamanho.tamanho}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </>
          )}

          {/* Stock warning */}
          {tamanhoSelecionadoInfo &&
            tamanhoSelecionadoInfo.disponivel &&
            tamanhoSelecionadoInfo.quantidade <= 5 && (
              <View style={styles.stockWarning}>
                <Text>⚠️</Text>
                <Text style={styles.stockWarningText}>
                  Apenas {tamanhoSelecionadoInfo.quantidade} restantes neste
                  tamanho
                </Text>
              </View>
            )}

          {/* Description */}
          {produto.descricao && (
            <>
              <Text style={styles.descriptionLabel}>Descrição</Text>
              <Text style={styles.descriptionText}>{produto.descricao}</Text>
            </>
          )}
        </View>
      </ScrollView>

      {/* Bottom action bar */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.wishlistBtn}>
          <Text style={{ fontSize: 20 }}>♡</Text>
        </Pressable>
        <Pressable
          style={styles.addToCartBtn}
          onPress={() => navigation.navigate("MenuCarrinho")}
        >
          <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
        </Pressable>
      </View>
    </View>
  );
}
