import React, { useEffect, useState,useRef } from 'react'
import FilterOptions from '../search/FilterOptions'
import SearchOption from '../search/SearchOption'
import { Text } from '@rneui/themed'
import { Button } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'

import { getSearchResults } from '../../services/api'
import SearchList from '../lists/SearchList'
  const data = [
        { label: 'movie', value: '1' },
        { label: 'multi', value: '2' },
        { label: 'tv', value: '3' },
  ]
const SearchContainer = ({navigation}) => {
    
    const [search, setSearch] = useState()
    const [value,setValue]=useState('multi')
   const [searchResult,setSearchResult]=useState()
    const [isSearched, setIsSearched] = useState(false)
    const[loading,setLoading]=useState(false)
    const [warning,setWarning]=useState(false)
    const selectedValue = (value) => {
        setValue(value)
    }
    const searchValue = (value) => {
            setSearch(value)
    }

    const onSearch = () => {
        if (search) {
            setWarning(false)
            getSearchResults(value, search).then(
                results => {
                    setSearchResult(results)
                },
                error => {
                    alert(`Error: Something went wrong ${error}`)
                }
            )
            setIsSearched(true)
        }
        else {
            setWarning(true)
        }
      
    }
    return (
        <>
           <View style={styles.container}>
          <Text style={styles.title}>Search Movie/TV Show Name* </Text> 
        <SearchOption searchValue={searchValue} onSearch={onSearch} search={search} />
                <Text style={styles.title}>Choose Search Type*</Text> 
        <View style={styles.filterView}>
        <FilterOptions style={styles.filter} data={data} selectedValue={selectedValue} type={value} />
        <Button style={styles.button } onPress={onSearch} title="search"></Button>
         </View>
        {warning?(<Text style={styles.warningMessage}>Movie/TV show name is required</Text>): <Text>Please select a search type</Text>} 
        </View>
             {isSearched ?
                (<SearchList result={searchResult} value={value} navigation={navigation} />)                
                    : (<View style={styles.message}><Text style={styles.messageText}>Please initiate search</Text></View>)}
        </>    
  )
}

const styles = StyleSheet.create({
  container: {
        marginTop: 10,
        marginLeft: 50,
      marginBottom:5,
      width: '70%',
    justifyContent: 'center', 
  },
  title: {
      fontWeight: 'bold',
      margin:2   
    },
    filterView: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginRight: 50,
        height:60
    },
    message: {
        alignItems: 'center',
        justifyContent: 'center',
        margin:50
    },
    messageText: {
        fontWeight: 'bold',
        fontSize:20

    },
    button: {
        marginLeft: 10,
        width: 100,
    },
    warningMessage: {
        color: 'red' 
    }
    
})

export default SearchContainer