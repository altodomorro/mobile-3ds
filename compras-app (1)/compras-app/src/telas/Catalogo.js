import React from "react";
import { View, Text, FlatList, Image, Button } from "react-native";


const produtos = [
  { id: "1", nome: "Alface", categoria: "Hortaliça", preco: 5, imagem: "https://img.cdndsgni.com/preview/13206058.jpg" },
  { id: "2", nome: "Tomate", categoria: "Fruta", preco: 7, imagem: "https://img.cdndsgni.com/preview/10002716.jpg" },
  { id: "3", nome: "Cenoura", categoria: "Legume", preco: 4, imagem: "https://img.cdndsgni.com/preview/12485137.jpg" },
  { id: "4", nome: "Batata", categoria: "Legume", preco: 4, imagem: "https://img.cdndsgni.com/preview/10600699.jpg" },
  { id: "5", nome: "Maçã", categoria: "Fruta", preco: 12, imagem: "https://img.cdndsgni.com/preview/10002711-m.jpg"},
  { id: "6", nome: "Banana", categoria: "Fruta", preco: 4, imagem: "https://img.cdndsgni.com/preview/10001685-m.jpg"},
  { id: "7", nome: "Brócolis", categoria: "Hortaliça", preco: 6, imagem: "https://img.cdndsgni.com/preview/12986970-m.jpg"},
  { id: "8", nome: "Cebola", categoria: "Legume", preco: 4.55, imagem: "https://img.cdndsgni.com/preview/11174194-m.jpg"},
  { id: "9", nome: "Uva", categoria: "Fruta", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/12786933.jpg" },
  { id: "10", nome: "Alho", categoria: "Hortaliça", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/12987722.jpg" },
  { id: "11", nome: "Pimentão", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/12470334.jpg"},
  { id: "12", nome: "Morango", categoria: "Fruta", preco: 4.99, imagem: "https://img.cdndsgni.com/preview/11141208.jpg"},
  { id: "13", nome: "Melancia", categoria: "Fruta", preco: 6.00, imagem: "https://img.cdndsgni.com/preview/11115880.jpg" },
  { id: "14", nome: "Abóbora", categoria: "Legume", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/13694519.jpg" },
  { id: "15", nome: "Cebolinha", categoria: "Hortaliça", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/13735792.jpg"},
  { id: "16", nome: "Laranja", categoria: "Fruta", preco: 2.99, imagem: "https://img.cdndsgni.com/preview/13453675.jpg"},
  { id: "17", nome: "Abacate", categoria: "Fruta", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/12746951.jpg" },
  { id: "18", nome: "Pitaya", categoria: "Fruta", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/12773779.jpg" },
  { id: "19", nome: "Batata doce", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/13701472.jpg"},
  { id: "20", nome: "Limão", categoria: "Fruta", preco: 1.99, imagem: "https://img.cdndsgni.com/preview/12749149.jpg"},
  { id: "21", nome: "Repolho", categoria: "Legume", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/12773721.jpg" },
  { id: "22", nome: "Amoras", categoria: "Fruta", preco: 1.50, imagem: "https://img.cdndsgni.com/preview/11141072-m.jpg" },
  { id: "23", nome: "Abacaxi", categoria: "Fruta", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/12993168.jpg"},
  { id: "24", nome: "Manga", categoria: "Fruta", preco: 2.99, imagem: "https://img.cdndsgni.com/preview/11141225.jpg"},
{ id: "25", nome: "Chuchu", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/13011953.jpg" },
{ id: "26", nome: "Cereja", categoria: "Fruta", preco: 1.50, imagem: "https://img.cdndsgni.com/preview/11842232.jpg" },
{ id: "27", nome: "Kiwi", categoria: "Fruta", preco: 3.00, imagem: "https://img.cdndsgni.com/preview/12993184.jpg"},
{ id: "28", nome: "Pera", categoria: "Fruta", preco: 2.99, imagem: "https://img.cdndsgni.com/preview/12653951.jpg"},
{ id: "29", nome: "Nabo", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/13747396.jpg" },
{ id: "30", nome: "Milho", categoria: "Hortaliça", preco: 5.50, imagem: "https://img.cdndsgni.com/preview/11217729.jpg" },
{ id: "31", nome: "Maracujá", categoria: "Fruta", preco: 3.00, imagem: "https://img.cdndsgni.com/preview/12862438.jpg"},
{ id: "32", nome: "Rabanete", categoria: "Legume", preco: 4.99, imagem: "https://img.cdndsgni.com/preview/12787350.jpg"},
{ id: "33", nome: "Colve-flor", categoria: "Legume", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/13735752.jpg" },
{ id: "34", nome: "Espinafre", categoria: "Hortaliça", preco: 1.50, imagem: "https://img.cdndsgni.com/preview/12978494.jpg" },
{ id: "35", nome: "Beringela", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/12485548.jpg"},
{ id: "36", nome: "Pepino", categoria: "Legume", preco: 3.99, imagem: "https://img.cdndsgni.com/preview/13735845.jpg"},
{ id: "37", nome: "Beterraba", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/13046393.jpg" },
{ id: "38", nome: "Agrião", categoria: "Hortaliça", preco: 1.50, imagem: "https://img.cdndsgni.com/preview/13747251.jpg" },
{ id: "39", nome: "Couve", categoria: "Hortaliça", preco: 1.50, imagem: "https://img.cdndsgni.com/preview/12657595.jpg"},
{ id: "40", nome: "Vagem", categoria: "Legume", preco: 2.99, imagem: "https://img.cdndsgni.com/preview/11828167.jpg"},
{ id: "41", nome: "Abóbora-japonesa", categoria: "Legume", preco: 6.00, imagem: "https://img.cdndsgni.com/preview/11833590.jpg" },
{ id: "42", nome: "Abobrinha", categoria: "Legume", preco: 4.50, imagem: "https://img.cdndsgni.com/preview/12605852.jpg" },
{ id: "43", nome: "Rúcula", categoria: "Hortaliça", preco: 2.00, imagem: "https://img.cdndsgni.com/preview/11173920.jpg"},
{ id: "44", nome: "Jiló", categoria: "Legume", preco: 3.99, imagem: "https://img.cdndsgni.com/preview/11828944.jpg"},
{ id: "45", nome: "Repolho-roxo", categoria: "Legume", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/12701503.jpg" },
{ id: "46", nome: "Quiabo", categoria: "Legume", preco: 4.50, imagem: "https://img.cdndsgni.com/preview/11408575.jpg" },
{ id: "47", nome: "Inhame", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/10001755.jpg"},
{ id: "48", nome: "Abóbora-seca", categoria: "Legume", preco: 6.99, imagem: "https://img.cdndsgni.com/preview/10458357.jpg"},
{ id: "49", nome: "Banana-da-terra", categoria: "Fruta", preco: 6.00, imagem: "https://img.cdndsgni.com/preview/10802139.jpg" },
{ id: "50", nome: "Uva-verde", categoria: "Fruta", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/12786930.jpg" },
{ id: "51", nome: "Batata-doce-rosa", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/13447430.jpg"},
{ id: "52", nome: "Pimenta-vermelha", categoria: "Hortaliça", preco: 3.99, imagem: "https://img.cdndsgni.com/preview/12604943.jpg"},
{ id: "53", nome: "Gengibre", categoria: "Fruta", preco: 2.00, imagem: "https://img.cdndsgni.com/preview/12503263.jpg" },
{ id: "54", nome: "Pêssego", categoria: "Fruta", preco: 2.50, imagem: "https://img.cdndsgni.com/preview/12773745.jpg" },
{ id: "55", nome: "Mamão", categoria: "Fruta", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/13011958.jpg"},
{ id: "56", nome: "Aspargo", categoria: "Legume", preco: 2.99, imagem: "https://img.cdndsgni.com/preview/12596270.jpg"},
{ id: "57", nome: "Acelgas", categoria: "Legume", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/13735766.jpg" },
{ id: "58", nome: "Colve-de-bruxelas", categoria: "Legume", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/13747390.jpg" },
{ id: "59", nome: "Salsa", categoria: "Hortaliça", preco: 1.00, imagem: "https://img.cdndsgni.com/preview/13107913.jpg"},
{ id: "60", nome: "Cogumelo", categoria: "Legume", preco: 4.99, imagem: "https://img.cdndsgni.com/preview/12479521.jpg"},
{ id: "61", nome: "Caqui", categoria: "Fruta", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/13625295.jpg" },
{ id: "62", nome: "Mandioca", categoria: "Legume", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/10145552.jpg" },
{ id: "63", nome: "Alho-poró", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/12878314.jpg"},
{ id: "64", nome: "Figo", categoria: "Fruta", preco: 3.99, imagem: "https://img.cdndsgni.com/preview/12791827.jpg"},
{ id: "65", nome: "Lichia", categoria: "Fruta", preco: 8.00, imagem: "https://img.cdndsgni.com/preview/13356938.jpg" },
{ id: "66", nome: "Louro", categoria: "Hortaliça", preco: 2.50, imagem: "https://img.cdndsgni.com/preview/13243937.jpg" },
{ id: "67", nome: "Tangerina", categoria: "Fruta", preco: 3.50, imagem: "https://img.cdndsgni.com/preview/13243895.jpg"},
{ id: "68", nome: "Carambola", categoria: "Fruta", preco: 6.99, imagem: "https://img.cdndsgni.com/preview/12581378.jpg"},
{ id: "69", nome: "Ervilha", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/12791929.jpg" },
{ id: "70", nome: "Laranja-lima", categoria: "Fruta", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/11115817.jpg" },
{ id: "71", nome: "Jacá", categoria: "Fruta", preco: 9.00, imagem: "https://img.cdndsgni.com/preview/11141150.jpg"},
{ id: "72", nome: "Graviola", categoria: "Fruta", preco: 6.99, imagem: "https://img.cdndsgni.com/preview/12553159.jpg"},
{ id: "73", nome: "Jabuticaba", categoria: "Fruta", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/12338990.jpg" },
{ id: "74", nome: "Tomate-cereja", categoria: "Fruta", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/13701477.jpg" },
{ id: "78", nome: "Hortelã", categoria: "Hortaliça", preco: 2.00, imagem: "https://img.cdndsgni.com/preview/12470965.jpg"},
{ id: "79", nome: "Jambo", categoria: "Fruta", preco: 2.99, imagem: "https://img.cdndsgni.com/preview/13547941.jpg"},
{ id: "80", nome: "Goiabá", categoria: "Fruta", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/11842278.jpg" },
{ id: "81", nome: "Pimenta-verde", categoria: "Hortaliça", preco: 1.50, imagem: "https://img.cdndsgni.com/preview/12956826.jpg" },
{ id: "82", nome: "Tamarindo", categoria: "Fruta", preco: 2.00, imagem: "https://img.cdndsgni.com/preview/13547617.jpg"},
{ id: "83", nome: "Marmelo", categoria: "Fruta", preco: 4.99, imagem: "https://img.cdndsgni.com/preview/12693152.jpg"},
{ id: "84", nome: "Cajú", categoria: "Fruta", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/10845014.jpg" },
{ id: "85", nome: "Melão", categoria: "Fruta", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/11841845.jpg" },
{ id: "86", nome: "Coco", categoria: "Fruta", preco: 6.00, imagem: "https://img.cdndsgni.com/preview/12708029.jpg"},
{ id: "87", nome: "Coco-verde", categoria: "Fruta", preco: 6.99, imagem: "https://img.cdndsgni.com/preview/13186459.jpg"},
{ id: "88", nome: "Romã", categoria: "Fruta", preco: 8.00, imagem: "https://img.cdndsgni.com/preview/12773759.jpg" },
{ id: "89", nome: "Acerelo", categoria: "Fruta", preco: 4.50, imagem: "https://img.cdndsgni.com/preview/10926368.jpg" },
{ id: "90", nome: "Franboesa", categoria: "Fruta", preco: 6.00, imagem: "https://img.cdndsgni.com/preview/13011348.jpg"},
{ id: "91", nome: "Açaí", categoria: "Fruta", preco: 7.99, imagem: "https://img.cdndsgni.com/preview/11141145.jpg"},
{ id: "92", nome: "Mertilo", categoria: "Fruta", preco: 3.00, imagem: "https://img.cdndsgni.com/preview/11455390.jpg" },
{ id: "93", nome: "Azeitona", categoria: "Fruta", preco: 4.50, imagem: "https://img.cdndsgni.com/preview/13011938.jpg" },
{ id: "94", nome: "Aipo", categoria: "Hortaliça", preco: 4.50, imagem: "https://img.cdndsgni.com/preview/13107913.jpg" },
{ id: "95", nome: "Cebola-roxa", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/12288653.jpg"},
{ id: "96", nome: "Cacau", categoria: "Fruta", preco: 4.99, imagem: "https://img.cdndsgni.com/preview/12431457.jpg"}
];


export default function Catalogo({ irParaCarrinho, adicionarAoCarrinho }) {
  return (
    <View style={{ flex: 1, padding: 60 }}>
      <Text style={{ fontSize: 22, marginBottom: 30 }}>Catálogo de Produtos</Text>
      <FlatList
        data={produtos.sort((a, b) => a.nome.localeCompare(b.nome))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <Image source={{ uri: item.imagem }} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text>{item.nome} - {item.categoria} - R$ {item.preco},00</Text>
            <Button title="(+)" onPress={() => adicionarAoCarrinho(item)} />
          </View>
        )}
      />
      <Button title="Ir para Carrinho" onPress={irParaCarrinho} />
    </View>
  );
}

