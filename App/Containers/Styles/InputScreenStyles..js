import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: '#fff',    
  },

  rowView:{
    flexDirection: 'row'
  },

})