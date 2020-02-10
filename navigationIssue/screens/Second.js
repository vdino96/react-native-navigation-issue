import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';

export default class Second extends React.Component {
  componentDidMount() {
    console.log('I should not be logged');
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity>
            <Text>Second screen</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
