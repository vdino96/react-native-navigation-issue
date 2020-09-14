import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Third extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {}

  goBack() {
    Navigation.dismissModal("third");
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity onPress={this.goBack}>
            <Text>Close modal</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
