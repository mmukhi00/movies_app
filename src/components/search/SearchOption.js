import { Button, Input, SearchBar, Text } from '@rneui/themed'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const SearchOption = ({ searchValue, search }) => {
  return (
    <SearchBar round lightTheme={true} style={styles.searchBar }  onChangeText={searchValue} value={search} ></SearchBar>
  
      )
}

export default SearchOption

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',

  }
})