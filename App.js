import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './app/screens/MainPage';
import UbiplayScreen from './app/screens/UbiplayMainScreen';
import UbiGameDetails from './app/screens/UbiGameDetails';
import UbigamePlayerReview from './app/screens/UbigamePlayerReview';
import UbiSpec from './app/screens/UbiSpec';
import StorePage from './app/screens/StorePage';
import UbiBaskitball from './app/screens/UbiBaskitball';
import Steam from './app/screens/Steam';
import ShootingGame from './app/screens/shootingGame';
import SteamPlayerReview from './app/screens/SteamPlayerReview';
import SteamSpec from './app/screens/SteamSpec';
import SteamFootballManagement from './app/screens/SteamFootballManagement';
import EpicsGamePage from './app/screens/EpicsGamePage';
import EpicShotting from './app/screens/EpicShotting';
import FootballManagementEpic from './app/screens/FootballManagementEpic';
import EpicGameReview from './app/screens/EpicGameReview';
import EpicGameSpec from './app/screens/EpicGameSpec';
import OriginMainPage from './app/screens/OriginMainPage';
import AdventureGame from './app/screens/AdventureGame';
import OriginPlayReview from './app/screens/OriginPlayReview';
import OriginSpec from './app/screens/OriginSpec';
import ZooManagement from './app/screens/ZooManagement';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
   
    <NavigationContainer>

<Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="UbiplayScreen" component={UbiplayScreen} />
        <Stack.Screen name="UbiGameDetails" component={UbiGameDetails} />
        <Stack.Screen name="UbigamePlayerReview" component={UbigamePlayerReview} />
        <Stack.Screen name="UbiSpec" component={UbiSpec} />
        <Stack.Screen name="StorePage" component={StorePage} />
        <Stack.Screen name="UbiBaskitball" component={UbiBaskitball} />
        <Stack.Screen name="Steam" component={Steam} />
        <Stack.Screen name="ShootingGame" component={ShootingGame} />
        <Stack.Screen name="SteamPlayerReview" component={SteamPlayerReview} />
        <Stack.Screen name="SteamSpec" component={SteamSpec} />
        <Stack.Screen name="SteamFootballManagement" component={SteamFootballManagement} />
        <Stack.Screen name="EpicsGamePage" component={EpicsGamePage} />
        <Stack.Screen name="EpicShotting" component={EpicShotting} />
        <Stack.Screen name="FootballManagementEpic" component={FootballManagementEpic} />
        
        <Stack.Screen name="EpicGameReview" component={EpicGameReview} />
        <Stack.Screen name="EpicGameSpec" component={EpicGameSpec} />
        <Stack.Screen name="OriginMainPage" component={OriginMainPage} />
        <Stack.Screen name="AdventureGame" component={AdventureGame} />
        <Stack.Screen name="OriginPlayReview" component={OriginPlayReview} />
        <Stack.Screen name="OriginSpec" component={OriginSpec} />
        <Stack.Screen name="ZooManagement" component={ZooManagement} />



        
       
     
        
       


      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
