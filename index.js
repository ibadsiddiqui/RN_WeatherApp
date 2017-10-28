import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import firebase from 'firebase'

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyC-WW8H_m8NvhMsnghqNRRFmieGPJ29o68",
    authDomain: "testapp-933e3.firebaseapp.com",
    databaseURL: "https://testapp-933e3.firebaseio.com",
    projectId: "testapp-933e3",
    storageBucket: "testapp-933e3.appspot.com",
    messagingSenderId: "103236295940"
};

firebase.initializeApp(config);

AppRegistry.registerComponent('WindLove', () => App)
