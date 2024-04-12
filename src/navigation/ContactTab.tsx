import { createStackNavigator } from '@react-navigation/stack'
import ContactScreen from '@screens/common/contact/ContactScreen'
import React from 'react'
import { ROUTE_NAME } from './routeName'
import Row from '@components/Row'
import COLORS from '@constants/colors'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Stack = createStackNavigator()
const ContactTab = ({ navigation, route }: any) => {
  const { top } = useSafeAreaInsets()
  const header = (
    <Row
      center
      style={{
        backgroundColor: COLORS.backgroundSecondary,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingTop: top + 5
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: COLORS.white,
          letterSpacing: 0.5
        }}>
        Thông tin liên hệ
      </Text>
    </Row>
  )
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.ContactScreen}>
      <Stack.Screen
        name={ROUTE_NAME.ContactScreen}
        component={ContactScreen}
        options={{
          header: () => header,
          headerStyle: {
            backgroundColor: COLORS.backgroundPrimary
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default ContactTab
