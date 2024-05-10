import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
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
      backgroundColor: COLORS.primary
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
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={tabNavigatorOptions}>
      <Tab.Screen
        name={ROUTE_NAME.HomeTab}
        component={HomeTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: (color, size = 15) => (
            <AntDesign name='home' color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name={ROUTE_NAME.ListTab}
        component={ListTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Đơn hàng',
          tabBarIcon: (color, size = 15) => (
            <Fontisto name='bell' color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name={ROUTE_NAME.ContactTab}
        component={ContactTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Đối soát',
          tabBarIcon: (color, size = 15) => (
            <FontAwesome5 name='headphones-alt' color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name={ROUTE_NAME.PersonalTab}
        component={PersonalTab}
        options={{
          ...tabScreenOptions,
          tabBarLabel: 'Danh mục',
          tabBarIcon: (color, size = 15) => (
            <FontAwesome name='user-o' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
            <View
              key={index}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 5,
                paddingBottom: 15,
                backgroundColor: COLORS.backgroundSecondary
              }}>
              {options?.tabBarIcon(isFocused ? COLORS.white : COLORS.black)}
              <Text
                style={{
                  color: isFocused ? COLORS.white : COLORS.black,
                  marginTop: 5
                }}>
                {label}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )
      })}
    </View>
  )
}
