import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, List, ListItem, Body, Right } from 'native-base';


export default class AllPilots extends PureComponent {
    renderAllPilots() {
        let drivers = <View>
            {this.props.drivers.map((driver, key) => {
                return (
                    <List transparent key={key} >
                        <ListItem avatar>
                            <Body>
                                <Text style={styles.text}>{driver.givenName} {driver.familyName}</Text>
                                <Text>Data de Nascimento:</Text>
                                <Text>{driver.dateOfBirth}</Text>
                                
                            </Body>
                            <Right>
                                <Text>{driver.nationality}</Text>
                            </Right>
                        </ListItem>
                    </List>
                    
                );
            })}
        </View>;

        return drivers;
    }

    render() {
        return (
            
            <View>
                {this.renderAllPilots()}
            </View>
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
    list: {
        backgroundColor: '#bdbdbd',
        width: 375,
    },

    card: {
        backgroundColor: '#bdbdbd',
      },
      text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
      },
      text2: {
        fontWeight: 'bold',
        fontSize: 15,
      },

      cardItem: {
        backgroundColor: '#000',
        color: '#ffffff',
      },
    });