import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import SampleData from './fire/SampleData';
import Firefind from './components/Firefind';

// firebaseの設定
var config = {
  apiKey: "AIzaSyD8NN1L2fvbj416UQwzUE0kU11vhMqxDAc",
  authDomain: "jio-learning-test.firebaseapp.com",
  databaseURL: "https://jio-learning-test-default-rtdb.firebaseio.com",
  projectId: "jio-learning-test",
  storageBucket: "jio-learning-test.appspot.com",
  messageingSenderId: "234107722758",
  appId: "1:234107722758:web:20d261f6031ab349d4f787",
  measurementId: "G-5LHN2BRZ5D"
};

// firebaseの初期化
firebase.initializeApp(config);

// Appコンポーネント
class App extends Component {
  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <SampleData />
        {/* <Firefind /> */}
      </div>
    );
  }
}

export default App;