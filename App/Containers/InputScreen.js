import React, { Component } from 'react'
import { 
    TextInput, 
    Text, 
    Image, 
    View 
} from 'react-native'

import {navigate} from 'react-navigation'
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class InputScreen extends Component {
  render () {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputStyles}>
                <TextInput maxlength={1} />
                <TextInput maxlength={1} />    
                <TextInput maxlength={1} />
                <TextInput maxlength={1} />
                <TextInput maxlength={1} />
                <TextInput maxlength={1} />
            </View>
        </View>
    )
  }
}
