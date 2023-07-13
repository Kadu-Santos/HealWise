import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import HOME_LOGO from "../../assets/Logo.png";
import { styles } from "./styles";
import { ItemList } from '../ItemList';

type SideBarProps = {
  itemSelect: number;
};

export function SideBarNavigation({itemSelect}:SideBarProps): JSX.Element {

  let listActive = Array(11).fill(false);
  
  if (itemSelect >= 0 && itemSelect <= 10) {
    listActive[itemSelect] = true;
  }

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
        <Image source={HOME_LOGO} style={styles.logo} />
        <Text style={styles.logoText}> HealWise </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.section}>Atendimento</Text>
        <ItemList active={listActive[0]} label="Fichas"></ItemList>
        <ItemList active={listActive[1]} label="Encamin. ao Hospital"></ItemList>
      </View>

      <View style={styles.item}>
        <Text style={styles.section}>Gerenciar Pacientes</Text>
        <ItemList active={listActive[2]} label="Adicionar Pacientes"></ItemList>
        <ItemList active={listActive[3]} label="Adicionar Servidor"></ItemList>
        <ItemList active={listActive[4]} label="Pesquisar"></ItemList>
      </View>

      <View style={styles.item}>
        <Text style={styles.section}>Cartão de Vacinação</Text>
        <ItemList active={listActive[5]} label="Gerenciar Cartões"></ItemList>
      </View>

      <View style={styles.item}>
        <Text style={styles.section}>Relatórios</Text>
        <ItemList active={listActive[6]} label="Gerar Relatório"></ItemList>
      </View>

      <View style={styles.item}>
        <Text style={styles.section}>Gerenciar Usuários</Text>
        <ItemList active={listActive[7]} label="Adicionar Usuário"></ItemList>
        <ItemList active={listActive[8]} label="Adicionar Alterar"></ItemList>
        <ItemList active={listActive[9]} label="Ativar/Inativar"></ItemList>
      </View>

      <View style={styles.item}>
        <Text style={styles.section}>Cursos</Text>
        <ItemList active={listActive[10]} label="Gerenciar Cursos"></ItemList>
      </View>

    </SafeAreaView>
  );
}