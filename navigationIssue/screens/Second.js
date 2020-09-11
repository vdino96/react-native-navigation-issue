import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Second extends React.Component {
  componentDidMount() {
    console.log('I should not be logged');
  }

  showAnotherRoot() {
    Navigation.showModal({
      component: {
        name: "Third"
      }
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity onPress={this.showAnotherRoot}>
            <Text>Second screen</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
