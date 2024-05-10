import COLORS from '@constants/colors'
import { useAuth } from '@contexts/AuthContext'
import { NavigationContainer, NavigationState } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgotPasswordScreen from '@screens/auth/ForgotPasswordScreen'
import LoginScreen from '@screens/auth/LoginScreen'
import { StatusBar } from 'react-native'
import DrawerNavigator from './DrawerNavigator'
import { ROUTE_NAME } from './routeName'
import SignUp from '@screens/auth/SignUp'

const Stack = createNativeStackNavigator<any>()
function screenTracking(state: NavigationState | undefined): void {
  if (state) {
    const route = state?.routes[state.index]
    if (route.state) {
      return screenTracking(route?.state as any)
    }
    return console.log(`====== NAVIGATING to > ${route?.name}`)
  }
}

const ChildNavigation = () => {
  const { isLogged } = useAuth()
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      {!isLogged ? (
        <Stack.Screen
          name='LoginScreen'
          options={{
            headerShown: false
          }}
          component={LoginScreen}
        />
      ) : (
        <Stack.Screen
          name='RootNavigator'
          options={{
            headerShown: false
          }}
          component={DrawerNavigator}
        />
      )}

      <Stack.Screen
        name='ForgotPasswordScreen'
        options={{}}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={ROUTE_NAME.SignUp}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Đăng ký tài khoản'
        }}
        component={SignUp}
      />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer onStateChange={screenTracking}>
      <StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor={COLORS.white}
      />
      <ChildNavigation />
    </NavigationContainer>
  )
}

export default AppNavigator
