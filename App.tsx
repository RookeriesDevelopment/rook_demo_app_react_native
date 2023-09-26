import React from 'react';
import {RookConnectProvider} from 'rook_auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BodyView,
  EventsView,
  HomeView,
  OptionsView,
  PermissionsView,
  PhysicalView,
  SleepView,
  TransmissionOptionsView,
  BodyTransmissionView,
  PhysicalTransmissionView,
  SleepTransmissionView,
  EventsTransmissionView,
  TimezoneTransmissionView,
} from './src/views';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RookConnectProvider
      keys={{
        clientUUID: '9593d0ec-47c1-4477-a8ce-10d3f4f43127',
        apiURL: 'https://api.rook-connect.dev',
        password: 'YR9GoQ3mP0zey5nZ9w3WHQMvtvFvMdnefblx',
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#171821',
            },
            headerTintColor: 'white',
          }}>
          <Stack.Screen name="Home" component={HomeView} />

          <Stack.Screen name="Extraction" component={OptionsView} />
          <Stack.Screen name="Permissions" component={PermissionsView} />
          <Stack.Screen name="Body" component={BodyView} />
          <Stack.Screen name="Physical" component={PhysicalView} />
          <Stack.Screen name="Sleep" component={SleepView} />
          <Stack.Screen name="Events" component={EventsView} />

          <Stack.Screen
            name="Transmission"
            component={TransmissionOptionsView}
          />
          <Stack.Screen
            name="Body Transmission"
            component={BodyTransmissionView}
          />
          <Stack.Screen
            name="Physical Transmission"
            component={PhysicalTransmissionView}
          />
          <Stack.Screen
            name="Sleep Transmission"
            component={SleepTransmissionView}
          />
          <Stack.Screen
            name="Events Transmission"
            component={EventsTransmissionView}
          />

          <Stack.Screen
            name="Timezone Transmission"
            component={TimezoneTransmissionView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RookConnectProvider>
  );
}

export default App;
