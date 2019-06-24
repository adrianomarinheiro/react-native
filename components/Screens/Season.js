import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Spinner, Card, CardItem, CardSwiper, Button, Icon } from 'native-base';
import DetailsButtons from '../components/DetailsButtons';
import { SafeAreaView } from 'react-navigation';


export default class Season extends React.Component {
    
    state = {
        loading: false,
    };
    
    constructor(props) {
        super(props);
    
        this.goTo = this.goTo.bind(this);
      }
    
    static navigationOptions = () => {
        return {
            title: 'Temporada',
        };
    }

    goTo(details) {
        const season = this.props.navigation.getParam('season');

        this.props.navigation.navigate(details, {
            season
        });
    }
    
    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.getData(season);
      
    }
    
    getData(seasons) {
        fetch(`http://ergast.com/api/f1/${seasons}.json`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ data: data.MRData.RaceTable.Races });
            // console.log(data.MRData.RaceTable.Races);
            
        });
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <DetailsButtons handlerClick={this.goTo}></DetailsButtons>
            </SafeAreaView>
        );
    }
}
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#bdbdbd',
            alignItems: 'center',
            justifyContent: 'center',

        },
          
    });
    