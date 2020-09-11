import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class First extends React.Component {
  componentDidMount() {
    console.log('I should be logged');
  }

  componentWillUnmount() {}

  showAnotherRoot() {
    Navigation.push("first", {
      component: {
        name: "Second"
      }
    });
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity onPress={this.showAnotherRoot}>
            <Text>First screen</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
