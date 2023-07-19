import { styles } from './styles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../@types/RootStackParamList';
import { RadioButton } from 'react-native-paper';

type Props = NativeStackScreenProps<RootStackParamList>;

export function AddPatients({ navigation }: Props): JSX.Element {

  const [username] = useState();
  const [gender, setGender] = useState('male'); // Estado para controlar a seleção do gênero

  const handleGenderChange = (value) => {
    setGender(value);
  };

  return (
    <View style={styles.body}>
      <SideBarNavigation navigation={navigation} />

      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Cadastrar Pacientes</Text>
        </View>


        <View style={{ flexDirection: 'row' }}>

          <View style={styles.groupData}>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Example Carlos"
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>CPF: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="000.000.000-00"
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Data Nascimento: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="Dia"
                value={username} />

              <TextInput style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="Mês"
                value={username} />

              <TextInput style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="Ano"
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Matricola: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="000.00-0"
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="(11) 1111 - 1111"
                dataDetectorTypes='phoneNumber'
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Curso: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 190 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Example Sistemas"
                value={username} />

              <TextInput style={{ ...styles.inputLabel, width: 90 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="Turma"
                value={username} />
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 10 }}>
              <Text style={{ ...styles.sectionText, width: 80 }}>Peso</Text>
              <Text style={{ ...styles.sectionText, width: 80, marginLeft: 30 }}>Altura</Text>
              <Text style={{ ...styles.sectionText, width: 95, marginLeft: 45 }}>Tip. Sanguineo</Text>
            </View>
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Caracteristicas: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="Kg"
                value={username} />

              <TextInput style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="0,00"
                value={username} />

              <TextInput style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="xx+"
                value={username} />
            </View>

            {/* Radio button para gênero masculino */}

            <View style={{ ...styles.sectionInput, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.sectionText}>Sexo:</Text>

              <Text style={{ ...styles.sectionText, }}>Masculino</Text>
              <RadioButton
                value="male"
                status={gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => handleGenderChange('male')} />

              <Text style={{ ...styles.sectionText, margin: 0 }}>Feminino</Text>
              <RadioButton
                value="female"
                status={gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => handleGenderChange('female')} />
            </View>

          </View>
          {/*-------------------------------------------------------------- */}


          {/*-------------------------------------------------------------- */}

          <View style={styles.groupData}>

          <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Cartão SUS: </Text>
              <TextInput style={{ ...styles.inputLabel }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="000 0000 0000 0000"
                selectionColor='#FFFFFF'
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome do responsável: </Text>
              <TextInput style={{ ...styles.inputLabel }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Caso tenha"
                selectionColor='#FFFFFF'
                value={username} />
            </View>


            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone responsável: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="(00) 0000-0000"
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="(11) 1111 - 1111"
                dataDetectorTypes='phoneNumber'
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Curso: </Text>
              <TextInput style={{ ...styles.inputLabel, width: 190 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Example Sistemas"
                value={username} />

              <TextInput style={{ ...styles.inputLabel, width: 90 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="Turma"
                value={username} />
            </View>
          </View>
        </View>

        <View style={{ width: 1045, 
                      height: 150, 
                      borderRadius: 10, 
                      borderStyle: 'solid', 
                      borderColor: 'black',
                      borderWidth: 2,
                      margin: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0)'}}>

          <Text style={{color: 'black', fontWeight: 600, margin: 10, fontSize: 19}}>Endereço:</Text>

        </View>

      </View>
    </View>
  );
}