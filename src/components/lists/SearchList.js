import React from 'react'
import { FlatList } from 'react-native'
import SearchCard from '../listItems/SearchCard'
const SearchList = ({ result,value ,navigation}) => {     
    return (
        <FlatList
            data={result}
            renderItem={({ item }) => (
                <SearchCard
                    id={item.id}
                    name={item?.original_title ? item.original_title : item.original_name} 
                    media_type={value !== 'multi' ? value : item.media_type}
                    navigation={navigation}
                    releaseDate={item?.release_date?item.release_date:item.first_air_date}
                    image={item.poster_path}
                    popularity={item.popularity}
                />
          )}
      
      />
  )
}

export default SearchList