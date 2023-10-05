import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieScreen from '../screens/MovieScreen'
import TVScreen from '../screens/TvScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialTopTabNavigator()

const TabStack = () => {
    return (
      
        <Tab.Navigator>
            <Tab.Screen name='Movies' component={MovieScreen} />
            <Tab.Screen name='Search Result' component={SearchScreen} />
            <Tab.Screen name='TV Show' component={TVScreen} />
        </Tab.Navigator>
  
    )
    
}

export default TabStack