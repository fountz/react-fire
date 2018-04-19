// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyATl14Qra9mRM1PNSKo7nEMT2Jg7LqjOlo",
    authDomain: "test-8af8c.firebaseapp.com",
    databaseURL: "https://test-8af8c.firebaseio.com",
    projectId: "test-8af8c",
    storageBucket: "test-8af8c.appspot.com",
    messagingSenderId: "751181018393"

  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="Simple Firebase test" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;
