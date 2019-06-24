import React, { PureComponent } from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet, View, SafeAreaView } from 'react-native';


export default class DetailsButtons extends PureComponent {
    renderButtons() {
        
    const buttons = <View>
                        <Button block onPress={ () => this.props.handlerClick("Circuits") } style={styles.button}>
                            <Text style={styles.text}>
                                Circuitos
                            </Text>
                        </Button>
                        <Button block onPress={ () => this.props.handlerClick("Pilots") } style={styles.button}>
                            <Text style={styles.text}>
                                Pilotos
                            </Text>
                        </Button> 
                    </View>

    return buttons;
              
}


    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderButtons()}
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
    button: {
        margin: 6,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: 300,
        height: 100,
        borderRadius: 15,
    },
    text: {
        color: '#fff',
    },
});