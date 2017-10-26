import React, { Component } from 'react'
import { Button, Text, Image, View } from 'react-native'

import {navigate} from 'react-navigation'
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class TestingScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
      <Text>TestingSCreen</Text>

        <Button onPress={() => this.props.navigation.navigate('newScreen')} title="Press Me"/>
      </View>
    )
  }
}
