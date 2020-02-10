/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

const generateBottomTab = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            tabsAttachMode: 'onSwitchToTab',
          },
        },
        children: [
          {
            component: {
              name: 'First',
              options: {
                bottomTab: {
                  text: 'First',
                  icon: require('./icons/th.png'),
                },
              },
            },
          },
          {
            component: {
              name: 'Second',
              options: {
                bottomTab: {
                  text: 'Second',
                  icon: require('./icons/th.png'),
                },
              },
            },
          },
          {
            component: {
              name: 'Third',
              options: {
                bottomTab: {
                  text: 'Third',
                  icon: require('./icons/th.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
};

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity onPress={() => generateBottomTab()}>
            <Text>Here</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
