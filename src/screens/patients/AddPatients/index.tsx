import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { RadioButton } from 'react-native-paper';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../@types/RootStackParamList';
import { SideBarNavigation } from '../../../components/SideBarNavigation';
import React from 'react';

type Props = NativeStackScreenProps<RootStackParamList>;

export function AddPatients({ navigation }: Props): JSX.Element {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      cpf: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      studentNumber: '',
      phone: '',
      course: '',
      class: '',
      weight: '',
      value: '',
      bloodType: '',
      susCardNumber: '',
      responsavelName: '',
      responsavelTelefone: '',
      gender: '',
      moradia: '',
      regime: '',
      road: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      planhealth: ''
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <View style={styles.body}>
      <SideBarNavigation navigation={navigation} />

      <View style={styles.section}>
        {/* Titulo da página */}
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Cadastrar Pacientes</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
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
              )} name="firstName" />
              {errors.firstName && <Text>This is required.</Text>}
            </View>

            {/* CPF */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>CPF: </Text>
              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.inputLabel}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="000.000.000-00"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="cpf" />
              {errors.cpf && <Text>This is required.</Text>}
            </View>

            {/* Data de Nascimento */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Data Nascimento: </Text>
              <View style={{ flexDirection: 'row' }}>
                <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Dia"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )} name="birthDay" />

                <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Mês"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )} name="birthMonth" />

                <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ ...styles.inputLabel, width: 85 }}
                    placeholderTextColor={'gray'}
                    selectionColor={'#00C2FF'}
                    selectTextOnFocus={true}
                    placeholder="Ano"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )} name="birthYear" />
              </View>
              {errors.birthDay && <Text>This field is required.</Text>}
              {errors.birthMonth && <Text>This field is required.</Text>}
              {errors.birthYear && <Text>This field is required.</Text>}
            </View>

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
              )} name="studentNumber" />
              {errors.studentNumber && <Text>This field is required.</Text>}
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone: </Text>
              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="(11) 1111 - 1111"
                  dataDetectorTypes='phoneNumber'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="phone" />
              {errors.phone && <Text>This field is required.</Text>}
            </View>

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
              )} name="course" />

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
              )} name="class" />
              {errors.course && <Text>This field is required.</Text>}
              {errors.class && <Text>This field is required.</Text>}
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 10 }}>
              <Text style={{ ...styles.sectionText, width: 80 }}>Peso</Text>
              <Text style={{ ...styles.sectionText, width: 80, marginLeft: 30 }}>Altura</Text>
              <Text style={{ ...styles.sectionText, width: 95, marginLeft: 45 }}>Tip. Sanguineo</Text>
            </View>

            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Características: </Text>
              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
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

              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
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
              )} name="value" />

              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel, width: 85 }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="xx+"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="bloodType" />

              {errors.weight && <Text>This field is required.</Text>}
              {errors.value && <Text>This field is required.</Text>}
              {errors.bloodType && <Text>This field is required.</Text>}
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
              <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="000 0000 0000 0000"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="susCardNumber" />
              {errors.susCardNumber && <Text>This field is required.</Text>}
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
              )} name="responsavelName" />
            </View>

            {/* Telefone responsável */}
            <View style={styles.sectionInput}>
              <Text style={styles.sectionText}>Telefone responsável: </Text>
              <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ ...styles.inputLabel }}
                  placeholderTextColor={'gray'}
                  selectionColor={'#00C2FF'}
                  selectTextOnFocus={true}
                  placeholder="(00) 0000-0000"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )} name="responsavelTelefone" />
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
                )} name="moradia" />
                <Text style={styles.sectionTextRadio}>Com os Pais</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="2"
                    status={value === '2' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('2')} />
                )} name="moradia" />
                <Text style={styles.sectionTextRadio}>Parentes</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="3"
                    status={value === '3' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('3')} />
                )} name="moradia" />
                <Text style={styles.sectionTextRadio}>Escola</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="4"
                    status={value === '4' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('4')} />
                )} name="moradia" />
                <Text style={styles.sectionTextRadio}>República</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Controller control={control} render={({ field: { onChange, value } }) => (
                  <RadioButton
                    value="5"
                    status={value === '5' ? 'checked' : 'unchecked'}
                    onPress={() => onChange('5')} />
                )} name="moradia" />
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
            )} name="road" />
            {errors.road && <Text>This field is required.</Text>}

            {/* Número */}
            <Text style={{ ...styles.sectionText, marginLeft: -60 }}>Nº: </Text>
            <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{ ...styles.inputLabel, width: 85 }}
                placeholderTextColor={'gray'}
                selectionColor={'#00C2FF'}
                selectTextOnFocus={true}
                placeholder="000"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric" // Defina o teclado como numérico para digitar apenas números
              />
            )} name="number" />
            {errors.number && <Text>This field is required.</Text>}

            {/* Bairro */}
            <Text style={styles.sectionText}>Bairro: </Text>
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
            )} name="neighborhood" />
            {errors.neighborhood && <Text>This field is required.</Text>}
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
            {errors.city && <Text>This field is required.</Text>}

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
            {errors.state && <Text>This field is required.</Text>}

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
              )} name="planhealth" />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{...styles.butt, backgroundColor: 'green'}}  onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.butt, backgroundColor: 'red'}}>
            <Text style={styles.buttText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}