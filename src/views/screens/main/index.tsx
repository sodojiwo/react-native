import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { HomeScreen } from '../home'
import { MainScreenNav } from './nav'
import { MainScreenProps } from './props'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export class MainScreen extends React.Component<MainScreenProps> {
  constructor(props: MainScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <MainScreenNav />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
