import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, List, ListItem, Spinner,  Body, Right } from 'native-base';

import { SafeAreaView } from 'react-navigation';
import { BorderlessButton } from 'react-native-gesture-handler';



export default class Circuits extends React.Component {
    
    state = {
        loading: true,
        data: [],
    };
    
    
    static navigationOptions = () => {
        return {
            title: 'Circuitos',
        };
    }
    
    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.getData(season);
        this.state.loading = false;
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
        
        if(loading){
            return (<Spinner style={styles.spinner} color='black' />)
        } else {

            let elements = [];
            const qtdItems = data.length;
      
            for (let i = 0; i < qtdItems; i++) {
                const key = 'indice' + i;
                elements.push(
                    <List transparent key={key} >
                        <ListItem avatar>
                            <Body>
                                <Text style={styles.text}>{data[i].raceName}</Text>
                                <Text style={styles.text2}>Nome do autodromo: </Text>
                                <Text>{data[i].Circuit.circuitName}</Text>
                                <Text style={styles.text2}>Local:</Text>
                                <Text> {data[i].Circuit.Location.locality} - {data[i].Circuit.Location.country}</Text>
                                
                            </Body>
                            <Right>
                                <Text>Data:</Text>
                                <Text>{data[i].date} </Text>
                            </Right>
                        </ListItem>
                    </List>
                  
                );
              }
  
  
          return (
              <SafeAreaView style={styles.container}>
                  <Container style={styles.card}>
                      <Content>
                          <List style={styles.list}>
                              
                                  {elements}
                              
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
            backgroundColor: '#bdbdbd',
            alignItems: 'center',
            justifyContent: 'center',

        },
        list: {
            backgroundColor: '#bdbdbd',
            width: 375,
        },

        card: {
            backgroundColor: '#bdbdbd',
          },
          text: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
          },
          text2: {
            fontWeight: 'bold',
            fontSize: 15,
          },

          spinner: {
              backgroundColor: '#bdbdbd',
              height: '100%',
          }
        });
    
