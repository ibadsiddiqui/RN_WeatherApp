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

  contentContainer: {
    paddingBottom:18
  },

  header: {
    marginTop: Metrics.doubleSection - 37,
    marginLeft: Metrics.screenHeight/2.5,
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 28,
    fontWeight: '700',
    fontFamily: "cursive",
  },
  
  tableColumn:{
    // borderRightColor:'black',
    // borderRightWidth: 1,
    marginRight: 5,
    marginTop: 18,
    marginLeft: Metrics.baseMargin,
    paddingLeft: 8,
    paddingRight: 3
    
  },

  AddBtnRow:{
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: Metrics.screenHeight-120,
    position: 'absolute'
  },
  btnText:{
    marginTop: 16,
    fontSize: 14,
    color: '#000',
    marginRight: 5
  },
  iconStyle:{
    backgroundColor: "#1565c0",  
    marginTop: 10,    
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100
  }
})