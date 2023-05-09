import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import colors from '../config/colors'
import AppText from './AppText'

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.light}
          onPress={onPress}
        >
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}

            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>

            <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={20} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500'
  }
})

export default ListItem