import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

const Dropdown = ({ isVisible, options, onSelect, onClose }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
          }}
              >
        <TouchableOpacity onPress={toggleModal}>
        <Icon name="arrow-down" size={30} color="black" />
      </TouchableOpacity>
          {options.map(option => (
            <TouchableOpacity key={option.value} onPress={() => onSelect(option)}>
              <Text style={{ fontSize: 16, paddingVertical: 8 }}>{option.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onClose}>
            <Text style={{ fontSize: 16, color: 'blue', textAlign: 'right' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Dropdown;
