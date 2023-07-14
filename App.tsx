import React from 'react';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Cards } from './src/screens/cardVaccin/Cards';
import { ManageCourse } from './src/screens/course/ManageCourse';

type RootStackParamList = {
  Cards: undefined;
  ManageCourse: undefined;
  // AddPatients: undefined;
  // AddServer: undefined;
  // Search: undefined;
  // NewReport: undefined;
  // Files: undefined;
  // Forwarding: undefined;
  // ActivateDeactivate: undefined;
  // AddUser: undefined;
  // Alter: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function Home({ navigation }: Props) {
  
  const handleNavigation = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ backgroundColor: '#000' }}>
      {/* Header and other content here */}
      <Button
        title="Cartão de Vacinação"
        onPress={() => handleNavigation("Cards")}
      />
      <Button
        title="Gerenciar Cursos"
        onPress={() => handleNavigation("ManageCourse")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Course" component={ManageCourse} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import { View } from 'react-native';
// import { SideBarNavigation } from './src/components/SideBarNavigation';

// function App(): JSX.Element {
    
//     return(
//         <View>
//             <SideBarNavigation itemSelect = {1}/>
//         </View>
//     )
// }

// export default App;