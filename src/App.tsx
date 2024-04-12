import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppNavigator from '@navigation/AppNavigator'
import AuthContext from '@contexts/AuthContext'
import Toast from 'react-native-toast-message'

const queryClient = new QueryClient()
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <AppNavigator />
        <Toast />
      </AuthContext>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({})

export default App
