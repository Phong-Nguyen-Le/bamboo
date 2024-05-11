import React, { useEffect } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppNavigator from '@navigation/AppNavigator'
import AuthContext from '@contexts/AuthContext'
import Toast from 'react-native-toast-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import COLORS from '@constants/colors'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
//firebase
import messaging from '@react-native-firebase/messaging'
import { PermissionsAndroid } from 'react-native'

const queryClient = new QueryClient()
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) {
    console.log('Authorization status:', authStatus)
    const token = await messaging().getToken()
  }
}
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
function App(): React.JSX.Element {
  useEffect(() => {
    requestUserPermission()
  }, [])

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <BottomSheetModalProvider>
        <QueryClientProvider client={queryClient}>
          <AuthContext>
            <AppNavigator />
            <Toast />
          </AuthContext>
        </QueryClientProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})

export default App
