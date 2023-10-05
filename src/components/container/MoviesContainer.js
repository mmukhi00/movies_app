import { useEffect, useState } from 'react'
import { View,TouchableOpacity,TextInput,Button } from 'react-native'
import FilterOptions from '../search/FilterOptions'
import {  getSearchDetails } from '../../services/api'
import { results } from '../../staticData/NowPlaying'
import SearchList from '../lists/SearchList'
import Icon from 'react-native-vector-icons/Ionicons'; // You'll need to install this package
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'now_playing', value: '1' },
    { label: 'popular', value: '2' },
    { label: 'top_rated', value: '3' },
    { label: 'upcoming', value: '4' },

  ];
const MoviesContainer = ({navigation}) => {
    const [type, setType] = useState('now_playing')
    const [allMovies, SetAllMovies] = useState()
      const [isVisible, setIsVisible] = useState(false);

    const handleSelect = option => {
        console.log('Selected option:', option);
        setType(option.label)
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
    
    useEffect(() => {
        console.log(type)
       getSearchDetails(type,'movie').then(
        movies => {
            SetAllMovies(movies.results)
        },
        error => {
         alert('error' `Something went wrong ${error}`)
     }
    )
        // SetAllMovies(results)
    }, [type])
    
       const selectedValue = (item)=>{
            setType(item)
        }
    
    return (
        <>
           <View>
                <FilterOptions selectedValue={selectedValue} data={data}></FilterOptions>
                <SearchList result={allMovies} value='movie' navigation={navigation} />
            </View>
        </>
    )
}

export default MoviesContainer



//  <View>
//         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity onPress={() => setIsVisible(true)}>
//         <Button title={type} onPress={() => setIsVisible(true)} />
//       </TouchableOpacity>
//       <FilterOptions
//         isVisible={isVisible}
//         options={data}
//         onSelect={handleSelect}
//         onClose={handleClose}
//       />
//     </View>