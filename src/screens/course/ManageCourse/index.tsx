import React from 'react';
import { styles } from "./styles";
import { View, Text, Image } from 'react-native';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import ERRO from "../../../assets/Error.png";
import { RootStackParamList } from '../../../@types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

export function ManageCourse({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.body}>
      
      <SideBarNavigation navigation={navigation}/>

      <View style = {styles.section}> 
        <View style = {styles.sectionTitle}>
          <Text style = {styles.title}>Gerenciar Cursos</Text>
        </View>
        <Image source={ERRO} style={styles.logoError} />
      </View>
      
    </View>
  );
}