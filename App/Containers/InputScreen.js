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

export default class InputScreen extends Component {
  render () {
    return (
        <View style={styles.mainContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('LaunchScreen')}>
                <Image source={Images.backButton}/>
            </TouchableHighlight>

            <ScrollView>
                <View style={styles.centered}>
                    <Text> Please Enter the Station ID</Text>
                    <View style={styles.rowView}>
                        <TextInput maxLength={1} />
                        <TextInput maxLength={1} />    
                        <TextInput maxLength={1} />
                        <TextInput maxLength={1} />
                        <TextInput maxLength={1} />
                        <TextInput maxLength={1} />
                    </View>

                    <Button title='Add Station'
                            buttonStyle={{"margin": 10}} 
                            backgroundColor="#f44336"
                            color="white" 
                            borderRadius={100}/>
                </View>
            </ScrollView>
                    
        </View>
    )
  }
}
