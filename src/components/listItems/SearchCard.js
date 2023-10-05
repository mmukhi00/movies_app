import { Button } from '@rneui/base'
import { Card, Text } from '@rneui/themed'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { imageUrl } from '../../constants/Constants'
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider'
const SearchCard = (props) => {

    const {id,name,media_type,navigation,popularity,image,releaseDate}=props
    return (
      <>
      <Card containerStyle={styles.container}>
        <View style={styles.container}>
     <View style={styles.imageView} >
     <Card.Image source={{ uri:imageUrl+image }}/>  
    </View>
    <View style={styles.detailsConatiner}>
    <Text style={styles.title}>{name}</Text>
    <Text>Popularity: {popularity}</Text>
    <Text>Release Date: {releaseDate}</Text>
    <View style={styles.button} >
    <Button title='View' onPress={() => {
            navigation.navigate('Search', {
                id,
                media_type
            })
    }}></Button>
     </View>
     </View>  
      </View>        
             
      </Card>
      <CardDivider />
    </>
  )
}

const styles= StyleSheet.create({
    container: {
        // padding: '10px',
        margin:0,
        flexDirection: 'row',
         alignItems: 'center',
        justifyContent:'flex-start',
        width:'auto'
    },
    innerContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent:'space-around'
        
    },
    imageView: {
      width:100
        
    },
    title:{
        fontWeight: 'bold',
        textAlign:'auto'
            // marginTop: 10,
            
    },
    detailsConatiner: {
        marginLeft:10
       
    },
    button: {
        width:200
    }
        

})
export default SearchCard

