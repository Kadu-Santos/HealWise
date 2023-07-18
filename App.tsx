import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Cards } from './src/screens/cardVaccin/Cards';
import { ManageCourse } from './src/screens/course/ManageCourse';
import { AddPatients } from './src/screens/patients/AddPatients';
import { AddServer } from './src/screens/patients/AddServer';
import { Search } from './src/screens/patients/Search/Index';
import { NewReport } from './src/screens/reports/NewReport';
import { Files } from './src/screens/service/Files';
import { Forwarding } from './src/screens/service/Forwarding';
import { ActivateDeactivate } from './src/screens/users/ActivateDeactivate';
import { AddUser } from './src/screens/users/AddUser';
import { Alter } from './src/screens/users/Alter';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddPatients" >
        <Stack.Screen name="ManageCourse" component={ManageCourse} />
        <Stack.Screen name="AddPatients" component={AddPatients} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="AddServer" component={AddServer} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="NewReport" component={NewReport} />
        <Stack.Screen name="Files" component={Files} />
        <Stack.Screen name="Forwarding" component={Forwarding} />
        <Stack.Screen name="ActivateDeactivate" component={ActivateDeactivate} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="Alter" component={Alter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;