import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import TRASH from '../../../assets/trash.svg';
import PENCIL from '../../../assets/pencil.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getPatients, dellPatient } from "./scripts"
import { RootStackParamList } from '../../../@types/RootStackParamList';
import { dataForm } from '../../../@types/dataForm';


type Props = NativeStackScreenProps<RootStackParamList>;
export function Search({ navigation }: Props): JSX.Element {

  const [patients, setPatients] = useState<dataForm[]>([]);

  useEffect(() => {
    getPatients()
      .then(response => {
        const patientsData = response.data;
        setPatients(patientsData);
      })
      .catch(error => {
        console.error('Erro ao buscar pacientes:', error);
      });
  }, []);

  const deletUser = async (userId: number) => {
    
    dellPatient(userId).then(response => {
      //Colocar mendagem de sucesso ao excluir.
    })
    .catch(error => {
      //Tratar possíveis erros.
    });

    getPatients().then(response => {
      const patientsData = response.data;
      //Atualizando lista após alterações
      setPatients(patientsData);
    })
    .catch(error => {
      //Tratar possíveis erros.
    });
  }

  return (
    <View style={styles.body}>
      <SideBarNavigation navigation={navigation} />

      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Pesquisar</Text>
        </View>

        <View style={styles.sectionHeader}>
          <View style={{ ...styles.textBox, width: '5%', borderLeftWidth: 0 }}>
            <Text style={styles.textHeader}>Id</Text>
          </View>
          <View style={{ ...styles.textBox, width: '23%' }}>
            <Text style={styles.textHeader}>Nome</Text>
          </View>
          <View style={{ ...styles.textBox, width: '19%' }}>
            <Text style={styles.textHeader}>CPF</Text>
          </View>
          <View style={{ ...styles.textBox, width: '19%' }}>
            <Text style={styles.textHeader}>Telefone</Text>
          </View>
          <View style={{ ...styles.textBox, width: '19%' }}>
            <Text style={styles.textHeader}>Curso</Text>
          </View>
          <View style={{ ...styles.textBox, width: '12%' }}>
            <Text style={styles.textHeader}>Turma</Text>
          </View>
        </View>
        <View style={styles.line} />

        <FlatList data={patients}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.patientItemBox}>
              <View style={{ ...styles.ItemBox, width: '5%', borderLeftWidth: 0 }}>
                <Text style={styles.textItem}>{item.id}</Text>
              </View>

              <View style={{ ...styles.ItemBox, width: '23%' }}>
                <Text style={styles.textItem}>{item.name}</Text>
              </View>

              <View style={{ ...styles.ItemBox, width: '19%' }}>
                <Text style={styles.textItem}>{item.cpf}</Text>
              </View>

              <View style={{ ...styles.ItemBox, width: '19%' }}>
                <Text style={styles.textItem}>{item.phone}</Text>
              </View>

              <View style={{ ...styles.ItemBox, width: '19%' }}>
                <Text style={styles.textItem}>{item.courses}</Text>
              </View>

              <View style={{ ...styles.ItemBox, width: '10%', marginLeft:10 }}>
                <Text style={styles.textItem}>{item.classe}</Text>
              </View>


              <View style={{ ...styles.ItemBox, width: '5.5%', flexDirection: 'row'}}>
                <TouchableOpacity style={{...styles.button, backgroundColor: '#008FFF'}}>
                  <Image source={PENCIL} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => deletUser(item.id)}>
                  <Image source={TRASH} style={styles.image}/>
                </TouchableOpacity>
              </View>

            </View>
          )}
        />

      </View>
    </View>
  );
}