import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from '../Seasons';

import { SafeAreaView } from 'react-navigation';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }
  static navigationOptions = () => {
    return {
      title: 'Temporadas',
    };
  }

  getData(season){
     this.props.navigation.navigate('Season', {
       season,
       
     });

  }
  

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <Seasons handlerClick={ this.getData }/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
