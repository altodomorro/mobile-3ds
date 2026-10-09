import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

export default function App() {
  const [receitas, setReceitas] = useState([
    {
      id: '1',
      nome: 'Macarrão ao Molho de Tomate',
      ingredientes:
        '250 g de macarrão\n3 tomates maduros\n2 dentes de alho\nAzeite, sal e pimenta a gosto\nManjericão',
      preparo:
        '1. Cozinhe o macarrão em água fervente com sal.\n\n' +
        '2. Pique os tomates e o alho.\n\n' +
        '3. Refogue o alho no azeite e adicione os tomates.\n\n' +
        '4. Tempere e cozinhe por 10 minutos.\n\n' +
        '5. Misture o molho ao macarrão e finalize com manjericão.'
    }
  ]);

  const [verReceitaVisivel, setVerReceitaVisivel] = useState(false);
  const [cadastroVisivel, setCadastroVisivel] = useState(false);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  const [nomeReceita, setNomeReceita] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  // Limpa os campos do formulário
  function limparCampos() {
    setNomeReceita('');
    setIngredientes('');
    setModoPreparo('');
  }

  // Abre o formulário de cadastro
  function abrirCadastro() {
    limparCampos();
    setCadastroVisivel(true);
  }

  // Cancela o cadastro sem salvar
  function cancelarCadastro() {
    limparCampos();
    setCadastroVisivel(false);
  }

  // Valida e salva uma nova receita
  function salvarReceita() {
    if (
      !nomeReceita.trim() ||
      !ingredientes.trim() ||
      !modoPreparo.trim()
    ) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha o nome, os ingredientes e o modo de preparo.'
      );
      return;
    }

    const novaReceita = {
      id: Date.now().toString(),
      nome: nomeReceita.trim(),
      ingredientes: ingredientes.trim(),
      preparo: modoPreparo.trim()
    };

    setReceitas(receitasAtuais => [
      ...receitasAtuais,
      novaReceita
    ]);

    limparCampos();
    setCadastroVisivel(false);

    Alert.alert(
      'Sucesso!',
      'Receita cadastrada com sucesso!'
    );
  }

  // Abre a visualização da receita selecionada
  function abrirReceita(receita) {
    setReceitaSelecionada(receita);
    setVerReceitaVisivel(true);
  }

  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>🍲 App de Receitas</Text>

        <Text style={styles.subtitle}>
          Colecione suas receitas preferidas!
        </Text>

        <Text style={styles.description}>
          Descubra sabores incríveis e prepare pratos deliciosos.
        </Text>
      </View>

      {/* Lista de receitas */}
      <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.listaConteudo}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.listaTitulo}>
          Minhas Receitas ({receitas.length})
        </Text>

        {receitas.map(receita => (
          <View key={receita.id} style={styles.card}>
            <Text style={styles.cardTitulo}>
              🍽️ {receita.nome}
            </Text>

            <Text style={styles.cardDescricao} numberOfLines={2}>
              {receita.ingredientes.replace(/\n/g, ', ')}
            </Text>

            <View style={styles.cardBotao}>
              <Button
                title="Ver Receita"
                color="#386641"
                onPress={() => abrirReceita(receita)}
              />
            </View>
          </View>
        ))}

        {receitas.length === 0 && (
          <Text style={styles.vazio}>
            Nenhuma receita cadastrada. Toque no botão + para adicionar!
          </Text>
        )}
      </ScrollView>

      {/* Modal 1: visualizar receita */}
      <Modal
        visible={verReceitaVisivel}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVerReceitaVisivel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {receitaSelecionada && (
                <>
                  <Text style={styles.receitaTitulo}>
                    🍝 {receitaSelecionada.nome}
                  </Text>

                  <Text style={styles.secaoTitulo}>
                    🥕 Ingredientes
                  </Text>

                  <Text style={styles.texto}>
                    {receitaSelecionada.ingredientes}
                  </Text>

                  <Text style={styles.secaoTitulo}>
                    👨‍🍳 Modo de Preparo
                  </Text>

                  <Text style={styles.texto}>
                    {receitaSelecionada.preparo}
                  </Text>
                </>
              )}
            </ScrollView>

            <View style={styles.botaoModal}>
              <Button
                title="Fechar Receita"
                color="#386641"
                onPress={() => setVerReceitaVisivel(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal 2: cadastrar receita */}
      <Modal
        visible={cadastroVisivel}
        animationType="slide"
        transparent={true}
        onRequestClose={cancelarCadastro}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <Text style={styles.receitaTitulo}>
                📝 Nova Receita
              </Text>

              <Text style={styles.label}>
                Nome da Receita
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Ex.: Bolo de Cenoura"
                placeholderTextColor="#8A8A8A"
                value={nomeReceita}
                onChangeText={setNomeReceita}
                maxLength={100}
              />

              <Text style={styles.label}>
                Ingredientes
              </Text>

              <TextInput
                style={[styles.input, styles.inputMultiline]}
                placeholder="Digite os ingredientes..."
                placeholderTextColor="#8A8A8A"
                value={ingredientes}
                onChangeText={setIngredientes}
                multiline={true}
                textAlignVertical="top"
              />

              <Text style={styles.label}>
                Modo de Preparo
              </Text>

              <TextInput
                style={[styles.input, styles.inputMultiline]}
                placeholder="Descreva o passo a passo..."
                placeholderTextColor="#8A8A8A"
                value={modoPreparo}
                onChangeText={setModoPreparo}
                multiline={true}
                textAlignVertical="top"
              />

              <View style={styles.botoesFormulario}>
                <View style={styles.botaoFormulario}>
                  <Button
                    title="Salvar"
                    color="#386641"
                    onPress={salvarReceita}
                  />
                </View>

                <View style={styles.botaoFormulario}>
                  <Button
                    title="Cancelar"
                    color="#C0392B"
                    onPress={cancelarCadastro}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Botão flutuante */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.7}
        onPress={abrirCadastro}
        accessibilityRole="button"
        accessibilityLabel="Adicionar nova receita"
      >
        <Text style={styles.fabTexto}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E7',
    paddingTop: 45
  },

  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'center'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 8,
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6A994E',
    marginBottom: 8,
    textAlign: 'center'
  },

  description: {
    fontSize: 14,
    color: '#6B4F3A',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 21
  },

  lista: {
    flex: 1,
    paddingHorizontal: 18
  },

  listaConteudo: {
    paddingBottom: 110
  },

  listaTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#386641',
    marginTop: 12,
    marginBottom: 8
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E0D5',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 10
  },

  cardDescricao: {
    fontSize: 14,
    color: '#6B4F3A',
    lineHeight: 21,
    marginBottom: 12
  },

  cardBotao: {
    alignSelf: 'flex-start',
    minWidth: 140
  },

  vazio: {
    color: '#6B4F3A',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 24
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 18
  },

  modalContent: {
    backgroundColor: '#FFF8E7',
    borderRadius: 18,
    padding: 22,
    maxHeight: '85%',
    elevation: 8
  },

  receitaTitulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#386641',
    textAlign: 'center',
    marginBottom: 22
  },

  secaoTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#D97706',
    marginTop: 12,
    marginBottom: 10
  },

  texto: {
    fontSize: 16,
    color: '#493629',
    lineHeight: 25
  },

  botaoModal: {
    marginTop: 20
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 8,
    marginTop: 12
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8D0C2',
    borderRadius: 9,
    padding: 12,
    fontSize: 16,
    color: '#493629'
  },

  inputMultiline: {
    minHeight: 100,
    maxHeight: 180
  },

  botoesFormulario: {
    marginTop: 22,
    marginBottom: 8,
    gap: 12
  },

  botaoFormulario: {
    borderRadius: 8,
    overflow: 'hidden'
  },

  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D97706',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },

  fabTexto: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'center'
  }
});