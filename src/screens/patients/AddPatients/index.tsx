import { styles } from './styles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../@types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList>;

export function AddPatients({ navigation }: Props): JSX.Element {

  const [username] = useState();

  return (
    <View style={styles.body}>
      <SideBarNavigation navigation={navigation} />

      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Cadastrar Pacientes</Text>
        </View>


        <View style={{ flexDirection: 'row'}}>
          <View style={styles.groupData}>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="@Example Carlos" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>CPF: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="000.000.000-00" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Data Nascimento: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="Dia" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="Mês" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="Ano" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Matricola: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="000.00-0" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="(11) 1111 - 1111" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Curso: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 190 }} value={username} placeholder="@Example Sistemas" />
              <TextInput style={{ ...styles.inputLabel, width: 90 }} value={username} placeholder="Turma" />
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 10 }}>
              <Text style={{ ...styles.sectionText, width: 80 }}>Peso</Text>
              <Text style={{ ...styles.sectionText, width: 80, marginLeft: 30 }}>Idade</Text>
              <Text style={{ ...styles.sectionText, width: 95, marginLeft: 45 }}>Tip. Sanguineo</Text>
            </View>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Caracteristicas: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="kg" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="anos" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="xx+" />
            </View>
          </View>

          <View style={styles.groupData}>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="@Example Carlos" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>CPF: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="000.000.000-00" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Data Nascimento: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="Dia" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="Mês" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="Ano" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Matricola: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="000.00-0" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <TextInput style={styles.inputLabel} value={username} placeholder="(11) 1111 - 1111" />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Curso: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 190 }} value={username} placeholder="@Example Sistemas" />
              <TextInput style={{ ...styles.inputLabel, width: 90 }} value={username} placeholder="Turma" />
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 10 }}>
              <Text style={{ ...styles.sectionText, width: 80 }}>Peso</Text>
              <Text style={{ ...styles.sectionText, width: 80, marginLeft: 30 }}>Idade</Text>
              <Text style={{ ...styles.sectionText, width: 95, marginLeft: 45 }}>Tip. Sanguineo</Text>
            </View>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Caracteristicas: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="kg" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="anos" />
              <TextInput style={{ ...styles.inputLabel, width: 85 }} value={username} placeholder="xx+" />
            </View>
          </View>
        </View>

        <View style={{ width: 1045, height: 180, backgroundColor: '#007AFF', borderRadius: 10 }}>

        </View>

      </View>
    </View>
  );
}