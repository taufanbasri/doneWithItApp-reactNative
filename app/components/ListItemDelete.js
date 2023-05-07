import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const RightActions = (progress, dragX, onPress) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const ListItemDelete = ({ children, onPress }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={(progress, dragX) => RightActions(progress, dragX, onPress)}>
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ListItemDelete