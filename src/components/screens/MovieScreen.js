import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MoviesContainer from "../container/MoviesContainer";
const MovieScreen = ({navigation}) => {
   
   return(<MoviesContainer navigation={navigation} />)
    
}
export default MovieScreen