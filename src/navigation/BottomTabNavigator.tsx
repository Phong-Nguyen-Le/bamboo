import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ContactTab from './ContactTab'
import PersonalTab from './PersonalTab'
import COLORS from '@constants/colors'
import React from 'react'
import HomeTab from './HomeTab'
import { ROUTE_NAME } from './routeName'
import ListTab from './ListTab'
const Tab = createBottomTabNavigator()
const BottomTabNavigator = () => {
  const tabNavigatorOptions: BottomTabNavigationOptions = {
    tabBarStyle: {
      display: 'flex',
      backgroundColor: COLORS.white,
      paddingBottom: 5,
      paddingTop: 5,
      height: 60
    }
  }

  const tabScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabelStyle: {
      fontSize: 12
    },
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.grayMedium
  }

  return (
    <Tab.Navigator
      initialRouteName={ROUTE_NAME.HomeTab}
      screenOptions={tabNavigatorOptions}>
      <Tab.Screen
        name={ROUTE_NAME.HomeTab}
        component={HomeTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='home' color={color} size={18} />
          )
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.ListTab}
        component={ListTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Danh sách',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name='bell' color={color} size={18} />
          )
        }}
      />

      <Tab.Screen
        name={ROUTE_NAME.ContactTab}
        component={ContactTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Liên Hệ',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='headphones-alt' color={color} size={18} />
          )
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.PersonalTab}
        component={PersonalTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user-o' color={color} size={18} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
