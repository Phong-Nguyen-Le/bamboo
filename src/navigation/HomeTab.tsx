import COLORS from '@constants/colors'
import { createStackNavigator } from '@react-navigation/stack'
import HomeHeader from '@screens/common/home/components/HomeHeader'
import HomeScreen from '@screens/common/home/HomeScreen'
import React from 'react'
import { ROUTE_NAME } from './routeName'

const Stack = createStackNavigator()
const HomeTab = ({ navigation, route }: any) => {
  React.useEffect(() => {}, [navigation, route])
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.ContactScreen}>
      <Stack.Screen
        name={ROUTE_NAME.HomeScreen}
        component={HomeScreen}
        options={{
          header: () => <HomeHeader />,
          headerStyle: {
            backgroundColor: COLORS.backgroundPrimary
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeTab
