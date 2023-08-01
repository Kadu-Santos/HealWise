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
  const [moradia, setMoradia] = useState('com_pais');
  const [regime, setRegime] = useState('interno');

  const handleRegimeChange = (selectedRegime) => {
    setRegime(selectedRegime);
  };

  const handleMoradiaChange = (selectedMoradia) => {
    setMoradia(selectedMoradia);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleSave = () => {
    // Lógica para salvar os dados
    console.log('Dados salvos!');
  };

  const handleCancel = () => {
    // Lógica para cancelar e voltar à tela anterior
    console.log('Cancelado!');
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

            <View style={{ ...styles.sectionInput, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ ...styles.sectionText, marginRight: 20 }}>Sexo:</Text>

              <RadioButton
                value="male"
                status={gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => handleGenderChange('male')} />
              <Text style={styles.sectionTextRadio}>Masculino</Text>

              <RadioButton
                value="female"
                status={gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => handleGenderChange('female')} />
              <Text style={styles.sectionTextRadio}>Feminino</Text>
            </View>

          </View>

          <View style={styles.groupData}>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Cartão SUS: </Text>
              <TextInput style={{ ...styles.inputLabel }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="000 0000 0000 0000"
                value={username} />
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome do responsável: </Text>
              <TextInput style={{ ...styles.inputLabel }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Caso tenha"
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

            <Text style={{ ...styles.sectionText, marginTop: 20, width: 120 }}>Moradia:</Text>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="com_pais"
                  status={moradia === 'com_pais' ? 'checked' : 'unchecked'}
                  onPress={() => handleMoradiaChange('com_pais')}
                />
                <Text style={styles.sectionTextRadio}>Com os Pais</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="parentes"
                  status={moradia === 'parentes' ? 'checked' : 'unchecked'}
                  onPress={() => handleMoradiaChange('parentes')}
                />
                <Text style={styles.sectionTextRadio}>Parentes</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="escola"
                  status={moradia === 'escola' ? 'checked' : 'unchecked'}
                  onPress={() => handleMoradiaChange('escola')}
                />
                <Text style={styles.sectionTextRadio}>Escola</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="republica"
                  status={moradia === 'republica' ? 'checked' : 'unchecked'}
                  onPress={() => handleMoradiaChange('republica')}
                />
                <Text style={styles.sectionTextRadio}>República</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="outro"
                  status={moradia === 'outro' ? 'checked' : 'unchecked'}
                  onPress={() => handleMoradiaChange('outro')}
                />
                <Text style={styles.sectionTextRadio}>Outro</Text>
              </View>
            </View>

            <View style={{ ...styles.sectionInput, flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ ...styles.sectionText, marginRight: 12 }}>Regime:</Text>

              <RadioButton
                value="interno"
                status={regime === 'interno' ? 'checked' : 'unchecked'}
                onPress={() => handleRegimeChange('interno')}
              />
              <Text style={{ ...styles.sectionTextRadio, width: 60 }}>Interno</Text>

              <RadioButton
                value="externo"
                status={regime === 'externo' ? 'checked' : 'unchecked'}
                onPress={() => handleRegimeChange('externo')}
              />
              <Text style={{ ...styles.sectionTextRadio, width: 60 }}>Externo</Text>

              <RadioButton
                value="semi_interno"
                status={regime === 'semi_interno' ? 'checked' : 'unchecked'}
                onPress={() => handleRegimeChange('semi_interno')}
              />
              <Text style={{ ...styles.sectionTextRadio, width: 60 }}>Semi interno</Text>
            </View>

          </View>
        </View>

        <View style={{
          width: 1045,
          height: 150,
          borderWidth: 2,
          margin: 0,
        }}>

          <View style={styles.sectionInput}>
            <Text style={styles.sectionText}>Rua: </Text>
            <TextInput style={{ ...styles.inputLabel, width: 250 }}
              placeholderTextColor={'gray'}
              selectionColor={'#00C2FF'}
              selectTextOnFocus={true}
              placeholder="@Rua Exemple"
              value={username} />

            <Text style={{ ...styles.sectionText, marginLeft: -60 }}>Nº: </Text>
            <TextInput style={{ ...styles.inputLabel, width: 85 }}
              placeholderTextColor={'gray'}
              selectionColor={'#00C2FF'}
              selectTextOnFocus={true}
              placeholder="000"
              value={username} />

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Bairro: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Example Vale Sul"
                value={username} />
            </View>
          </View>

          <View style={styles.sectionInput}>
            <Text style={styles.sectionText}>Cidade: </Text>
            <TextInput style={{ ...styles.inputLabel, width: 250 }}
              placeholderTextColor={'gray'}
              selectionColor={'#00C2FF'}
              selectTextOnFocus={true}
              placeholder="@Florianópolis"
              value={username} />

            <Text style={{ ...styles.sectionText, marginLeft: -60 }}>UF: </Text>
            <TextInput style={{ ...styles.inputLabel, width: 85 }}
              placeholderTextColor={'gray'}
              selectionColor={'#00C2FF'}
              selectTextOnFocus={true}
              placeholder="@MG"
              value={username} />

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome do plano Saúde: </Text>
              <TextInput style={{ ...styles.inputLabel, }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Caso tenha"
                value={username} />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{...styles.butt, backgroundColor: 'green'}} onPress={handleSave}>
            <Text style={styles.buttText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.butt, backgroundColor: 'red'}} onPress={handleCancel}>
            <Text style={styles.buttText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}