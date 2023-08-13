import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from 'react';
import { styles } from './styles';
import { RadioButton } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../@types/RootStackParamList';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import { createPatient } from "./scripts"
import { dataForm } from "../../../@types/dataForm";

type Props = NativeStackScreenProps<RootStackParamList>;

export function AddPatients({ navigation }: Props): JSX.Element {

  const [message, setMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      cpf: '',

      birthDay: '',
      birthMonth: '',
      birthYear: '',

      enrollmentNumber: '',
      phone: '',
      courses: '',
      classe: '',
      healthPlan: '',
      guardianName: '',
      guardianPhone: '',
      weight: '',
      height: '',
      bloodType: '',
      gender: 'M',
      susCardNumber: '',
      regime: '',
      
      number: '',
      street: '',
      district: '',
      city: '',
      state: '',
      dwellingType: '1',
    }
  });

  const onSubmit = (data: dataForm) => {
    createPatient(data)
      .then(response => {
        setMessage('Dados gravados com sucesso.');
        setIsMessageVisible(true);
        reset();
        setTimeout(() => {
          setIsMessageVisible(false);
        }, 3000);
      })
      .catch(error => {
        setMessage('Erro! Confira os dados e tente novamente.');
        setIsMessageVisible(true);
        setTimeout(() => {
          setIsMessageVisible(false);
        }, 3000);
      });
  };

  return (
    <View style={styles.body}>
      <SideBarNavigation navigation={navigation} />

      <View style={styles.section}>
        {/* Titulo da página */}
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Cadastrar Pacientes</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          {/* Menssagem de Sucesso ou Erro ao salvalr os dados */}
          {isMessageVisible && (
            <View style={{ 
              position: 'absolute',
              zIndex: 1, 
              top: '50%', 
              width: '80%', 
              backgroundColor: message.includes('Erro') ? 'red' : 'green', 
              padding: 10,
              borderRadius: 10 }}>
              <Text style={{ color: 'white', fontSize: 60, textAlign:'center' }}>{message}</Text>
            </View>
          )}

          <View style={styles.groupData}>
            {/* Nome */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome: </Text>
              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.inputLabel}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="@Example Carlos"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="name" />
              {errors.name && <Text style={styles.require}>*</Text>}
            </View>

            {/* CPF */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>CPF: </Text>
              <Controller
                control={control}
                rules={{
                  pattern: {
                    value: /^\d{3}\d{3}\d{3}\d{2}$/,
                    message: "CPF inválido"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputLabel}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="000.000.000-00"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    maxLength={11}
                    keyboardType="numeric" // Definir o teclado como numérico
                  />
                )}
                name="cpf"
              />
              {errors.cpf && <Text style={styles.require}>*</Text>}

            </View>

            {/* Data de Nascimento */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Data Nascimento: </Text>
              <View style={{ flexDirection: 'row' }}>
                <Controller control={control} 
                rules={{ 
                  required: true,
                  pattern: {
                    value: /^(0?[1-9]|[12][0-9]|3[01])$/, // Aceita números de 1 a 31
                    message: "Dia inválido"
                  } 
                }} 
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Dia"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    maxLength={2}
                    value={value}
                  />
                )} name="birthDay" />

                <Controller control={control} 
                rules={{
                  required: true,
                  pattern: {
                    value: /^(0?[1-9]|1[0-2])$/,
                    message: "Mês inválido"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Mês"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    maxLength={2}
                    value={value}
                  />
                )} name="birthMonth" />

                <Controller control={control} 
                rules={{
                  required: true,
                  pattern: {
                    value: /^(19[2-9][0-9]|20[0-9][0-9]|29[0-9][0-9])$/,
                    message: "Ano inválido"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Ano"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    maxLength={4}
                    value={value}
                  />
                )} name="birthYear" />
              </View>
              {errors.birthDay && <Text style={styles.require}>*</Text>}
              {errors.birthMonth && <Text style={styles.require}>*</Text>}
              {errors.birthYear && <Text style={styles.require}>*</Text>}
            </View>

            {/* Número  de matrícola */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Matrícula: </Text>
              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="000.00-0"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="enrollmentNumber" />
              {errors.enrollmentNumber && <Text style={styles.require}>*</Text>}
            </View>

            {/* Telefone */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <Controller control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: "Telefone inválido"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (

                  <TextInput
                    style={{ ...styles.inputLabel }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="(11) 1111 - 1111"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    maxLength={11}
                    value={value}
                  />
                )} name="phone" />
              {errors.phone && <Text style={styles.require}>*</Text>}
            </View>
            
            {/* Curso */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Curso: </Text>
              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel, width: 190 }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="@Example Sistemas"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="courses" />

              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel, width: 90 }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="Turma"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="classe" />
              {errors.courses && <Text style={styles.require}>*</Text>}
              {errors.classe && <Text style={styles.require}>*</Text>}
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 10 }}>
              <Text style={{ ...styles.sectionText, width: 80 }}>Peso</Text>
              <Text style={{ ...styles.sectionText, width: 80, marginLeft: 30 }}>Altura</Text>
              <Text style={{ ...styles.sectionText, width: 95, marginLeft: 45 }}>Tip. Sanguineo</Text>
            </View>

            <View style={styles.sectionInput}>
              {/* Peso */}
              <Text style={styles.sectionText}>Características: </Text>
              <Controller control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^(\d+(\.\d{1,2})?)?$/,
                    message: "Peso inválido"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Kg"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )} name="weight" />

              {/* Altura */}
              <Controller control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/,
                    message: "Altura inválida"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="0,00"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )} name="height" />

              {/* Tipo Sanguineo */}
              <Controller
                control={control}
                rules={{
                  pattern: {
                    value: /^[ABO][+-]$|^[AB][AB]$|^[O][+-]$/,
                    message: "Tipo sanguíneo inválido"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Tipo"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    maxLength={3} // Limitar o comprimento do campo
                    autoCapitalize="characters" // Colocar as letras em maiúsculo automaticamente
                  />
                )}
                name="bloodType"
              />

              {errors.weight && <Text style={styles.require}>*</Text>}
              {errors.height && <Text style={styles.require}>*</Text>}
              {errors.bloodType && <Text style={styles.require}>*</Text>}
            </View>

            <View style={{ ...styles.sectionInput, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ ...styles.sectionText, marginRight: 20 }}>Sexo:</Text>

              {/* Opção "Masculino" */}
              <Controller control={control} render={({ field: { onChange, value } }) => (
                <RadioButton
                  value="M"
                  status={value === 'M' ? 'checked' : 'unchecked'}
                  onPress={() => onChange('M')} />
              )} name="gender" />
              <Text style={styles.sectionTextRadio}>Masculino</Text>

              {/* Opção "Feminino" */}
              <Controller control={control} render={({ field: { onChange, value } }) => (
                <RadioButton
                  value="F"
                  status={value === 'F' ? 'checked' : 'unchecked'}
                  onPress={() => onChange('F')} />
              )} name="gender" />
              <Text style={styles.sectionTextRadio}>Feminino</Text>
            </View>

          </View>

          <View style={styles.groupData}>
            {/* Nº Cartão SUS */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nº Cartão SUS: </Text>
              <Controller
                control={control}
                rules={{
                  pattern: {
                    value: /^\d{3}\d{4}\d{4}\d{4}$/,
                    message: "Número do cartão do SUS inválido"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputLabel}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="000 0000 0000 0000"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    maxLength={15}
                  />
                )}
                name="susCardNumber"
              />
              {errors.susCardNumber && <Text style={styles.require}>*</Text>}

            </View>

            {/* Nome do responsável */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome do responsável: </Text>
              <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="@Caso tenha"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="guardianName" />
            </View>

            {/* Telefone responsável */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone responsável: </Text>
              <Controller 
              control={control}
              rules={{
                pattern: {
                  value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Telefone inválido"
                }
              }} 
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="(00) 0000-0000"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  maxLength={11}
                  value={value}
                />
              )} name="guardianPhone" />
            {errors.guardianPhone && <Text style={styles.require}>*</Text>}
            </View>

            {/* Tipo de Moradia */}
            <Text style={{ ...styles.sectionText, marginTop: 20, width: 120 }}>Moradia:</Text>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="1"
                    status={value === '1' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('1')} />
                )} name="dwellingType" />
                <Text style={styles.sectionTextRadio}>Com os Pais</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="2"
                    status={value === '2' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('2')} />
                )} name="dwellingType" />
                <Text style={styles.sectionTextRadio}>Parentes</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="3"
                    status={value === '3' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('3')} />
                )} name="dwellingType" />
                <Text style={styles.sectionTextRadio}>Escola</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="4"
                    status={value === '4' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('4')} />
                )} name="dwellingType" />
                <Text style={styles.sectionTextRadio}>República</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="5"
                    status={value === '5' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('5')} />
                )} name="dwellingType" />
                <Text style={styles.sectionTextRadio}>Outro</Text>
              </View>
            </View>

            <View style={{ ...styles.sectionInput, flexDirection: 'row', marginTop: 20 }}>
              {/* Tipo de Regime */}
              <Text style={{ ...styles.sectionText, marginRight: 12 }}>Regime:</Text>

              <Controller control={control} render={({ field: { onChange, value } }) => (
                <RadioButton
                  value="IN"
                  status={value === 'IN' ? 'checked' : 'unchecked'}
                  onPress={() => onChange('IN')} />
              )} name="regime" />
              <Text style={{ ...styles.sectionTextRadio, width: 60 }}>Interno</Text>

              <Controller control={control} render={({ field: { onChange, value } }) => (
                <RadioButton
                  value="EX"
                  status={value === 'EX' ? 'checked' : 'unchecked'}
                  onPress={() => onChange('EX')} />
              )} name="regime" />
              <Text style={{ ...styles.sectionTextRadio, width: 60 }}>Externo</Text>

              <Controller control={control} render={({ field: { onChange, value } }) => (
                <RadioButton
                  value="SI"
                  status={value === 'SI' ? 'checked' : 'unchecked'}
                  onPress={() => onChange('SI')} />
              )} name="regime" />
              <Text style={{ ...styles.sectionTextRadio, width: 60 }}>Semi interno</Text>
            </View>

          </View>
        </View>

        <View style={{ width: 1045, height: 150, borderWidth: 2, margin: 0, }}>
          <View style={styles.sectionInput}>
            {/* Rua */}
            <Text style={styles.sectionText}>Rua: </Text>
            <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{ ...styles.inputLabel, width: 250 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Rua Exemple"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} name="street" />
            {errors.street && <Text style={styles.require}>*</Text>}

            {/* Número */}
            <Text style={{ ...styles.sectionText, marginLeft: -60 }}>Nº: </Text>
            <Controller control={control} 
            rules={{ required: true ,
              pattern: {
                value: /^[0-9]+$/,
                message: "Este campo aceita apenas números"
              }
            }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="000"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={5}
                keyboardType="numeric" // Defina o teclado como numérico para digitar apenas números
              />
            )} name="number" />
            {errors.number && <Text style={styles.require}>*</Text>}

            {/* Bairro */}
            <Text style={{ ...styles.sectionText, marginLeft: 25 }}>Bairro: </Text>
            <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{ ...styles.inputLabel }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Example Vale Sul"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} name="district" />
            {errors.district && <Text style={styles.require}>*</Text>}
          </View>

          <View style={styles.sectionInput}>
            {/* Cidade */}
            <Text style={styles.sectionText}>Cidade: </Text>
            <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{ ...styles.inputLabel, width: 250 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@Florianópolis"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} name="city" />
            {errors.city && <Text style={styles.require}>*</Text>}

            {/* UF */}
            <Text style={{ ...styles.sectionText, marginLeft: -60 }}>UF: </Text>
            <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="@MG"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} name="state" />
            {errors.state && <Text style={styles.require}>*</Text>}

            {/* Nome do plano Saúde */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Nome do plano Saúde: </Text>
              <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="@Caso tenha"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="healthPlan" />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={{ ...styles.butt, backgroundColor: 'green' }} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.butt, backgroundColor: 'red' }} onPress={() => reset()}>
            <Text style={styles.buttText}>Limpar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}