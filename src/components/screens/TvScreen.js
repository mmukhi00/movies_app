import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TVContainer from "../container/TVContainer";

const TVScreen = ({ navigation }) => {
   
   return(<TVContainer navigation={navigation} />)
    
}
export default TVScreen