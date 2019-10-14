import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Setting from './Setting';
import Detail from './Detail';
import Home from './Home';
import icHome from '../assets/home.png';
import icDetail from '../assets/detail.png';
import icSetting from '../assets/settings.png';
const TabNavigator = createBottomTabNavigator({
    Home,
    Detail,
    Setting
  });
  Home.navigationOptions={
    tabBarLabel:'Home',
    tabBarIcon:()=>{
      return <Image source={icHome} style={styles.img} />
    }
  };
  Detail.navigationOptions={
    tabBarLabel:'Detail',
    tabBarIcon:()=>{
      return <Image source={icDetail} style={styles.img} />
    }
  };
  Setting.navigationOptions={
    tabBarLabel:'Setting',
    tabBarIcon:()=>{
      return <Image source={icSetting} style={styles.img} />
    }
  };
export default createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  img:{
    width:17,
    height:17
  }
});