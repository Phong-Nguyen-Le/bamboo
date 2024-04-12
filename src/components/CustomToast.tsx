import Toast, { ToastProps } from 'react-native-toast-message'
import { Button } from 'react-native'

interface CustomToastProps {
  type: 'success' | 'error' | 'info' // Add more types as needed
  text1: string
  text2: string
}

export function CustomToast({ type, text1, text2 }: CustomToastProps) {
  const showToast = () => {
    Toast.show({
      type,
      text1,
      text2
    })
  }

  return <Button title='Show toast' onPress={showToast} />
}
