import COLORS from '@constants/colors'
import { useAuth } from '@contexts/AuthContext'
import { NavigationContainer, NavigationState } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgotPasswordScreen from '@screens/auth/ForgotPasswordScreen'
import LoginScreen from '@screens/auth/LoginScreen'
import { Linking, StatusBar } from 'react-native'
import DrawerNavigator from './DrawerNavigator'
import { ROUTE_NAME } from './routeName'
import SignUp from '@screens/auth/SignUp'
import messaging from '@react-native-firebase/messaging'

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
    <NavigationContainer linking={linking} onStateChange={screenTracking}>
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

const NAVIGATION_IDS = [
  ROUTE_NAME.HomeTab,
  ROUTE_NAME.ListTab,
  ROUTE_NAME.ContactTab,
  ROUTE_NAME.PersonalTab
]

function buildDeepLinkFromNotificationData(data): string | null {
  const navigationId = data?.navigationId
  if (!NAVIGATION_IDS.includes(navigationId)) {
    console.warn('Unverified navigationId', navigationId)
    return null
  }
  if (navigationId === ROUTE_NAME.HomeTab) {
    return 'myapp://home'
  }
  if (navigationId === 'settings') {
    return 'myapp://settings'
  }
  const postId = data?.postId
  if (typeof postId === 'string') {
    return `myapp://post/${postId}`
  }
  console.warn('Missing postId')
  return null
}

const linking = {
  prefixes: ['myapp://'],
  config: {
    // initialRouteName: 'Home',
    screens: {
      Home: ROUTE_NAME.HomeTab,
      Post: 'post/:id',
      Settings: 'settings'
    }
  },
  async getInitialURL() {
    const url = await Linking.getInitialURL()
    if (typeof url === 'string') {
      return url
    }
    //getInitialNotification: When the application is opened from a quit state.
    const message = await messaging().getInitialNotification()
    const deeplinkURL = buildDeepLinkFromNotificationData(message?.data)
    if (typeof deeplinkURL === 'string') {
      return deeplinkURL
    }
  },
  subscribe(listener: (url: string) => void) {
    const onReceiveURL = ({ url }: { url: string }) => listener(url)

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', onReceiveURL)
    const foreground = messaging().onMessage(async (remoteMessage) => {
      // const url = buildDeepLinkFromNotificationData(remoteMessage.data)
      console.log('A new FCM message arrived!', remoteMessage)
    })

    //onNotificationOpenedApp: When the application is running, but in the background.
    const unsubscribe = messaging().onNotificationOpenedApp((remoteMessage) => {
      const url = buildDeepLinkFromNotificationData(remoteMessage.data)
      if (typeof url === 'string') {
        listener(url)
      }
    })

    return () => {
      linkingSubscription.remove()
      unsubscribe()
      foreground()
    }
  }
}
