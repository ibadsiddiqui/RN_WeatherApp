import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    mainContainer: {
        paddingBottom: Metrics.baseMargin,
        backgroundColor: '#fff',
        height: Metrics.screenWidth,
    },

    rowView:{
        flexDirection: 'row',
    },
    centered:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Metrics.screenWidth/3.8,
        // padding: 50
    }
})