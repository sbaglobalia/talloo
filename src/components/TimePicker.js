import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePicker = props => {
  return (
    <View style={style.root}>
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() => props.showTimePicker()}>
        <Text
          style={{
            color: 'red',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Add Time:
        </Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && (
        <View style={style.inlineSwitchContainer}>
          <Text style={style.inlineSwitchText}>Display inline?</Text>
          <Switch value={props.inline} onValueChange={props.setInline} />
        </View>
      )}
      <DateTimePickerModal
        isVisible={props.pickerMode !== null}
        mode={props.pickerMode}
        onConfirm={props.handleConfirm}
        onCancel={props.hidePicker}
        display={props.inline ? 'inline' : undefined}
        date={new Date()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  },
});

export default TimePicker;
