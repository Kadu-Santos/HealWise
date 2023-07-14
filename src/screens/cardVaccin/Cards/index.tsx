import React from 'react';
import { styles } from "./styles";
import { View, Text, Image } from 'react-native';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import ERRO from "../../../assets/Error.png";

export function Cards(): JSX.Element {
  return (
    <View style={styles.body}>
      
      <SideBarNavigation itemSelect={6}/>

      <View style = {styles.section}> 
        <View style = {styles.sectionTitle}>
          <Text style = {styles.title}>Gerenciar Cartões </Text>
        </View>
        <Image source={ERRO} style={styles.logoError} />
      </View>
      
    </View>
  );
}