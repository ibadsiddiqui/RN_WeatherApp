import React, { Component } from 'react'
import { 
    Image,
    TextInput, 
    ToastAndroid,
    Text, 
    TouchableHighlight, 
    View,
    ScrollView
} from 'react-native'
import { Button } from 'react-native-elements'

//navigation
import {navigate} from 'react-navigation'

//images
import { Images } from '../Themes/'

// Styles
import styles from './Styles/InputScreenStyles'

// firebase
import firebase from 'firebase'

export default class InputScreen extends Component {
    constructor(){
        super();
        this.state = {
            stationID:'',
        }
    }
    onSubmit(){
        const {stationID} = this.state;

        let api = {
          getWeather(){
            var url =   `https://api.mesowest.net/v2/stations/nearesttime?stid=`
                        + stationID.toString().toLowerCase() +
                        `&within=10&token=4d80764baf2343b097648565e5372a7f`;
            return  fetch(url).then((res)=> res.json())
          }
        }
        
        let date_value;
        api.getWeather().then( 
            res =>  
                date_value = (res.STATION[0].OBSERVATIONS.air_temp_value_1.date_time)
        )
        let date_array = date_value.split('T')
        let date_date = date_array[0]
        let date_time = date_array[1].replace('Z','')
        console.log(date_date, date_time)
        
        

        api.getWeather()
        .then( res => 
            this.setState({
                StationName: res.STATION[0].NAME,
                ReadingDate: date_date, 
                ReadingTime: date_time, 
                Temp : res.STATION[0].OBSERVATIONS.air_temp_value_1.value * (9/5) + 32,
                // Gust: res.STATION[0].OBSERVATIONS.wind_gust_value_1.value,
                windDirection: res.STATION[0].OBSERVATIONS.wind_cardinal_direction_value_1d.value,
                WindSpeed: res.STATION[0].OBSERVATIONS.wind_speed_value_1.value * 2.23693629 ,
            }))
        firebase.database().ref('stations/' + this.state.StationID).set({
                StationID: this.state.stationID,
                StationName: this.state.StationName,
                Temp : this.state.Temp,
                // Gust: gust,
                ReadingTime: date_time,
                ReadingDate: date_date,
                windDirection: this.state.windDirection,
                WindSpeed: this.state.WindSpeed,
        });
    }
    render () {
        let database = firebase.database();
        return (
            <View style={styles.mainContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('LaunchScreen')}>
                    <Image source={Images.backButton}/>
                </TouchableHighlight>

                <ScrollView>
                    <View style={styles.centered}>
                        <Text> Please Enter the Station ID</Text>
                        <View style={styles.rowView}>
                            <TextInput 
                                maxLength={1}
                                placeholder='X'
                                style={{ textAlign: 'center'}}
                                onChangeText={(text)=> this.setState({stationID:text})}/>
                            <TextInput 
                                maxLength={1}
                                placeholder='X'
                                style={{ textAlign: 'center'}}
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationID: prevState + text})}/>
                            <TextInput 
                                maxLength={1}
                                placeholder='X'
                                style={{ textAlign: 'center'}}
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationId: prevState + text})}/>
                            <TextInput 
                                maxLength={1}
                                placeholder='X'
                                style={{ textAlign: 'center'}}
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationId: prevState + text})}/>
                            <TextInput 
                                maxLength={1}
                                placeholder='X'
                                style={{ textAlign: 'center'}}
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationId: prevState + text})}/>
                            <TextInput 
                                maxLength={1}
                                placeholder='X'
                                style={{ textAlign: 'center'}}
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationId: prevState + text})}/>
                        </View>

                        <Button color="white"
                                backgroundColor="#f44336"
                                borderRadius={100}
                                buttonStyle={{margin: 10}}
                                onPress={()=>this.onSubmit.bind(this)} 
                                title='Add Station'/>
                    </View>
                </ScrollView>
                        
            </View>
        )
    }
}
