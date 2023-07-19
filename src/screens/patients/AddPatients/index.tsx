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
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true}
                          placeholder="@Example Carlos"
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>CPF: </Text>
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="000.000.000-00" 
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Data Nascimento: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Dia" 
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Mês" 
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Ano" 
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Matricola: </Text>
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true}
                          placeholder="000.00-0"
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true}
                          placeholder="(11) 1111 - 1111"
                          dataDetectorTypes='phoneNumber'
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Curso: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 190 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="@Example Sistemas"
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 90 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Turma"
                          value={username}/>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 10 }}>
              <Text style={{ ...styles.sectionText, width: 80 }}>Peso</Text>
              <Text style={{ ...styles.sectionText, width: 80, marginLeft: 30 }}>Idade</Text>
              <Text style={{ ...styles.sectionText, width: 95, marginLeft: 45 }}>Tip. Sanguineo</Text>
            </View>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Caracteristicas: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Kg"
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="00"
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="xx+"
                          value={username}/>
            </View>
          </View>

          <View style={styles.groupData}>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome: </Text>
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true}
                          placeholder="@Example Carlos"
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>CPF: </Text>
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="000.000.000-00" 
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Data Nascimento: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Dia" 
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Mês" 
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Ano" 
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Matricola: </Text>
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true}
                          placeholder="000.00-0"
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <TextInput style={{...styles.inputLabel, }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true}
                          placeholder="(11) 1111 - 1111"
                          dataDetectorTypes='phoneNumber'
                          value={username}/>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Curso: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 190 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="@Example Sistemas"
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 90 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Turma"
                          value={username}/>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 10 }}>
              <Text style={{ ...styles.sectionText, width: 80 }}>Peso</Text>
              <Text style={{ ...styles.sectionText, width: 80, marginLeft: 30 }}>Idade</Text>
              <Text style={{ ...styles.sectionText, width: 95, marginLeft: 45 }}>Tip. Sanguineo</Text>
            </View>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Caracteristicas: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="Kg"
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="00"
                          value={username}/>

              <TextInput style={{ ...styles.inputLabel, width: 85 }} 
                          placeholderTextColor={'gray'}
                          selectionColor={'#00C2FF'} 
                          selectTextOnFocus = {true} 
                          placeholder="xx+"
                          value={username}/>
            </View>
          </View>
        </View>

        <View style={{ width: 1045, height: 180, backgroundColor: '#007AFF', borderRadius: 10 }}>

        </View>

      </View>
    </View>
  );
}