import React from 'react'
import SearchDetails from '../container/SearchDetails'

const DetailsScreen = ({navigation,route}) => {
  return (
    <SearchDetails navigation={navigation}  route={route}/>
  )
}

export default DetailsScreen