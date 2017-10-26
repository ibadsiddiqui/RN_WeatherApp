import React, { Component } from 'react'
import { 
  Button, 
  Text, 
  Image, 
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView
} from 'react-native'

import {Icon,List, ListItem} from 'react-native-elements'
import {navigate} from 'react-navigation'

// Styles
import styles from './Styles/LaunchScreenStyles'


export default class LaunchScreen extends Component {
  
  render () {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      //... // more items
    ]
    
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor="transparent" transulcent={true}/>
          <Text style={styles.header}>WindLove</Text>
          
          <ScrollView
            automaticallyAdjustContentInsets 
            contentContainerStyle={styles.contentContainer}>
            <List containerStyle={{marginBottom: 20}}>
              {
                list.map((l, i) => (
                  <ListItem
                    roundAvatar
                    avatar={{uri:l.avatar_url}}
                    key={i}
                    title={l.name}
                  />
                ))
              }
            </List>    
          </ScrollView>

          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('newScreen')} 
            style={styles.AddBtnRow}>
          
            <Text style={styles.btnText}>Add Station </Text>
            <Icon name='add'  color='#fff' style={styles.iconStyle}/>
        
          </TouchableOpacity>
        

      </View>
    )
  }
}