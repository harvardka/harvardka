import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8bOElPdeN0vd72imni4mOP6vS1H-7k_A",
    authDomain: "emailcapture-74239.firebaseapp.com",
    databaseURL: "https://emailcapture-74239.firebaseio.com",
    projectId: "emailcapture-74239",
    storageBucket: "",
    messagingSenderId: "865762347088"
};
var fire = firebase.initializeApp(config);

export default fire;