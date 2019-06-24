import React from 'react';
import AllPilots from '../components/AllPilots';
import { Spinner, List, Container, Content} from "native-base";
import { View, StyleSheet, SafeAreaView  } from 'react-native';

export default class Pilots extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
            loading: false
        };

        this.navigateTo = this.navigateTo.bind(this);
    }

    static navigationOptions = () => {
        return {
            title: 'Pilotos',
        };
    }

    componentDidMount() {
        const season = this.props.navigation.getParam('season');

        this.getInfoF1ByYear(season);
    }

    getInfoF1ByYear(season) {
        let urls = [
            `http://ergast.com/api/f1/${season}.json`,
            `http://ergast.com/api/f1/${season}/drivers.json`
        ]

        Promise.all(urls.map(url => fetch(url)))
            .then(responses =>
                Promise.all(responses.map(res => res.json()))
            ).then(data => {
                this.setState({
                    drivers: data[1].MRData.DriverTable.Drivers,
                    loading: true
                })
            })
    }

    navigateTo(driver) {
        const year = this.props.navigation.getParam('year');

        this.props.navigation.navigate('Driver', {
            driver,
            year
        });
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='black' />;
        };

        return (
            <SafeAreaView style={styles.container}>
                <View>{spinner}</View>
                <Container style={styles.card}>
                    <Content>
                        <List style={styles.list}>
                            <AllPilots style={styles.list} drivers={this.state.drivers}></AllPilots>
                        </List>
                    </Content>
                </Container>
                
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdbdbd',
    },
    list: {
        backgroundColor: '#bdbdbd',
        width: 375,
    },
    card: {
        backgroundColor: '#bdbdbd',
    },
});