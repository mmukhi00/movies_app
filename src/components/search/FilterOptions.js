import React, { useState } from 'react'
  import { Dropdown } from 'react-native-element-dropdown';
import { View, TouchableOpacity, Text,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';


const FilterOptions = ({ data,selectedValue }) => {
 
  return (
   <Dropdown
      style={styles.dropdown}
      data={data}
      labelField="label"
      valueField="value"
      onChange={item => {
       selectedValue(item.label)
      }}>
      
        </Dropdown> 
   
  )


}
export default FilterOptions

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
    marginBottom:20,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems:'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginLeft:55
  }
})

//  <Modal isVisible={isVisible}>
//       <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//         <View
//           style={{
//             backgroundColor: 'white',
//             padding: 16,
//           }}
//         >
//           {options.map(option => (
//             <TouchableOpacity key={option.value} onPress={() => onSelect(option)}>
//               <Text style={{ fontSize: 16, paddingVertical: 8 }}>{option.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </Modal>