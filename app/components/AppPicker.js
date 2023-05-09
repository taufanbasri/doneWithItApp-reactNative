import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import defaultStyles from '../config/styles';
import AppText from "./AppText";
import { useState } from "react";
import PickerItem from "./PickerItem";

const AppPicker = ({ icon, items, placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />

        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => <PickerItem label={item.label} onPress={() => console.log(item)} />}
        />
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
})

export default AppPicker