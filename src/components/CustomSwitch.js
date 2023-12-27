import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
  // State to manage the selected mode (1 or 2)
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  // Function to update the switch data and notify the parent component
  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.container}>
      {/* Option 1 Button */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={[
          styles.switchButton,
          { backgroundColor: getSelectionMode === 1 ? '#AD40AF' : '#e4e4e4' },
        ]}>
        <Text
          style={[
            styles.switchButtonText,
            { color: getSelectionMode === 1 ? 'white' : '#AD40AF' },
          ]}>
          {option1}
        </Text>
      </TouchableOpacity>

      {/* Option 2 Button */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={[
          styles.switchButton,
          { backgroundColor: getSelectionMode === 2 ? '#AD40AF' : '#e4e4e4' },
        ]}>
        <Text
          style={[
            styles.switchButtonText,
            { color: getSelectionMode === 2 ? 'white' : '#AD40AF' },
          ]}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the CustomSwitch component
const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    borderColor: '#AD40AF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switchButton: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchButtonText: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
});

export default CustomSwitch;
