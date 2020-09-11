/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
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
        children: 
          [{
            stack: {
              children: [{
                component: {
                  name: 'First',
                  options: {
                    bottomTab: {
                      text: 'First',
                      icon: require('./icons/th.png'),
                      iconColor: "green",
                      selectedIconColor: "red"
                    },
                  },
                  id: "first"
                },
              }]
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'Second',
                  options: {
                    bottomTab: {
                      text: 'Second',
                      icon: require('./icons/th.png'),
                      iconColor: "green",
                      selectedIconColor: "red"
                    },
                  },
                  id: "second"
                },
              }]
            }
          }],
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
