import React from 'react';
import Home from './components/Screens/Home';

import{
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './components/Screens/Home';
import SeasonScreen from './components/Screens/Season';
import CircuitsScreen from './components/Screens/Circuits';
import PilotsScreen from './components/Screens/Pilots';


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Season: {
      screen: SeasonScreen,
    },
    Circuits: {
      screen: CircuitsScreen,
    },
    Pilots: {
      screen: PilotsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#bdbdbd',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


export default createAppContainer(AppNavigator) 

//class App extends React.Component {
  
  //render() {
    //return (
      
      //  <Home/>

    //);
  //}
//}

