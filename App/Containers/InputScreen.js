import React, { Component } from 'react'
import { 
    Image,
    TextInput, 
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
                            <TextInput maxLength={1} 
                                onChangeText={(text)=> this.setState({stationID:text})}/>
                            <TextInput maxLength={1} 
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationID: prevState + text})}/>
                            <TextInput maxLength={1} 
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationId: prevState + text})}/>
                            <TextInput maxLength={1} 
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationId: prevState + text})}/>
                            <TextInput maxLength={1} 
                                onChangeText={  (text)=> 
                                                this.setState(prevState => {stationId: prevState + text})}/>
                            <TextInput maxLength={1} 
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
