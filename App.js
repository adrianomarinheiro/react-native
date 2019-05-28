import React from 'react';
import Home from './components/Screens/Home';

import{
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './components/Screens/Home';
import SeasonScreen from './components/Screens/Season';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Season: {
      screen: SeasonScreen,
    }

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

