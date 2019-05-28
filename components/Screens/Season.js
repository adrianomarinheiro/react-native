import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Spinner } from 'native-base';

import { SafeAreaView } from 'react-navigation';

export default class Season extends React.Component {
    
    state = {
        loading : true,
        data: [],
    };
    
    
    static navigationOptions = () => {
        return {
            title: 'Temporadas',
        };
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
        const data = this.state.data;
        const loading = this.state.loading;
        console.log(data);
        if(loading){
            return (<Spinner color='red' />)
        } else {
        return (
            <SafeAreaView style={styles.container}>
                <Container>
                    <Content>
                        <List>
                            <ListItem>
                                <Text></Text>
                            </ListItem>
                            <ListItem>
                                <Text>Nathaniel Clyne</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </SafeAreaView>
             );
        }
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
    