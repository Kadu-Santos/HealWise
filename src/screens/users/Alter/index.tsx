import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import ERRO from '../../../assets/Error.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../@types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList>;

export function Alter({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.body}>
      <SideBarNavigation navigation={navigation}/>

      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Alterar</Text>
        </View>
        <Image source={ERRO} style={styles.logoError} />
      </View>
    </View>
  );
}