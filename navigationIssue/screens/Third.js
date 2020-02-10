import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';

export default class Third extends React.Component {
  componentDidMount() {
    console.log('Me neither');
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity>
            <Text>Third screen</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
