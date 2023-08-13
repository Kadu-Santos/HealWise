import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HOME_LOGO from "../../assets/Logo.png";
import { styles } from "./styles";
import { RootStackParamList } from '../../@types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Cards'>;

export function SideBarNavigation({ navigation }: Props): JSX.Element {
  let handleNavigation = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.logoContainer}>
        <Image source={HOME_LOGO} style={styles.logo} />
        <Text style={styles.logoText}> HealWise </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.section}>Atendimento</Text>

        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Files')}>
          <Text style={styles.itemText}>Fichas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={() => handleNavigation('Forwarding')}>
          <Text style={styles.itemText}>Encamin. ao Hospital</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
         <Text style={styles.section}>Gerenciar Pacientes</Text>

        <TouchableOpacity style={styles.touch} onPress={() => handleNavigation("AddPatients")}>
          <Text style={styles.itemText}>Adicionar Pacientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={() => handleNavigation('AddServer')}>
          <Text style={styles.itemText}>Adicionar Servidor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={() => handleNavigation('Search')}>
          <Text style={styles.itemText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
         <Text style={styles.section}>Cartão de Vacinação</Text>

         <TouchableOpacity style={styles.touch} onPress={() => handleNavigation("Cards")}>
            <Text style={styles.itemText}>Gerenciar Cartões</Text>
        </TouchableOpacity>
       </View>

       <View style={styles.item}>
         <Text style={styles.section}>Relatórios</Text>

         <TouchableOpacity style={styles.touch} onPress={() => handleNavigation("NewReport")}>
            <Text style={styles.itemText}>Gerar Relatório</Text>
        </TouchableOpacity>
       </View>

       <View style={styles.item}>
         <Text style={styles.section}>Gerenciar Usuários</Text>

         <TouchableOpacity style={styles.touch} onPress={() => handleNavigation("AddUser")}>
            <Text style={styles.itemText}>Adicionar Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={() => handleNavigation("Alter")}>
            <Text style={styles.itemText}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={() => handleNavigation("ActivateDeactivate")}>
            <Text style={styles.itemText}>Ativar/Inativar</Text>
        </TouchableOpacity>
       </View>

       <View style={styles.item}>
         <Text style={styles.section}>Cursos</Text>

         <TouchableOpacity style={styles.touch} onPress={() => handleNavigation("ManageCourse")}>
            <Text style={styles.itemText}>Gerenciar Cursos</Text>
        </TouchableOpacity>
       </View>

    </SafeAreaView>
  );
}