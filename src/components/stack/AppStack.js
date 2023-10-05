import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '../screens/DetailsScreen';
import TabStack from './TabStack';


const Stack=createNativeStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>        
        <Stack.Screen name='Movies' component={TabStack} options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}/>
        <Stack.Screen name='Search' component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default AppStack