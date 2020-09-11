import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Second extends React.Component {
  componentDidMount() {
  }

  showAnotherRoot() {
    Navigation.showModal({
      component: {
        name: "Third",
        id: "third"
      }
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity onPress={this.showAnotherRoot}>
            <Text>Show third screen (modal)</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
