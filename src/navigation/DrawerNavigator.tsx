import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Avatar, Text } from 'react-native-paper'
import React from 'react'
import BottomTabNavigator from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ({ navigation }: any) => {
  return (
    <Drawer.Navigator
      initialRouteName='RootTripStack'
      screenOptions={{
        headerShown: false
      }}
      drawerContent={() => (
        <View style={styles.wrapperDrawer}>
          <View style={styles.wrapperAvatar}>
            <Avatar.Text
              size={100}
              label='Bamboo Ship'
              color='black'
              style={{ backgroundColor: 'white' }}
            />
          </View>

          {/* <View style={{paddingVertical: 10}}>
            <TouchableOpacity
              style={styles.padding}
              onPress={() => {
                // navigation.navigate("UserInfoScreen");
              }}>
              <Text style={{}}>Thông tin chung</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapperLogout}>
            <TouchableOpacity
              onPress={() => {
                onLogout();
              }}>
              <Text style={{}}>Đăng xuất</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      )}>
      <Drawer.Screen name='RootTripStack' component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({
  // title: {
  //     fontSize: 16,
  //     fontFamily: Fonts.InterBold,
  //     lineHeight: 19,
  //     color: whiteColor,
  //     marginTop: 14,
  // },

  // subTitle: {
  //     fontSize: 16,
  //     fontFamily: Fonts.InterRegular,
  //     lineHeight: 19,
  //     color: whiteColor,
  //     alignSelf: "center",
  // },
  mt26: {
    marginTop: 26
  },
  mt14: {
    marginTop: 14
  },
  ml26: {
    marginLeft: 26
  },
  wrapperAvatar: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperDrawer: {
    flex: 1,
    backgroundColor: 'gray'
  },
  wrapperLogout: {
    marginTop: 'auto',
    alignItems: 'center'
  },
  // logoutText: {
  //     fontSize: 16,
  //     fontFamily: Fonts.InterBold,
  //     lineHeight: 19,
  //     color: whiteColor,
  // },
  padding: { paddingVertical: 10 }
})
