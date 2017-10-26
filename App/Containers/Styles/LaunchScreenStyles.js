import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  header: {
    marginTop: Metrics.doubleSection - 40,
    marginLeft: Metrics.screenWidth - 230,
    color: '#000',
    fontSize: 28,
    fontWeight: '700',
    fontFamily: "cursive",
  },

  contentContainer: {
    paddingVertical: 10,
    paddingBottom:20
  },

  AddBtnRow:{
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: Metrics.section * 5 + 5,
    marginTop: Metrics.screenHeight - (Metrics.screenWidth/4.8),
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: 'white',
    paddingBottom: 40
    // marginLeft: Metrics.screenHeight - (Metrics.screenWidth + Metrics.section)
  },
  btnText:{
    marginTop: 13,
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