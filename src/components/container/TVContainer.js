import { useEffect, useState } from 'react'
import { View } from 'react-native'
import FilterOptions from '../search/FilterOptions'
import { getSearchDetails, getTV } from '../../services/api'
import { results } from '../../staticData/NowPlaying'
import SearchList from '../lists/SearchList'

const data = [
    { label: 'airing_today', value: '1' },
    { label: 'on_the_air', value: '2' },
    { label: 'popular', value: '3' },
    { label: 'top_rated', value: '3' },

  ];
const TVContainer = ({navigation}) => {
    const [type, setType] = useState('airing_today')
     const [allTV,SetAllTV]=useState()
    
    useEffect(() => {
        console.log(type)
       getSearchDetails(type,'tv').then(
        tv => {
            SetAllTV(tv.results)
        },
        error => {
         alert('error' `Something went wrong ${error}`)
     }
    )
        // SetAllTV(results)
    }, [type])
    
       const selectedValue = (item)=>{
            setType(item)
        }
    
    return (
        <>
            <View>
              
                <FilterOptions selectedValue={selectedValue} data={ data}></FilterOptions>
                <SearchList result={allTV} value='tv' navigation={navigation} />
            </View>
        </>
    )
}

export default TVContainer