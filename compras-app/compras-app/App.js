import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const cesta = {
  nome: "Cesta de Verduras",
  fazenda: "Fazenda Boa Terra",
  preco: "R$ 40,00",
  imagemFazenda: "https://picsum.photos/400/200?farm", // imagem ilustrativa
  itens: [
    { id: "1", nome: "Alface", imagem: "https://www.enzazaden.com/br/-/media/images/enza-zaden/03_list_images-640x480/02-products-and-services/2024/01-products/lettuce/batavia-sartaneja-whole-head.jpg"},
    { id: "2", nome: "Tomate", imagem: "https://res.cloudinary.com/compo-com/image/fetch/c_fill,g_xy_center,f_auto,w_708,h_531,x_iw_mul_34_div_100,y_ih_mul_44_div_100/https://www.compo.de/dam/jcr:a897bcd5-ace0-4203-9f1e-ad7bb55f7183/Tomaten_gross.jpg"},
    { id: "3", nome: "Cenoura", imagem: "https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg" },
    { id: "4", nome: "Batata", imagem: "https://conteudo.imguol.com.br/c/entretenimento/0e/2017/10/15/batata-crua-1508077604971_v2_1920x1269.jpg" },
  ],
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{cesta.nome}</Text>
      <Text style={styles.subtitulo}>{cesta.fazenda}</Text>
      <Image source={{ uri: cesta.imagemFazenda }} style={styles.imagemFazenda} />
      <Text style={styles.preco}>{cesta.preco}</Text>

      <Text style={styles.itensTitulo}>Itens da cesta:</Text>
      <FlatList
        data={cesta.itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <Text style={styles.item}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 60,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  preco: {
    fontSize: 18,
    color: "green",
    marginBottom: 15,
  },
  imagemFazenda: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  itensTitulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
  },
});
