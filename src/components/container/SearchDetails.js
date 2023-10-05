import React, { useEffect, useState } from 'react'
import {Text,Image, StyleSheet} from 'react-native'
import {getSearchDetails } from '../../services/api'
import { View } from 'react-native'
import { imageUrl } from '../../constants/Constants'

const SearchDetails = ({ navigation, route, }) => {
  const { id ,media_type} = route.params
  const [movie, setMovie] = useState()
  useEffect(() => {
    getSearchDetails(id,media_type).then(
      reponse => {
        
        setMovie(reponse)
        console.log(id)
      }
    ),
      error => {
        alert(`Error: something went worng ${error}`)
      }
  }, [id])
  return (
  <>
      {movie && <View style={styles.container}>
             <Text style={styles.title}>{movie?.original_title?movie?.original_title:movie?.original_name}</Text>    

       <Image source={{uri:imageUrl + movie.poster_path}} style={styles.imageView}/>
      <Text style={styles.overView}>{movie.overview}</Text>
      <Text>Popularity: {movie.popularity} | Release Date: {movie?.release_date?movie.release_date:movie.first_air_date}</Text>
      </View>}
    </>
  )
}

export default SearchDetails

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageView: {
    marginTop:'10px',
    paddingTop: '10px',
    width: 200,
    height:250
    
  },
  title: {
    fontWeight: 'bold',
    fontSize:20,
    margin:25
  },
  overView: {
    margin:25
  }

})