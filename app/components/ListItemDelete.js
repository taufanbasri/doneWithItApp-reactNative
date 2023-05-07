import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const RightActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='trash-can' size={35} color={colors.white} />
    </View>
  );
};

const ListItemDelete = ({ children }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={(progress, dragX) => RightActions(progress, dragX)}>
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